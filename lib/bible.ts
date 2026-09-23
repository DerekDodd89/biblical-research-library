export interface BibleVerse {
  verse: number;
  text: string;
}

export interface BibleChapter {
  chapter: number;
  verses: BibleVerse[];
}

export interface BibleBook {
  name: string;
  chapters: BibleChapter[];
}

export interface BibleTranslation {
  translation: string;
  books: BibleBook[];
}

const bibleCache: Record<string, BibleTranslation> = {};

export async function loadBible(
  translation = "KJV"
): Promise<BibleTranslation> {

  if (bibleCache[translation]) {
    return bibleCache[translation];
  }

  const response = await fetch(`/bibles/${translation}.json`);

  if (!response.ok) {
    throw new Error(`Unable to load ${translation}.json`);
  }

  const bible = await response.json();

  bibleCache[translation] = bible;

  return bible;
}

export async function getBooks(
  translation = "KJV"
): Promise<string[]> {

  const bible = await loadBible(translation);

  return bible.books.map(book => book.name);
}

export async function getChapter(
  bookName: string,
  chapterNumber: number,
  translation = "KJV"
): Promise<BibleChapter | undefined> {

  const bible = await loadBible(translation);

  const book = bible.books.find(
    b => b.name.toLowerCase() === bookName.toLowerCase()
  );

  if (!book) return undefined;

  return book.chapters.find(
    c => c.chapter === chapterNumber
  );
}

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
    v => v.verse === verseNumber
  );
}