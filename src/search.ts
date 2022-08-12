import { diphthongs, consonants, vowels } from './data/phonemes';
import { AUTHOR_FIRSTNAME, AUTHOR_FULLNAME, AUTHOR_LASTNAME } from './constants';
import { generateKeysExamples, generateKeysPhoneme } from './utils';
import { Search } from './types';

const typesSounds = [consonants, diphthongs, vowels];
const [consonantsKeysExamples, diphthongsKeysExamples, vowelsKeysExamples] = typesSounds.map(generateKeysExamples);
const [consonantsKeysPhoneme, diphthongsKeysPhoneme, vowelsKeysPhoneme] = typesSounds.map(generateKeysPhoneme);

export const mappingPhoneme: Search[] = [
  { keywords: consonantsKeysPhoneme, anchor: 'consonants', title: 'Consonants (phonemes)' },
  { keywords: diphthongsKeysPhoneme, anchor: 'diphthongs', title: 'Diphthongs (phonemes)' },
  { keywords: vowelsKeysPhoneme, anchor: 'vowels', title: 'Vowels (phonemes)' }
];

const mappingExamples: Search[] = [
  { keywords: consonantsKeysExamples, anchor: 'consonants', title: 'Consonants (examples)' },
  { keywords: diphthongsKeysExamples, anchor: 'diphthongs', title: 'Diphthongs (examples)' },
  { keywords: vowelsKeysExamples, anchor: 'vowels', title: 'Vowels (examples)' }
];

export const mapping: Search[] = [
  ...mappingExamples,
  ...mappingPhoneme,
  {
    keywords: [
      'about',
      'author',
      'about the author',
      AUTHOR_FIRSTNAME.toLowerCase(),
      AUTHOR_LASTNAME.toLowerCase(),
      AUTHOR_FULLNAME.toLowerCase()
    ],
    anchor: 'about-author',
    title: 'About the Author'
  },
  { keywords: ['mission', 'teachers', 'how to', 'students'], anchor: 'mission', title: 'Mission' },
  { keywords: ['consonant', 'consonants', 'letter', 'letters'], anchor: 'consonants', title: 'Consonants' },

  { keywords: ['phoneme', 'phonemes'], anchor: 'phonemes', title: 'Phonemes' },
  { keywords: ['letter', 'vowel', 'vowels'], anchor: 'vowels', title: 'Vowels' },
  { keywords: ['diphthong', 'diphthongs'], anchor: 'diphthongs', title: 'Diphthongs' },
  { keywords: ['stress'], anchor: 'stress', title: 'Stress' },
  { keywords: ['intonation'], anchor: 'intonation', title: 'Intonation' },
  { keywords: ['rising', 'up', 'intonation'], anchor: 'rising', title: 'Rising' },
  { keywords: ['falling', 'down', 'intonation'], anchor: 'falling', title: 'Falling' },
  { keywords: ['non-final', 'up', 'down', 'non final', 'intonation'], anchor: 'non-final', title: 'Non-Final' },
  {
    keywords: [
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
    anchor: 'quiz',
    title: 'Quiz'
  },
  {
    keywords: ['english', 'pronunciation', 'english pronunciation', 'home', 'homepage', 'main'],
    anchor: 'home',
    title: 'Homepage'
  }
];
