import React from "react";

import Codings from "./components/Coding";
import CourseDetails from "./components/CourseDetail";
import CourseHeros from "./components/CourseHero";
import CourseLearnings from "./components/CourseLearning";

const Course = ({ recommended, custom, details, slugData, slug }) => {
  return (
    <>
      {/* Hero section */}
      <div className="learning__page">
        <CourseHeros summary={custom} category="LEARNING PATH" />

        {/* Detail  */}
        <CourseDetails slug={slug} path={slugData} custom={details} />

        {/* coding  */}
        <Codings />

        <CourseLearnings recommended={recommended} />
      </div>
    </>
  );
};

export default Course;
