const commonQuestionProps = {
  question: " ",
  questionType: "text",
  answerSelectionType: "single",
  point: "20",
};

export const quiz = {
  quizTitle: "Odd Phoneme Out",
  quizSynopsis: "Choose the word that has a different phoneme from the rest.",
  questions: [
    {
      ...commonQuestionProps,
      answers: ["bread", "seed", "read", "green"],
      correctAnswer: "1",
      messageForCorrectAnswer: "bread: /e/",
      messageForIncorrectAnswer: "seed, read, green: /iː/",
      explanation: "TODO",
    },
    {
      ...commonQuestionProps,
      answers: ["pace", "neighs", "gray", "key"],
      correctAnswer: "4",
      messageForCorrectAnswer: "key: /iː/",
      messageForIncorrectAnswer: "pace, neighs, gray: /eɪ/",
      explanation: "TODO",
    },
    {
      ...commonQuestionProps,
      answers: ["sew", "through", "brew", "blue"],
      correctAnswer: "1",
      messageForCorrectAnswer: "sew: /oʊ/",
      messageForIncorrectAnswer: "through, brew, blue: /uː/",
      explanation: "TODO",
    },
    {
      ...commonQuestionProps,
      answers: ["eight", "ant", "aim", "age"],
      correctAnswer: "2",
      messageForCorrectAnswer: "ant: /æ",
      messageForIncorrectAnswer: "eight, aim, age: /eɪ/",
      explanation: "TODO",
    },
    {
      ...commonQuestionProps,
      answers: ["thick", "then", "third", "through"],
      correctAnswer: "2",
      messageForCorrectAnswer: "then: /ð/",
      messageForIncorrectAnswer: "thick, third, through: /θ/",
      explanation: "TODO",
    },
    {
      ...commonQuestionProps,
      answers: ["climb", "fry", "light", "tray"],
      correctAnswer: "4",
      messageForCorrectAnswer: "tray: /eɪ/",
      messageForIncorrectAnswer: "climb, fry, light: /aɪ/",
      explanation: "TODO",
    },
    {
      ...commonQuestionProps,
      answers: ["brow", "crown", "throw", "meow"],
      correctAnswer: "3",
      messageForCorrectAnswer: "throw: /oʊ/",
      messageForIncorrectAnswer: "brow, crown, meow: /aʊ/",
      explanation: "TODO",
    },
    {
      ...commonQuestionProps,
      answers: ["mission", "precision", "vision", "version"],
      correctAnswer: "1",
      messageForCorrectAnswer: "mission: /ʃ/",
      messageForIncorrectAnswer: "precision, vision, version: /ʒ/",
      explanation: "TODO",
    },
  ],
};

const commonQuestionStressProps = {
  questionType: "text",
  answerSelectionType: "single",
  point: "20",
  answers: ["0", "1", "2", "3"],
  explanation: "TODO",
};

export const quizStress = {
  quizTitle: "Where’s the Stress?",
  quizSynopsis:
    "Choose the number of syllable where the stress appears. If there is no stress, choose zero.",
  questions: [
    {
      ...commonQuestionStressProps,
      question: "Apartment",
      correctAnswer: "3",
      messageForCorrectAnswer: "a PART ment",
      messageForIncorrectAnswer: "a PART ment",
    },
    {
      ...commonQuestionStressProps,
      question: "Respond",
      correctAnswer: "3",
      messageForCorrectAnswer: "re SPOND",
      messageForIncorrectAnswer: "re SPOND",
    },
    {
      ...commonQuestionStressProps,
      question: "Positivity",
      correctAnswer: "4",
      messageForCorrectAnswer: "po si TI vi ty",
      messageForIncorrectAnswer: "po si TI vi ty",
    },
    {
      ...commonQuestionStressProps,
      question: "Computer",
      correctAnswer: "3",
      messageForCorrectAnswer: "com PU ter",
      messageForIncorrectAnswer: "com PU ter",
    },
    {
      ...commonQuestionStressProps,
      question: "Bakery",
      correctAnswer: "2",
      messageForCorrectAnswer: "BA ke ry",
      messageForIncorrectAnswer: "BA ke ry",
    },
    {
      ...commonQuestionStressProps,
      question: "Honorable",
      correctAnswer: "2",
      messageForCorrectAnswer: "HO nor a ble",
      messageForIncorrectAnswer: "HO nor a ble",
    },
    {
      ...commonQuestionStressProps,
      question: "Scientific",
      correctAnswer: "4",
      messageForCorrectAnswer: "sci en TI fic",
      messageForIncorrectAnswer: "sci en TI fic",
    },
    {
      ...commonQuestionStressProps,
      question: "Weigh",
      correctAnswer: "1",
      messageForCorrectAnswer: "no stress",
      messageForIncorrectAnswer: "no stress",
    },
    {
      ...commonQuestionStressProps,
      question: "Winner",
      correctAnswer: "2",
      messageForCorrectAnswer: "WI nner",
      messageForIncorrectAnswer: "WI nner",
    },
    {
      ...commonQuestionStressProps,
      question: "Competition",
      correctAnswer: "4",
      messageForCorrectAnswer: "com pe TI tion",
      messageForIncorrectAnswer: "com pe TI tion",
    },
  ],
};

export const customQuiz = [
  ["əˈtɛn ʃən", "attention"],
  ["ˈfɪʃ ɪŋ", "fishing"],
  ["noʊt", "note"],
  ["fænˈtæs tɪk", "fantastic"],
  ["ˈɔr dnˌɛr i", "ordinary"],
  ["ˈbʌt ər", "butter"],
  ["ˈtʃæm pi ən", "champion"],
  ["ˈtrɛʒ ər", "treasure"],
  ["ˈwɛd ɪŋ", "wedding"],
  ["θɜrd", "third"],
];

export const defaultCustomQuizAnswers = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

export const correctCustomQuizAnswers = customQuiz.map((c) => c[1]);
