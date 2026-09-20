import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {createHash} from "node:crypto";
import {buildCatalog,syncCatalog} from "./sermon-catalog.mjs";
function fixture(t){
 const root=fs.mkdtempSync(path.join(os.tmpdir(),"brl-catalog-test-"));
 t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
 const app=path.join(root,"app"),source=path.join(root,"source");fs.mkdirSync(app);
 function add(name,id,status="draft"){
  const folder=path.join(source,"sermons",status,name);fs.mkdirSync(path.join(folder,"00-metadata"),{recursive:true});
  fs.writeFileSync(path.join(folder,"source.txt"),"original");
  const m={schemaVersion:"2.0",id,title:name,status,mainText:[],speaker:null,series:null,
   review:{doctrinalApproval:true,editorialApproval:true,publicationReady:true},
   resources:[{resourceKey:"source",role:"legacy-source",format:"txt",path:"source.txt",bytes:8,sha256:createHash("sha256").update("original").digest("hex")}]};
  const file=path.join(folder,"00-metadata/sermon.json");fs.writeFileSync(file,JSON.stringify(m));return {file,m};
 }return {app,source,add};
}
test("discovers new packages, preserves null IDs, gates drafts, deterministic output",t=>{
 const f=fixture(t);f.add("one","BRL-SER-410.001");f.add("unresolved",null,"published");f.add("public","EXISTING-2","published");
 const c=buildCatalog(f.source,f.app);assert.equal(c.summary.discovered,3);assert.equal(c.summary.publicVisible,1);assert.equal(c.summary.unresolved.length,1);
 syncCatalog(f.source,f.app);syncCatalog(f.source,f.app,true);
});
test("duplicate permanent IDs fail without replacing catalog",t=>{
 const f=fixture(t);f.add("one","SAME");syncCatalog(f.source,f.app);const before=fs.readFileSync(path.join(f.app,"generated/sermon-catalog.json"),"utf8");
 f.add("two","SAME");assert.throws(()=>syncCatalog(f.source,f.app),/duplicates/);assert.equal(fs.readFileSync(path.join(f.app,"generated/sermon-catalog.json"),"utf8"),before);
});
test("invalid hash and path traversal reject package",t=>{
 const f=fixture(t);const {file,m}=f.add("one","ONE");m.resources[0].sha256="0".repeat(64);fs.writeFileSync(file,JSON.stringify(m));
 assert.match(buildCatalog(f.source,f.app).summary.excluded[0].reason,/SHA-256/);
 m.resources[0].path="../outside";fs.writeFileSync(file,JSON.stringify(m));
 assert.match(buildCatalog(f.source,f.app).summary.excluded[0].reason,/Unsafe/);
});
test("only byte-matched existing downloads are linked",t=>{
 const f=fixture(t);f.add("one","ONE");const dir=path.join(f.app,"public/downloads/sermons/ONE");fs.mkdirSync(dir,{recursive:true});
 fs.writeFileSync(path.join(dir,"renamed.txt"),"original");
 assert.equal(buildCatalog(f.source,f.app).packages[0].resources[0].downloadUrl,"/downloads/sermons/ONE/renamed.txt");
 fs.writeFileSync(path.join(dir,"renamed.txt"),"different");assert.equal(buildCatalog(f.source,f.app).packages[0].resources[0].downloadUrl,null);
});

test("approval gates and missing sources fail closed",t=>{
 const f=fixture(t);const {file,m}=f.add("one","ONE","published");
 m.review.publicationReady=false;fs.writeFileSync(file,JSON.stringify(m));
 assert.equal(buildCatalog(f.source,f.app).summary.publicVisible,0);
 m.review.publicationReady=true;m.identityReview={required:true};fs.writeFileSync(file,JSON.stringify(m));
 assert.equal(buildCatalog(f.source,f.app).summary.publicVisible,0);
 assert.throws(()=>buildCatalog(path.join(f.source,"missing"),f.app),/unavailable/);
});
test("existing v2 resources without recorded byte size are measured",t=>{
 const f=fixture(t);const {file,m}=f.add("one","ONE");delete m.resources[0].bytes;fs.writeFileSync(file,JSON.stringify(m));
 const c=buildCatalog(f.source,f.app);assert.equal(c.summary.excluded.length,0);assert.equal(c.packages[0].resources[0].bytes,8);
});
