const oddOneOut = " ";

const commonQuestionProps = {
  question: oddOneOut,
  questionType: "text",
  answerSelectionType: "single",
  point: "20",
};

export const quiz = {
  quizTitle: "Different phoneme",
  quizSynopsis:
    "Please do not refresh the page. Please do not change the page until you complete the quiz.",
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
