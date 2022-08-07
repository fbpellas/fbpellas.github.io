import { Breadcrumb, QuizIndex } from "../types";

/**
 * @name titleize
 * @description Returns capital letter then same case
 */
const titleize = (word: string) => {
  if (!word) return '';

  const capitalLetter = word.charAt(0).toUpperCase();

  if (word.length === 1) return capitalLetter;

  return `${capitalLetter}${word.slice(1)}`;
}

/**
 * @name generateBreadcrumbs
 * @description Based on the current page, get the path to this page
 */
const generateBreadcrumbs = (page: string, indexCarousel: QuizIndex): Breadcrumb[] => {
  const { GuessThePattern, OddPhonemeOut, PhoneticSpelling, SameWordsDifferentStress, ShoppingForAPresent, WhereIsTheStress } = QuizIndex;
  const title = page === 'non-final' ? 'Non-Final' : titleize(page);

  const home: Breadcrumb = { anchor: 'home', title: 'Home' };
  const phonemes: Breadcrumb = { anchor: 'phonemes', title: 'Phonemes' }
  const intonation: Breadcrumb = { anchor: 'intonation', title: 'Intonation' }
  const stress: Breadcrumb = { anchor: 'stress', title: 'Stress' }
  const currentPage: Breadcrumb = { anchor: page, title };

  switch (page) {
    case 'about-author':
      return [home, { anchor: page, title: 'About the Author' }];

    case 'mission':
      return [home, { anchor: page, title: 'Mission' }];

    case 'intonation':
    case 'phonemes':
    case 'stress':
      return [home, currentPage];

    case 'consonants':
    case 'diphthongs':
    case 'vowels':
      return [home, phonemes, currentPage]

    case 'falling':
    case 'non-final':
    case 'rising':
      return [home, intonation, currentPage];

    case 'quiz':
      if ([SameWordsDifferentStress, WhereIsTheStress].includes(indexCarousel)) {
        return [home, stress, currentPage]
      }

      if ([GuessThePattern, ShoppingForAPresent].includes(indexCarousel)) {
        return [home, intonation, currentPage]
      }

      if ([OddPhonemeOut, PhoneticSpelling].includes(indexCarousel)) {
        return [home, phonemes, currentPage]
      }

    default:
      return [home];
  }
}

export { generateBreadcrumbs, titleize };