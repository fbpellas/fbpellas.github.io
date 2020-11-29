const quizSynopsis = `Choose the word that has a different phoneme from the rest.`;
const commonQuestionProps = {
  question: quizSynopsis,
  questionType: "text",
  answerSelectionType: "single",
  point: "20",
};

export const defaultLocale = {
  landingHeaderText: "<questionLength> Questions",
  question: "Question",
  startQuizBtn: "Start Quiz",
  resultFilterAll: "All",
  resultFilterCorrect: "Correct",
  resultFilterIncorrect: "Incorrect",
  nextQuestionBtn: "Next",
  resultPageHeaderText:
    "You got <correctIndexLength> out of <questionLength> questions right.",
  resultPagePoint: "",
  singleSelectionTagText: "Single Selection",
  multipleSelectionTagText: "Multiple Selection",
  pickNumberOfSelection: "Pick <numberOfSelection>",
};

export const quiz = {
  appLocale: {
    ...defaultLocale,
  },
  quizTitle: "Odd Phoneme Out",
  quizSynopsis,
  questions: [
    {
      ...commonQuestionProps,
      answers: ["bread", "seed", "reads", "green"],
      correctAnswer: "1",
      messageForCorrectAnswer: "bread: /e/",
      messageForIncorrectAnswer: "seed, reads, green: /iː/",
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
  explanation: "TODO",
};

export const quizStress = {
  appLocale: {
    ...defaultLocale,
  },
  quizTitle: "",
  quizSynopsis: "",
  questions: [
    {
      ...commonQuestionStressProps,
      question: "Apartment",
      answers: ["A", "part", "ment", "No stress"],
      correctAnswer: "2",
      messageForCorrectAnswer: "a PART ment",
      messageForIncorrectAnswer: "a PART ment",
    },
    {
      ...commonQuestionStressProps,
      question: "Respond",
      answers: ["Re", "spond", "No stress"],
      correctAnswer: "2",
      messageForCorrectAnswer: "re SPOND",
      messageForIncorrectAnswer: "re SPOND",
    },
    {
      ...commonQuestionStressProps,
      question: "Positivity",
      answers: ["Po", "si", "ti", "vi", "ty", "No stress"],
      correctAnswer: "3",
      messageForCorrectAnswer: "po si TI vi ty",
      messageForIncorrectAnswer: "po si TI vi ty",
    },
    {
      ...commonQuestionStressProps,
      question: "Computer",
      answers: ["Com", "pu", "ter", "No stress"],
      correctAnswer: "2",
      messageForCorrectAnswer: "com PU ter",
      messageForIncorrectAnswer: "com PU ter",
    },
    {
      ...commonQuestionStressProps,
      question: "Bakery",
      answers: ["Ba", "ke", "ry", "No stress"],
      correctAnswer: "1",
      messageForCorrectAnswer: "BA ke ry",
      messageForIncorrectAnswer: "BA ke ry",
    },
    {
      ...commonQuestionStressProps,
      question: "Honorable",
      answers: ["Ho", "no", "ra", "ble", "No stress"],
      correctAnswer: "1",
      messageForCorrectAnswer: "HO no ra ble",
      messageForIncorrectAnswer: "HO no ra ble",
    },
    {
      ...commonQuestionStressProps,
      question: "Scientific",
      answers: ["Sci", "en", "ti", "fic", "No stress"],
      correctAnswer: "3",
      messageForCorrectAnswer: "sci en TI fic",
      messageForIncorrectAnswer: "sci en TI fic",
    },
    {
      ...commonQuestionStressProps,
      question: "Weigh",
      answers: ["We", "igh", "No stress"],
      correctAnswer: "3",
      messageForCorrectAnswer: "No stress",
      messageForIncorrectAnswer: "No stress",
    },
    {
      ...commonQuestionStressProps,
      question: "Winner",
      answers: ["Wi", "nner", "No stress"],
      correctAnswer: "1",
      messageForCorrectAnswer: "WI nner",
      messageForIncorrectAnswer: "WI nner",
    },
    {
      ...commonQuestionStressProps,
      question: "Competition",
      answers: ["Com", "pe", "ti", "tion", "No stress"],
      correctAnswer: "3",
      messageForCorrectAnswer: "com pe TI tion",
      messageForIncorrectAnswer: "com pe TI tion",
    },
  ],
};

const commonQuestionIntonationProps = {
  questionType: "text",
  answerSelectionType: "single",
  point: "20",
  answers: ["Rising intonation", "Falling intonation", "Non-Final intonation"],
  explanation: "TODO",
};

export const quizIntonation = {
  appLocale: {
    ...defaultLocale,
  },
  quizTitle: "",
  quizSynopsis: "",
  questions: [
    {
      ...commonQuestionIntonationProps,
      question: `I brought some wine, snacks, and a blanket for the picnic.`,
      correctAnswer: "3",
      messageForCorrectAnswer: "Non-final: it’s a list",
      messageForIncorrectAnswer: "Non-final: it’s a list",
    },
    {
      ...commonQuestionIntonationProps,
      question: "Does she have enough time to prepare?",
      correctAnswer: "1",
      messageForCorrectAnswer: "Rising: Yes/No question",
      messageForIncorrectAnswer: "Rising: Yes/No question",
    },
    {
      ...commonQuestionIntonationProps,
      question: "You’re still coming, aren’t you?",
      correctAnswer: "1",
      messageForCorrectAnswer: "Rising: Question tag",
      messageForIncorrectAnswer: "Rising: Question tag",
    },
    {
      ...commonQuestionIntonationProps,
      question: "It’s nice to meet you!",
      correctAnswer: "2",
      messageForCorrectAnswer: "Falling: exclamation",
      messageForIncorrectAnswer: "Falling: exclamation",
    },
    {
      ...commonQuestionIntonationProps,
      question: "Did you order the chicken or the fish?",
      correctAnswer: "3",
      messageForCorrectAnswer: "Non-final: choice",
      messageForIncorrectAnswer: "Non-final: choice",
    },
    {
      ...commonQuestionIntonationProps,
      question: "They didn’t go camping this weekend.",
      correctAnswer: "2",
      messageForCorrectAnswer: "Falling: finished statement",
      messageForIncorrectAnswer: "Falling: finished statement",
    },
    {
      ...commonQuestionIntonationProps,
      question: "Why did you quit your job?",
      correctAnswer: "1",
      messageForCorrectAnswer: "Rising: WH- question",
      messageForIncorrectAnswer: "Rising: WH- question",
    },
    {
      ...commonQuestionIntonationProps,
      question: "Good morning! It’s so beautiful outside.",
      correctAnswer: "2",
      messageForCorrectAnswer: "Falling: exclamation and a finished statement",
      messageForIncorrectAnswer:
        "Falling: exclamation and a finished statement",
    },
    {
      ...commonQuestionIntonationProps,
      question: "Submit the form after answering the questions.",
      correctAnswer: "2",
      messageForCorrectAnswer: "Falling: command",
      messageForIncorrectAnswer: "Falling: command",
    },
    {
      ...commonQuestionIntonationProps,
      question: "When I was a student, I had three months of vacation.",
      correctAnswer: "3",
      messageForCorrectAnswer: "Non-final: conditional",
      messageForIncorrectAnswer: "Non-final: conditional",
    },
  ],
};

const commonQuestionIntonationBisProps = {
  questionType: "text",
  answerSelectionType: "single",
  point: "20",
  answers: ["Rising intonation", "Falling intonation", "Non-Final intonation"],
  explanation: "TODO",
};

export const quizIntonationBis = {
  appLocale: {
    ...defaultLocale,
  },
  quizTitle: "",
  quizSynopsis: "",
  questions: [
    {
      ...commonQuestionIntonationBisProps,
      question: "How can I help you?",
      correctAnswer: "2",
      messageForCorrectAnswer: "Falling",
      messageForIncorrectAnswer: "Falling",
    },
    {
      ...commonQuestionIntonationBisProps,
      question: "Hi!",
      correctAnswer: "2",
      messageForCorrectAnswer: "Falling",
      messageForIncorrectAnswer: "Falling",
    },
    {
      ...commonQuestionIntonationBisProps,
      question: "Is she into sports?",
      correctAnswer: "1",
      messageForCorrectAnswer: "Rising",
      messageForIncorrectAnswer: "Rising",
    },
    {
      ...commonQuestionIntonationBisProps,
      question: "she already has everything.",
      correctAnswer: "2",
      messageForCorrectAnswer: "Falling",
      messageForIncorrectAnswer: "Falling",
    },
    {
      ...commonQuestionIntonationBisProps,
      question: "If I were you",
      correctAnswer: "3",
      messageForCorrectAnswer: "Non-final",
      messageForIncorrectAnswer: "Non-final",
    },
    {
      ...commonQuestionIntonationBisProps,
      question: "blue or grey?",
      correctAnswer: "3",
      messageForCorrectAnswer: "Non-final",
      messageForIncorrectAnswer: "Non-final",
    },
    {
      ...commonQuestionIntonationBisProps,
      question: "blue, grey, pink, and orange.",
      correctAnswer: "3",
      messageForCorrectAnswer: "Non-final",
      messageForIncorrectAnswer: "Non-final",
    },
    {
      ...commonQuestionIntonationBisProps,
      question: "Add the scarf as well",
      correctAnswer: "2",
      messageForCorrectAnswer: "Falling",
      messageForIncorrectAnswer: "Falling",
    },
    {
      ...commonQuestionIntonationBisProps,
      question: "that would be $280 in total",
      correctAnswer: "2",
      messageForCorrectAnswer: "Falling",
      messageForIncorrectAnswer: "Falling",
    },
    {
      ...commonQuestionIntonationBisProps,
      question: "$280?",
      correctAnswer: "1",
      messageForCorrectAnswer: "Rising",
      messageForIncorrectAnswer: "Rising",
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

export const customQuizStress = [
  ["Record", "stress/‘Re cord.m4a", "/ˈrɛk ərd /", "/ rɪˈkɔrd /", 1],
  ["Object", "stress/Ob ‘ject.m4a", "/ˈɒb dʒɛkt/", "/ əbˈdʒɛkt /", 2],
  ["Contract", "stress/Con ‘tract.m4a", "/ ˈkɒn trækt /", "	/ kənˈtrækt /", 2],
  ["Increase", "stress/‘In crease.m4a", "/ ˈɪn kris /", "/  ɪnˈkris /", 1],
  ["Recall", "stress/Re ‘call.m4a", "/ ˈri kɔl /", "/ rɪˈkɔl /", 2],
];

export const defaultCustomQuizStressAnswers = [0, 0, 0, 0, 0];

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
