import React from "react";
import CourseHeros from "../CourseHero";

import Banner from "./Banner";
import CourseSection from "./CourseSection";
import FancyCard from "./FancyCard";
import Testimonial from "./Testimonial";

const CourseFeatures = ({ toc, custom, slug, details }) => {
  const courseSections = toc?.data?.sections?.map((section) => {
    return (
      <CourseSection courseSlug={slug} key={section.id} section={section} />
    );
  });

  return (
    <div className="col-lg-8 course-column">
      <CourseHeros customData={custom} details={details} category="COURSE" />

      <FancyCard custom={custom} />

      <div className="course-section">
        <h2 className="mb-6x fs-h2main">What's in this course?</h2>
        <ul className="accordion">{courseSections}</ul>
      </div>

      <Banner custom={custom} />

      {/* <Testimonial /> */}
    </div>
  );
};

export default CourseFeatures;
