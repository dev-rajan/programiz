import React from "react";

import Codings from "containers/Learn/components/Coding";
import CourseDetails from "./components/CourseDetail";
import CourseHeros from "./components/CourseHero";
import CourseLearnings from "./components/CourseLearning";

const Course = ({ toc, recommended, custom, details, slug, challengeData }) => {
  return (
    <>
      {/* Hero section */}
      <CourseHeros details={details} category="COURSE" />

      {/* Detail  */}
      <CourseDetails slug={slug} toc={toc} custom={custom} />

      {/* coding  */}
      <Codings />

      <CourseLearnings recommended={recommended} />
    </>
  );
};

export default Course;
