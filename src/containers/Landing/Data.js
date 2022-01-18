import { CUSTOM_LEARNING_PATH_DATA } from "constants/consts";

export const LearnData = [
  {
    id: 1,
    slug: CUSTOM_LEARNING_PATH_DATA.PYTHON_JOB_READY,
    title: "Python Programmer",
    logo: "/images/search1.svg",
  },
  {
    id: 3,
    title: "C++ Programmer",
    logo: "/images/search2.svg",
  },
  {
    id: 2,
    slug: CUSTOM_LEARNING_PATH_DATA.C_JOB_READY,
    title: "C Programmer",
    logo: "/images/search3.svg",
  },
  {
    id: 4,
    title: "Java Programmer",
    logo: "/images/search4.svg",
  },
];

export const Data = {
  step: 1,
  label: "Quiz",
  title: "What is the output of the following code?",
  num1: 4,
  num2: 3,
  questions: [
    {
      id: 1,
      sn: "A",
      question: "8",
    },
    {
      id: 2,
      sn: "B",
      question: "1",
    },
    {
      id: 3,
      sn: "C",
      question: "7",
    },
    {
      id: 4,
      sn: "D",
      question: "2",
    },
  ],
};

const DEFAULT_CODE_VALUE = `# Replace _ of line 6 with your code
a = 10
b = 5

# add numbers 
result = a _ b

# print result
print(result)`;

export const CodeBlock = {
  label: "Practice with Challenges",
  title: "Challenge #1: Find the sum of two numbers",
  code: DEFAULT_CODE_VALUE,
  expected_value: 15,
  step: 2,
  a: 10,
  b: 5,
};

export const ChallengeData = [
  {
    id: 4,
    slug: "python-basics-challenges",
    title: "Python Basics Challenges",
    logo: "/images/pythonChallenge.svg",
  },
];
