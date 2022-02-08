export const CDN_BASE_URL =
  "https://programiz-pro-spaces.sfo3.digitaloceanspaces.com";

export const LESSON_TYPES = {
  LESSON_EXAMPLE: 0,
  QUIZ: 1,
  CHALLENGE: 2,
  VIDEO: 3,
  MARKETING: 4,
};

export const CODE_TYPES = {
  EXAMPLE: 0,
  COMPILER: 1,
};

export const CUSTOM_CHALLENGE_DATA = {
  PYTHON_BASICS: "python-basics-challenges",
  PYTHON_BEYOND: "python-advanced-challenges",
  C: "c-programming-challenges",
};

export const ROUTE_TITLE = {
  BRAND: "Programiz PRO",
  HOME: "Learn to Code",
  ABOUT: "About",
  FAQ: "FAQs",
};

export const CUSTOM_COURSE_DATA = {
  PYTHON: "python-basics",
  C: "c-programming",
};

export const CUSTOM_LEARNING_PATH_DATA = {
  PYTHON_JOB_READY: "master-python",
  C_JOB_READY: "master-c-programming",
};

export const PYTHON_CHALLENGE_SLUGS = [
  "split-bill-among-friends",
  "check-fizzbuzz",
]; // area-of-a-circle
export const PYTHON_BEYOND_CHALLENGE_SLUGS = [
  "natural-numbers-list",
  "access-method-of-base-class",
  "division-with-exception-handling",
];
export const C_CHALLENGE_SLUGS = [
  "divide-chocolates-among-childrens",
  "armstrong-number",
  "number-of-vowels",
];

export const CHALLENGE_SLUGS = {
  [CUSTOM_CHALLENGE_DATA.PYTHON_BASICS]: PYTHON_CHALLENGE_SLUGS,
  [CUSTOM_CHALLENGE_DATA.PYTHON_BEYOND]: PYTHON_BEYOND_CHALLENGE_SLUGS,
  [CUSTOM_CHALLENGE_DATA.C]: C_CHALLENGE_SLUGS,
};

export const FANCY_CARD_DATA = {
  data: {
    card1: {
      id: 1,
      title: "Combine learning with practice",
      desc: "Solve 60+ challenges to practice what you have learned in the course.",
    },
    card2: {
      id: 2,
      title: "Get certified at the end",
      desc: "Complete the challenges to get the course completion certificate.",
    },
  },
};

export const CATEGORY = {
  course_category: "Course",
  learn_category: "Learning Path",
  challenge_category: "Challenge",
};

export const DEFAULT_SUMMARY_CONTENT =
  "Understand the core basics of analyzing data by learning in a practical way. Start from the basics and move to advanced implementations.";
