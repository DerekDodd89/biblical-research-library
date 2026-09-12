"use client";

import SermonHeader from "./SermonHeader";
import SermonOutline from "./SermonOutline";
import SermonDocument from "./SermonDocument";
import SermonFooter from "./SermonFooter";

export default function SermonEngine() {
  return (
    <main className="flex h-screen bg-[#0B1526] text-white">

      {/* LEFT */}

      <aside className="w-72 border-r #8b6a2b bg-[#0b1625]">

        <SermonOutline />

      </aside>

      {/* CENTER */}

      <section className="flex flex-1 flex-col">

        <SermonHeader />

        <div className="flex-1 overflow-auto bg-[#d9d9d9]">

          <div className="mx-auto max-w-5xl py-10">

            <SermonDocument />

          </div>

        </div>

        <SermonFooter />

      </section>

      {/* RIGHT */}

      <aside className="w-80 border-l #8b6a2b bg-[#0b1625]">

        <div className="p-6 text-neutral-400">

Context Verification coming soon...

</div>

      </aside>

    </main>
  );
}