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

/**
 * Load a Bible translation.
 */
export async function loadBible(
  translation: string = "ASV"
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

/**
 * Get a book.
 */
export async function getBook(
  bookName: string,
  translation: string = "ASV"
): Promise<BibleBook | undefined> {

  const bible = await loadBible(translation);

  return bible.books.find(
    (book) =>
      book.name.toLowerCase() === bookName.toLowerCase()
  );
}

/**
 * Get a chapter.
 */
export async function getChapter(
  bookName: string,
  chapterNumber: number,
  translation: string = "ASV"
): Promise<BibleChapter | undefined> {

  const book = await getBook(bookName, translation);

  if (!book) return undefined;

  return book.chapters.find(
    (chapter) =>
      chapter.chapter === chapterNumber
  );
}

/**
 * Get one verse.
 */
export async function getVerse(
  bookName: string,
  chapterNumber: number,
  verseNumber: number,
  translation: string = "ASV"
): Promise<BibleVerse | undefined> {

  const chapter = await getChapter(
    bookName,
    chapterNumber,
    translation
  );

  if (!chapter) return undefined;

  return chapter.verses.find(
    (verse) =>
      verse.verse === verseNumber
  );
}

/**
 * Get all books.
 */
export async function getBooks(
  translation: string = "ASV"
): Promise<string[]> {

  const bible = await loadBible(translation);

  return bible.books.map((book) => book.name);
}