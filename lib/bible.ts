export interface BibleVerse {
  verse: number;
  text: string;
}

export interface BibleChapter {
  chapter: number;
  verses: BibleVerse[];
}

type BibleJson = Record<
  string,
  Record<
    string,
    Record<string, string>
  >
>;

const bibleCache: Record<string, BibleJson> = {};

/**
 * Load a Bible translation.
 */
export async function loadBible(
  translation = "KJV"
): Promise<BibleJson> {
  if (bibleCache[translation]) {
    return bibleCache[translation];
  }

  const response = await fetch(
    `/bibles/${translation}.json`
  );

  if (!response.ok) {
    throw new Error(
      `Unable to load ${translation}.json`
    );
  }

  const bible = await response.json();

  bibleCache[translation] = bible;

  return bible;
}

/**
 * Get all books.
 */
export async function getBooks(
  translation = "KJV"
): Promise<string[]> {
  const bible = await loadBible(translation);

  return Object.keys(bible);
}

/**
 * Get one chapter.
 */
export async function getChapter(
  bookName: string,
  chapterNumber: number,
  translation = "KJV"
): Promise<BibleChapter | undefined> {
  const bible = await loadBible(translation);

  const book = bible[bookName];

  if (!book) return undefined;

  const chapter = book[String(chapterNumber)];

  if (!chapter) return undefined;

  return {
    chapter: chapterNumber,
    verses: Object.entries(chapter).map(
      ([verse, text]) => ({
        verse: Number(verse),
        text,
      })
    ),
  };
}

/**
 * Get one verse.
 */
export async function getVerse(
  bookName: string,
  chapterNumber: number,
  verseNumber: number,
  translation = "KJV"
): Promise<BibleVerse | undefined> {
  const chapter = await getChapter(
    bookName,
    chapterNumber,
    translation
  );

  return chapter?.verses.find(
    (v) => v.verse === verseNumber
  );
}