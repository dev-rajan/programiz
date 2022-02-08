import React from "react";
import Hero from "./component/Hero";
import Quiz from "./component/Quiz";
import Learning from "./component/Learning";
import WhyProgramiz from "./component/WhyProgramiz";
import Testimonial from "./component/Testimonial";
import Coding from "./component/Coding";
import Search from "./component/Search";
import DiscordCard from "./DiscordCard";

const Landing = ({ quizData }) => (
  <>
    <Hero />
    <Search />
    <Quiz quizData={quizData} />
    <Learning />
    <DiscordCard />
    <WhyProgramiz />
    {/* <Testimonial /> */}
    <Coding />
  </>
);

export default Landing;
