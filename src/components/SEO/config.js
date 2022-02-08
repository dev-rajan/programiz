import programizLogo from "assets/images/share-logo.jpg";

const SITE_DATA = {
  title: "Programiz PRO", // Navigation and site title
  titleAlt: "Programiz PRO", // Title for schema.org JSONLD
  description:
    "Learn to code interactively with bit-size lessons, quizzes and challenges, and create a job-winning portfolio.",
  url: "https://www.programiz.pro", // Domain of site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  image: {
    src: programizLogo,
    width: 384,
    height: 384,
  },
  keywords: [],
  ogLanguage: "en_US", // Facebook Language
  // googleAnalyticsID: '',

  // JSONLD / Manifest
  favicon: "/favicon.ico", // Used for manifest favicon generation
  shortName: "Programiz PRO", // shortname for manifest.
  author: {
    // Author for schema.org JSONLD
    name: "Programiz PRO",
    url: "https://www.programiz.pro",
  },
  themeColor: "#ffffff",
  backgroundColor: "#111111",

  twitter: "", // Twitter username
  twitterUrl: "",
  twitterCardType: "summary_large_image",
  facebook: "", // Facebook site name
  // githubUrl: '',
  // instagramUrl: 'https://www.instagram.com/id/',
  // feedUrl: '/atom.xml',
};

export default SITE_DATA;
