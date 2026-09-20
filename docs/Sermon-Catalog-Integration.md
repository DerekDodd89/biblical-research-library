# Phase 1 sermon catalog integration

## Identity collision recorded before catalog replacement (2026-09-13)

The former lib/sermons.ts record assigned BRL-SER-410.003 to "Do You Know God?", slug do-you-know-god-sermon-1, subtitle "Sermon 1 — Getting to Know God", and status published. lib/sermon-series.ts also associated that ID with Do You Know God?.

The authoritative sibling brl-sermons manifest assigns BRL-SER-410.003 to "The Law of Death, The Grace of Life", status draft. Getting to Know God has id null, status draft, and unresolved observations BRL-S000001 / BRL-S000002. These observations are not approved aliases. The former app record must not be reassigned to the Galatians package or used to fill its content.

This phase uses the authoritative manifest identities. The old application record is preserved in Git history, not treated as a second authoritative sermon. No alias or new permanent ID is assigned. Existing public downloads remain untouched, including the conflicted 410.003 directory; only hash-matched resources may acquire catalog links.


## Operating the integration

- Run `npm run sermons:sync` to read the local sibling `../brl-sermons` working tree. No network/GitHub access occurs.
- `npm run dev` and `npm run build` synchronize first. Re-run sync after source changes during a running dev session.
- `npm run sermons:check` verifies that checked-in/generated outputs match the current source snapshot without rewriting them.
- `npm run test:sermons` exercises validation, duplicate IDs, unresolved identity, visibility, deterministic output, and byte-matched downloads.
- Full inventory: `generated/sermon-catalog.json`.
- Public projection: `generated/sermon-catalog.public.json`. Only this projection enters client search bundles.
- Development-only inventory: `/sermons/catalog` when running `npm run dev`. Production returns not found for that route.
- Both repositories must be available side by side for sync/build. This phase does not provision the sibling repository in CI or deploy source documents.

## Policy and validation

Discover manifests recursively under sermons/draft, sermons/in-review, sermons/published, and sermons/archived. Preserve raw metadata, source manifest hash, actual resource inventory, speaker, primary text, series, order, review state, and null IDs. Folder-derived routing keys are not permanent BRL IDs.

Public inclusion requires published lifecycle, a permanent ID, no required identity review, and explicit true values for doctrinalApproval, editorialApproval, and publicationReady. Legacy status remains independent and is displayed in development inventory. Legacy sources are not automatically published. Series pages and public details derive from the same public catalog; series order follows manifest sequence.

Missing/invalid metadata, unsafe paths, resource hash mismatches, recorded size mismatches, and duplicate permanent IDs stop generation before either output is replaced. If an older manifest omits byte size, measure it while still requiring its checksum. Missing source repository also stops generation. No source file is modified.

Download URLs are matched by SHA-256 against files already under public/downloads/sermons, including their actual names and URL encoding. No files are copied or fabricated. Resources not already deployed retain null download URLs. Existing static downloads remain accessible at their old URLs; this phase does not revoke their direct public access.

The adapter leaves absent online sermon bodies and unrecorded durations empty. It does not reuse the former hard-coded Do You Know God? exposition for Galatians. The online-outline route returns not found until body content exists; public metadata detail pages retain the existing presentation component.

## Current source results

22 valid packages; 11 permanent IDs; 11 unresolved identities; no duplicate permanent IDs; no excluded packages. Lifecycle: 21 draft, zero in-review, zero published, one archived. Publicly visible: zero; withheld: 22. Legacy-import flag: 17.

Permanent IDs:
- BRL-SER-410.001, BRL-SER-410.002, BRL-SER-410.003
- BRL-SER-411.002, BRL-SER-411.003, BRL-SER-411.004
- SER-RABBI-410.001, SER-RABBI-410.002, SER-RABBI-410.003, SER-RABBI-410.004, SER-RABBI-410.005

Unresolved: nine Hebrews packages, Getting to Know God, and Jesus' Memorial Service. Hebrews SER-HEB labels remain source metadata evidence and are not substituted for permanent IDs.

Collections detected: three Josh imports, nine Hebrews imports, five Rabbi Jesus imports. Series: Biblical Worship; Do You Know God?; First Corinthians; Hebrews; Sitting at the Feet of Rabbi Jesus.

410.001 is discovered solely from its manifest and retained as The Direction of Worship, draft/unreviewed. 410.002 is The Plan of Salvation, draft/unreviewed. 410.003 is The Law of Death, The Grace of Life, draft/unreviewed. None qualifies for public visibility.

## Validation notes

Catalog resources are SHA-256 checked on every sync. The source repository and existing application download files are read only. The public search now correctly returns zero for the current unapproved source snapshot; this is policy behavior, not missing discovery.

Repository-wide lint reports pre-existing issues in PassageSetup.tsx (two effect/state errors), HeroSection.tsx (two unescaped quote errors), SermonHeader.tsx (one unescaped apostrophe error), plus two warnings. Those files were not changed by this phase.
