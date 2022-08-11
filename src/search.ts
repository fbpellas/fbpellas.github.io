import { diphthongs, consonants, vowels } from './data/phonemes';
import flatten from 'lodash/flatten';
import { Pronunciation } from './types';
import { AUTHOR_FIRSTNAME, AUTHOR_FULLNAME, AUTHOR_LASTNAME } from './constants';
import { sanitizeExamples, sanitizePhoneme } from './utils';

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

const generateKeysPhoneme = (data: Pronunciation[]) => {
  return flatten(
    data.map((d: Pronunciation) => {
      const { phoneme } = d;
      const sanitizedPhoneme = sanitizePhoneme(phoneme);

      return [sanitizedPhoneme, phoneme];
    })
  );
};

const consonantsKeys = generateKeysExamples(consonants);
const diphthongsKeys = generateKeysExamples(diphthongs);
const vowelsKeys = generateKeysExamples(vowels);

const consonantsKeysPhonemes = generateKeysPhoneme(consonants);
const diphthongsKeysPhonemes = generateKeysPhoneme(diphthongs);
const vowelsKeysPhonemes = generateKeysPhoneme(vowels);

export const mappingPhonemes = [
  [consonantsKeysPhonemes, 'consonants', 'Consonants (phonemes)'],
  [diphthongsKeysPhonemes, 'diphthongs', 'Diphthongs (phonemes)'],
  [vowelsKeysPhonemes, 'vowels', 'Vowels (phonemes)']
];

const mappingExamples = [
  [consonantsKeys, 'consonants', 'Consonants (examples)'],
  [diphthongsKeys, 'diphthongs', 'Diphthongs (examples)'],
  [vowelsKeys, 'vowels', 'Vowels (examples)']
];

export const mapping = [
  ...mappingExamples,
  ...mappingPhonemes,
  [
    [
      'about',
      'author',
      'about the author',
      AUTHOR_FIRSTNAME.toLowerCase(),
      AUTHOR_LASTNAME.toLowerCase(),
      AUTHOR_FULLNAME.toLowerCase()
    ],
    'about-author',
    'About the Author'
  ],
  [['mission', 'teachers', 'how to', 'students'], 'mission', 'Mission'],
  [['consonant', 'consonants', 'letter', 'letters'], 'consonants', 'Consonants'],

  [['phoneme', 'phonemes'], 'phonemes', 'Phonemes'],
  [['letter', 'vowel', 'vowels'], 'vowels', 'Vowels'],
  [['diphthong', 'diphthongs'], 'diphthongs', 'Diphthongs'],
  [['stress'], 'stress', 'Stress'],
  [['intonation'], 'intonation', 'Intonation'],
  [['rising', 'up', 'intonation'], 'rising', 'Rising'],
  [['falling', 'down', 'intonation'], 'falling', 'Falling'],
  [['non-final', 'up', 'down', 'non final', 'intonation'], 'non-final', 'Non-Final'],
  [
    [
      'odd phoneme out',
      'odd one out',
      'phonetic spelling',
      'same words different stress',
      'where is the stress',
      "where's the stress",
      'guess the pattern',
      'shopping for a present',
      'quiz',
      'quizzes'
    ],
    'quiz',
    'Quiz'
  ],
  [['english', 'pronunciation', 'english pronunciation', 'home', 'homepage', 'main'], 'home', 'Homepage']
];
