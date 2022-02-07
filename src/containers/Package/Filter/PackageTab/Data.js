export const FILTER_TYPES = {
  ALL: "all",
  COURSES: "course",
  LEARNING: "learn",
  CHALLENGES: "challenge",
};

export const COURSE_FILTERS = [
  {
    id: 0,
    title: "All",
    slug: FILTER_TYPES.ALL,
  },
  {
    id: 1,
    title: "Learning Paths",
    slug: FILTER_TYPES.LEARNING,
  },
  {
    id: 2,
    title: "Courses",
    slug: FILTER_TYPES.COURSES,
  },
  {
    id: 3,
    title: "Challenges",
    slug: FILTER_TYPES.CHALLENGES,
  },
];

export const LANGUAGE_FILTERS = [
  {
    id: 3,
    title: "Python",
    slug: "python",
  },
  {
    id: 4,
    title: "C ",
    slug: "c",
  },
  // {
  //   id: 5,
  //   title: "C++",
  //   slug: "Cpp",
  // },
  // {
  //   id: 6,
  //   title: "Java",
  //   slug: "Java",
  // },
];
