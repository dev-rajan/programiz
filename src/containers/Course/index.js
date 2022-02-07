import React from "react";

import Codings from "containers/Learn/components/Coding";
import CourseDetails from "./components/CourseDetail";
import CourseHeros from "./components/CourseHero";
import CourseLearnings from "./components/CourseLearning";

const Course = ({ toc, recommended, custom, details, slug, slugData }) => {
  return (
    <>
      {/* Hero section */}
      {/* <CourseHeros customData={custom} details={details} category="COURSE" /> */}

      {/* Detail  */}
      <CourseDetails
        slug={slug}
        toc={toc}
        custom={custom}
        slugData={slugData}
        details={details}
      />

      {/* coding  */}
      <Codings />

      <CourseLearnings recommended={recommended} />
    </>
  );
};

export default Course;
