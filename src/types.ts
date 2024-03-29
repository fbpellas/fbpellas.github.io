export interface Pronunciation {
  phoneme: string;
  graphemes: string;
  examples: string;
  audioPhoneme: string;
  audioExamples: string;
}

export enum NavHover {
  Author = 'author',
  Phonemes = 'phonemes',
  Intonation = 'intonation'
}

export interface Search {
  keywords: string[];
  anchor: string;
  title: string;
}

export interface SearchMatch {
  keyword: string;
  anchor: string;
  title: string;
}

export interface Breadcrumb {
  anchor: string;
  title: string;
}

export enum QuizIndex {
  OddPhonemeOut = 0,
  PhoneticSpelling = 1,
  SameWordsDifferentStress = 2,
  WhereIsTheStress = 3,
  GuessThePattern = 4,
  ShoppingForAPresent = 5
}
