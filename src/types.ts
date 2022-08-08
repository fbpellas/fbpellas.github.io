export interface Pronunciation {
  phoneme: string;
  graphemes: string;
  examples: string;
  audioPhoneme: string;
  audioExamples: string;
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
