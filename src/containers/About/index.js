import React from "react";

import Section from "./Section";
import AboutTestimonial from "./AboutTestimonial";
import StartCoding from "./StartCoding";
import HeroSection from "./HeroSection";

const Item = {
  mission: {
    title: "Our mission is to help users learn programming more easily.",
    desc: "We are a small team of passionate developers, teachers, mentors, and students. Since the very beginning, we have been dedicated to creating programming resources that&apos;s accurate, practical, and easier to understand. Through our interactive and project-driven courses, we strive to sculpt our users into skilled programmers who can confidently take on the job market.",
  },
  story: {
    title: "Our Story",
    desc: "We understand that creating textual content on the web to learn programming is not enough. To improve the learning experience of our users, we started Programiz.pro. Most online tutorials (including our own) can appear as confusing walls of text. We realized that this is a huge hurdle to learning.",
    desc2:
      "So, we decided to mitigate this issue by revamping our courses.Our aim was to create extremely engaging and interactive lessons to make learning easy and enjoyable.Our modified, highly curated courses prioritize setting a strong programming foundation.We designed our lessons For this, we the core concepts of programming while simultaneously building their practical skills through our carefully selected projects.",
  },
  message: {
    title: "Message from our Founder",
    message:
      "“We've gone from a simple tutorial site to developers of online compilers and mobile learning apps. We now bring you Programiz Pro: a project-driven, highly curated, and fully interactive learning package! Coding is so much easier now!”",
    position: "Punit Jajodia, CTO, Programiz",
  },
  testimonial: {
    title: "What our student say?",
    para: "“I like how interactive the course is. The content is super-easy to understand. 5 Stars.”",
    name: "Mary Dippler",
  },
};

const About = ({ title = "Transforming People into Tech Professionals!" }) => (
  <>
    {/* Hero section */}
    <HeroSection title={title} extraClass="hero-about" />

    {/* our mission section */}
    <Section
      title={Item?.mission?.title}
      desc={Item?.mission?.desc}
      margin="m16"
    />

    {/* our story section */}
    <Section
      title={Item?.story?.title}
      desc={Item?.story?.desc}
      desc2={Item?.story?.desc2}
      extraClass="bg-light about__title--large"
    />

    {/* testimonial section */}
    <AboutTestimonial Item={Item} />

    <StartCoding title="Start Coding TODAY!" btnTxt="Sign Up" />
  </>
);

export default About;
