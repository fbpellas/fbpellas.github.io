import flatten from 'lodash/flatten';
import { Breadcrumb, Pronunciation, QuizIndex } from '../types';

/**
 * @name sanitizeExamples
 * @description Makes examples readable (human-friendly)
 */
const sanitizeExamples = (examples: string) => {
  return examples.replace(/<u>/g, '').replace(/<\/u>/g, '').split(', ');
};

/**
 * @name sanitizePhoneme
 * @description Makes phoneme readable (human-friendly)
 */
const sanitizePhoneme = (phoneme: string) => {
  return phoneme.replace(/\//g, '');
};

/**
 * @name generateKeysExamples
 * @description Returns a list of strings that can be matched for search (examples)
 */
const generateKeysExamples = (data: Pronunciation[]) => {
  return flatten(
    data.map((d: Pronunciation) => {
      const { examples } = d;
      const sanitizedExamples = sanitizeExamples(examples);

      const filteredExamples = sanitizedExamples.filter((example: string) => example.length > 2);

      return filteredExamples;
    })
  );
};

/**
 * @name generateKeysPhoneme
 * @description Returns a list of strings that can be matched for search (phoneme)
 */
const generateKeysPhoneme = (data: Pronunciation[]) => {
  return flatten(
    data.map((d: Pronunciation) => {
      const { phoneme } = d;
      const sanitizedPhoneme = sanitizePhoneme(phoneme);

      return [sanitizedPhoneme, phoneme];
    })
  );
};

/**
 * @name titleize
 * @description Returns capital letter then same case
 */
const titleize = (word: string) => {
  if (!word) return '';

  const capitalLetter = word.charAt(0).toUpperCase();

  if (word.length === 1) return capitalLetter;

  return `${capitalLetter}${word.slice(1)}`;
};

/**
 * @name createBreadcrumb
 * @description Creates a simple breadcrumb based on a page
 */
const createBreadcrumb = (page: string): Breadcrumb => ({ anchor: page, title: titleize(page) });

/**
 * @name getQuizParentBreadcrumb
 * @description Returns the parent breadcrumb that suits the current quiz best
 */
const getQuizParentBreadcrumb = (indexCarousel: QuizIndex): Breadcrumb => {
  const {
    GuessThePattern,
    OddPhonemeOut,
    PhoneticSpelling,
    SameWordsDifferentStress,
    ShoppingForAPresent,
    WhereIsTheStress
  } = QuizIndex;
  const [phonemes, intonation, stress] = ['phonemes', 'intonation', 'stress'].map(createBreadcrumb);

  switch (indexCarousel) {
    case SameWordsDifferentStress:
    case WhereIsTheStress:
    default:
      return stress;

    case GuessThePattern:
    case ShoppingForAPresent:
      return intonation;

    case OddPhonemeOut:
    case PhoneticSpelling:
      return phonemes;
  }
};

/**
 * @name generateBreadcrumbs
 * @description Based on the current page, get the path to this page
 */
const generateBreadcrumbs = (page: string, indexCarousel: QuizIndex): Breadcrumb[] => {
  const title = page === 'non-final' ? 'Non-Final' : titleize(page);
  const currentPage: Breadcrumb = { anchor: page, title };

  const [home, phonemes, intonation] = ['home', 'phonemes', 'intonation'].map(createBreadcrumb);
  const quizParentBreadcrumb = getQuizParentBreadcrumb(indexCarousel);

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
      return [home, phonemes, currentPage];

    case 'falling':
    case 'non-final':
    case 'rising':
      return [home, intonation, currentPage];

    case 'quiz':
      return [home, quizParentBreadcrumb, currentPage];

    default:
      return [home];
  }
};

export {
  createBreadcrumb,
  getQuizParentBreadcrumb,
  generateBreadcrumbs,
  generateKeysExamples,
  generateKeysPhoneme,
  sanitizeExamples,
  sanitizePhoneme,
  titleize
};
