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

const consonantsKeys = generateKeys(consonants);
const diphthongsKeys = generateKeys(diphthongs);
const longVowelsKeys = generateKeys(longVowels);
const rColoredVowelsKeys = generateKeys(rColoredVowels);
const shortVowelsKeys = generateKeys(shortVowels);

export const mapping = [
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
    [...consonantsKeys, "consonant", "consonants", "letter", "letters"],
    "consonants",
    "Consonants",
  ],
  [["phoneme", "phonemes"], "phonemes", "Phonemes"],
  [["letter", "letter", "vowel", "vowels"], "vowels", "Vowels"],
  [
    [...longVowelsKeys, "vowel", "vowels", "long vowel", "long vowels"],
    "long-vowels",
    "Long vowels",
  ],
  [
    [...shortVowelsKeys, "vowel", "vowels", "short vowel", "short vowels"],
    "short-vowels",
    "Short vowels",
  ],
  [
    [
      ...rColoredVowelsKeys,
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
  [[...diphthongsKeys, "diphthong", "diphthongs"], "diphthongs", "Diphthongs"],
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
