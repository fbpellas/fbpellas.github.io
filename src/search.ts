import {
  diphthongs,
  consonants,
  longVowels,
  shortVowels,
  rColoredVowels,
} from "./phonemes";
import flatten from "lodash/flatten";

const generateKeys = (data: any) => {
  return flatten(
    data.map((el: any) => {
      const examples = el[2];
      const sanitizedExamples = examples
        .replaceAll("<u>", "")
        .replaceAll("</u>", "")
        .split(", ");

      const filteredExamples = sanitizedExamples.filter(
        (example: any) => example.length > 2
      );

      return filteredExamples;
    })
  );
};

const generateKeysPhonemes = (data: any) => {
  return flatten(
    data.map((el: any) => {
      const phonemes = el[0];
      const sanitizedPhonemes = phonemes.replaceAll("/", "");

      return [sanitizedPhonemes, phonemes];
    })
  );
};

const consonantsKeys = generateKeys(consonants);
const diphthongsKeys = generateKeys(diphthongs);
const longVowelsKeys = generateKeys(longVowels);
const rColoredVowelsKeys = generateKeys(rColoredVowels);
const shortVowelsKeys = generateKeys(shortVowels);

const consonantsKeysPhonemes = generateKeysPhonemes(consonants);
const diphthongsKeysPhonemes = generateKeysPhonemes(diphthongs);
const longVowelsKeysPhonemes = generateKeysPhonemes(longVowels);
const rColoredVowelsKeysPhonemes = generateKeysPhonemes(rColoredVowels);
const shortVowelsKeysPhonemes = generateKeysPhonemes(shortVowels);

export const mappingPhonemes = [
  [consonantsKeysPhonemes, "consonants", "Consonants (phonemes)"],
  [longVowelsKeysPhonemes, "long-vowels", "Long vowels (phonemes)"],
  [shortVowelsKeysPhonemes, "short-vowels", "Short vowels (phonemes)"],
  [
    rColoredVowelsKeysPhonemes,
    "r-colored-vowels",
    "R-colored vowels (phonemes)",
  ],
  [diphthongsKeysPhonemes, "diphthongs", "Diphthongs (phonemes)"],
];

const mappingExamples = [
  [consonantsKeys, "consonants", "Consonants (examples)"],
  [longVowelsKeys, "long-vowels", "Long vowels (examples)"],
  [shortVowelsKeys, "short-vowels", "Short vowels (examples)"],
  [rColoredVowelsKeys, "r-colored-vowels", "R-colored vowels (examples)"],
  [diphthongsKeys, "diphthongs", "Diphthongs (examples)"],
];

export const mapping = [
  ...mappingExamples,
  ...mappingPhonemes,
  [
    ["about", "author", "about the author", "faith", "pellas", "faith pellas"],
    "about-author",
    "About the Author",
  ],
  [
    ["letter", "teachers", "how to", "letter to teachers", "letter teachers"],
    "letter-teachers",
    "Letter to Teachers",
  ],
  [
    ["consonant", "consonants", "letter", "letters"],
    "consonants",
    "Consonants",
  ],

  [["phoneme", "phonemes"], "phonemes", "Phonemes"],
  [["letter", "letter", "vowel", "vowels"], "vowels", "Vowels"],
  [
    ["vowel", "vowels", "long vowel", "long vowels"],
    "long-vowels",
    "Long vowels",
  ],
  [
    ["vowel", "vowels", "short vowel", "short vowels"],
    "short-vowels",
    "Short vowels",
  ],

  [
    [
      "vowel",
      "vowels",
      "r-colored vowel",
      "r-colored vowels",
      "r colored vowel",
      "r colored vowels",
    ],
    "r-colored-vowels",
    "R-colored vowels",
  ],
  [["diphthong", "diphthongs"], "diphthongs", "Diphthongs"],
  [["stress"], "stress", "Stress"],
  [["definition", "definitions", "glossary"], "glossary", "Glossary"],
  [["intonation"], "intonation", "Intonation"],
  [["resource", "resources"], "resources", "Resources"],
  [["quiz", "quizzes"], "quiz", "Quiz"],
  [
    [
      "english",
      "pronunciation",
      "english pronunciation",
      "home",
      "homepage",
      "main",
    ],
    "home",
    "Homepage",
  ],
];
