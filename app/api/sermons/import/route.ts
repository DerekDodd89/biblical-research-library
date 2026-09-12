import { NextResponse } from "next/server";

import { scanFolder } from "@/lib/importer/scanFolder";
import { buildQueue } from "@/lib/importer/buildQueue";

export async function POST(request: Request) {
  try {
    const { folder } = await request.json();

    if (!folder) {
      return NextResponse.json(
        { error: "Folder required" },
        { status: 400 }
      );
    }

    const files = await scanFolder(folder);
    console.log("FILES FOUND:", files.length);
    console.log(files);

    const queue = buildQueue(files);
    console.log("QUEUE BUILT:", queue.length);
    console.log(queue);

    return NextResponse.json({
      success: true,
      queue,
    });

  } catch (err) {

    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: "Import failed",
      },
      { status: 500 }
    );

  }
}