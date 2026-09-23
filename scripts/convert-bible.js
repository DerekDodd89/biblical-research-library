const fs = require("fs");

function convertBible(inputFile, outputFile) {
    const raw = JSON.parse(fs.readFileSync(inputFile, "utf8"));

    const translation = raw.translation ?? "Unknown";

    const books = [];

    for (const [bookName, chapters] of Object.entries(raw)) {

        if (bookName === "translation") continue;

        books.push({
            name: bookName,
            chapters: Object.entries(chapters).map(([chapterNumber, verses]) => ({
                chapter: Number(chapterNumber),
                verses: Object.entries(verses).map(([verseNumber, text]) => ({
                    verse: Number(verseNumber),
                    text,
                    strongs: [],
                    morphology: null,
                    crossReferences: [],
                    footnotes: [],
                    notes: []
                }))
            }))
        });

    }

    fs.writeFileSync(
        outputFile,
        JSON.stringify(
            {
                translation,
                books
            },
            null,
            2
        )
    );

    console.log(`Converted ${outputFile}`);
}
// ======================================================
// Convert the BRL Bible JSON files
// ======================================================

convertBible(
    "./public/bibles/NKJV.json",
    "./public/bibles/NKJV.json"
);

convertBible(
    "./public/bibles/ESV.json",
    "./public/bibles/ESV.json"
);

convertBible(
    "./public/bibles/NASB.json",
    "./public/bibles/NASB.json"
);

console.log("Finished.");