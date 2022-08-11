import { diphthongs, consonants, vowels } from './data/phonemes';
import { AUTHOR_FIRSTNAME, AUTHOR_FULLNAME, AUTHOR_LASTNAME } from './constants';
import { generateKeysExamples, generateKeysPhoneme } from './utils';

const typesSounds = [consonants, diphthongs, vowels];
const [consonantsKeysExamples, diphthongsKeysExamples, vowelsKeysExamples] = typesSounds.map(generateKeysExamples);
const [consonantsKeysPhoneme, diphthongsKeysPhoneme, vowelsKeysPhoneme] = typesSounds.map(generateKeysPhoneme)

export const mappingPhoneme = [
  [consonantsKeysPhoneme, 'consonants', 'Consonants (phonemes)'],
  [diphthongsKeysPhoneme, 'diphthongs', 'Diphthongs (phonemes)'],
  [vowelsKeysPhoneme, 'vowels', 'Vowels (phonemes)']
];

const mappingExamples = [
  [consonantsKeysExamples, 'consonants', 'Consonants (examples)'],
  [diphthongsKeysExamples, 'diphthongs', 'Diphthongs (examples)'],
  [vowelsKeysExamples, 'vowels', 'Vowels (examples)']
];

export const mapping = [
  ...mappingExamples,
  ...mappingPhoneme,
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
