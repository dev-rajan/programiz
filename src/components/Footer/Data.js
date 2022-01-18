import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

export const Data = {
  languages: {
    heading: "Languages",
    list: [
      {
        id: 0,
        title: "Python",
        url: "#",
      },
      {
        id: 1,
        title: "C Programming",
        url: "#",
      },
      {
        id: 2,
        title: "C++",
        url: "#",
      },
      {
        id: 3,
        title: "Java",
        url: "#",
      },
    ],
  },
  resources: {
    heading: "More Resources",
    list: [
      {
        id: 0,
        title: "Python App",
        url: "https://www.programiz.com/learn-python",
      },
      {
        id: 1,
        title: "C Programming App",
        url: "https://www.programiz.com/learn-c",
      },
      {
        id: 2,
        title: "C++ App",
        url: "https://www.programiz.com/learn-cpp",
      },
      {
        id: 3,
        title: "Java App",
        url: "https://www.programiz.com/learn-java",
      },
      {
        id: 4,
        title: "Free Tutorials",
        url: "https://www.programiz.com",
      },
    ],
  },
  company: {
    heading: "Company",
    list: [
      {
        id: 0,
        title: "About",
        url: "/about",
      },
      {
        id: 1,
        title: "Privacy Policy",
        url: "https://dev.app.programiz.pro/privacy-policy",
      },
      {
        id: 2,
        title: "Terms & Conditions",
        url: "https://dev.app.programiz.pro/terms-and-conditions",
      },
      {
        id: 3,
        title: "Contact",
        url: "#",
      },
      {
        id: 4,
        title: "Discord",
        url: "#",
      },
      {
        id: 5,
        title: "FAQ",
        url: "/faq",
      },
    ],
  },
};

export const Social = [
  {
    id: 1,
    url: "https://www.facebook.com/programiz",
    icon: <FiFacebook size={20} />,
    title: "Facebook",
  },
  {
    id: 2,
    url: "https://www.instagram.com/_programiz/",
    icon: <FiInstagram size={20} />,
    title: "Instagram",
  },
  {
    id: 3,
    url: "https://www.linkedin.com/company/programiz/",
    icon: <FiLinkedin size={20} />,
    title: "LinkedIn",
  },
  {
    id: 4,
    url: "https://twitter.com/programiz",
    icon: <FiTwitter size={20} />,
    title: "Twitter",
  },
];
