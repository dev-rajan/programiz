import React from "react";

import CourseDetails from "./components/CourseDetail";
import Codings from "containers/Learn/components/Coding";
import Code from "./components/Code";
import CourseLearnings from "containers/Course/components/CourseLearning";
import CourseHeros from "containers/Course/components/CourseHero";

const Challenge = ({ recommended, custom, challengeData, slug, slugData }) => {
  return (
    <>
      {/* Hero section */}
      <div key={slug} className="learning__page">
        {/* <CourseHeros
          customData={custom}
          details={slugData}
          category="COURSE CHALLENGE"
        /> */}

        {/* Detail  */}
        <CourseDetails slug={slug} custom={custom} slugData={slugData} />

        <Code slug={slug} challengeData={challengeData} />

        {/* coding  */}
        <Codings custom={custom} />

        <CourseLearnings recommended={recommended} />
      </div>
    </>
  );
};

export default Challenge;
