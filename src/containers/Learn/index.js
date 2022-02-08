import React from "react";

import Codings from "./components/Coding";
import CourseDetails from "./components/CourseDetail";
import CourseHeros from "./components/CourseHero";
import CourseLearnings from "./components/CourseLearning";

const Course = ({ recommended, custom, details, slugData, slug, toc }) => {
  return (
    <>
      {/* Hero section */}
      <div className="learning__page">
        {/* <CourseHeros
          slug={slug}
          category="LEARNING PATH"
          summary={custom}
          slugData={slugData}
        /> */}

        {/* Detail  */}
        <CourseDetails slug={slug} path={slugData} custom={custom} toc={toc} />

        {/* coding  */}
        <Codings />

        <CourseLearnings recommended={recommended} />
      </div>
    </>
  );
};

export default Course;
