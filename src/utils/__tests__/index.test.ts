import { createBreadcrumb, generateBreadcrumbs, getQuizParentBreadcrumb, titleize } from '..';
import { Breadcrumb, QuizIndex } from '../../types';

test('createBreadcrumb', () => {
  expect(createBreadcrumb('something')).toStrictEqual({ anchor: 'something', title: 'Something' });
});

test('getQuizParentBreadcrumb', () => {
  const {
    GuessThePattern,
    OddPhonemeOut,
    PhoneticSpelling,
    SameWordsDifferentStress,
    ShoppingForAPresent,
    WhereIsTheStress
  } = QuizIndex;
  const phonemes: Breadcrumb = { anchor: 'phonemes', title: 'Phonemes' };
  const intonation: Breadcrumb = { anchor: 'intonation', title: 'Intonation' };
  const stress: Breadcrumb = { anchor: 'stress', title: 'Stress' };

  expect(getQuizParentBreadcrumb(SameWordsDifferentStress)).toStrictEqual(stress);
  expect(getQuizParentBreadcrumb(WhereIsTheStress)).toStrictEqual(stress);
  expect(getQuizParentBreadcrumb(GuessThePattern)).toStrictEqual(intonation);
  expect(getQuizParentBreadcrumb(ShoppingForAPresent)).toStrictEqual(intonation);
  expect(getQuizParentBreadcrumb(OddPhonemeOut)).toStrictEqual(phonemes);
  expect(getQuizParentBreadcrumb(PhoneticSpelling)).toStrictEqual(phonemes);
});

test('generateBreadcrumbs', () => {
  const home: Breadcrumb = { anchor: 'home', title: 'Home' };
  const phonemes: Breadcrumb = { anchor: 'phonemes', title: 'Phonemes' };
  const intonation: Breadcrumb = { anchor: 'intonation', title: 'Intonation' };
  const stress: Breadcrumb = { anchor: 'stress', title: 'Stress' };
  const quiz: Breadcrumb = { anchor: 'quiz', title: 'Quiz' };

  expect(generateBreadcrumbs('home', 0)).toStrictEqual([home]);
  expect(generateBreadcrumbs('mission', 0)).toStrictEqual([home, { anchor: 'mission', title: 'Mission' }]);
  expect(generateBreadcrumbs('phonemes', 0)).toStrictEqual([home, phonemes]);
  expect(generateBreadcrumbs('vowels', 0)).toStrictEqual([home, phonemes, { anchor: 'vowels', title: 'Vowels' }]);
  expect(generateBreadcrumbs('diphthongs', 0)).toStrictEqual([
    home,
    phonemes,
    { anchor: 'diphthongs', title: 'Diphthongs' }
  ]);
  expect(generateBreadcrumbs('consonants', 0)).toStrictEqual([
    home,
    phonemes,
    { anchor: 'consonants', title: 'Consonants' }
  ]);
  expect(generateBreadcrumbs('stress', 0)).toStrictEqual([home, stress]);
  expect(generateBreadcrumbs('intonation', 0)).toStrictEqual([home, intonation]);
  expect(generateBreadcrumbs('falling', 0)).toStrictEqual([home, intonation, { anchor: 'falling', title: 'Falling' }]);
  expect(generateBreadcrumbs('rising', 0)).toStrictEqual([home, intonation, { anchor: 'rising', title: 'Rising' }]);
  expect(generateBreadcrumbs('non-final', 0)).toStrictEqual([
    home,
    intonation,
    { anchor: 'non-final', title: 'Non-Final' }
  ]);
  expect(generateBreadcrumbs('quiz', QuizIndex.SameWordsDifferentStress)).toStrictEqual([home, stress, quiz]);
  expect(generateBreadcrumbs('quiz', QuizIndex.WhereIsTheStress)).toStrictEqual([home, stress, quiz]);
  expect(generateBreadcrumbs('quiz', QuizIndex.GuessThePattern)).toStrictEqual([home, intonation, quiz]);
  expect(generateBreadcrumbs('quiz', QuizIndex.ShoppingForAPresent)).toStrictEqual([home, intonation, quiz]);
  expect(generateBreadcrumbs('quiz', QuizIndex.OddPhonemeOut)).toStrictEqual([home, phonemes, quiz]);
  expect(generateBreadcrumbs('quiz', QuizIndex.PhoneticSpelling)).toStrictEqual([home, phonemes, quiz]);
});

test('titleize', () => {
  expect(titleize('')).toBe('');
  expect(titleize('b')).toBe('B');
  expect(titleize('bonjour')).toBe('Bonjour');
  expect(titleize('Bonjour')).toBe('Bonjour');
  expect(titleize('bonJoUr')).toBe('BonJoUr');
});
