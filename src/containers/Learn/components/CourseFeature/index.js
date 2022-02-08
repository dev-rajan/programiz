import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import CourseHeros from "../CourseHero";

import Banner from "./Banner";
import CourseSection from "./CourseSection";
import FancyCard from "./FancyCard";
import Testimonial from "./Testimonial";

const CourseFeatures = ({ path, custom, slug, toc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const courseSections = toc?.map((section, courseNumber) => {
    return (
      <CourseSection
        slug={slug}
        key={section.id}
        section={section}
        courseNumber={courseNumber}
      />
    );
  });

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    window.analytics.track("Pro Advantages Collapse Toggled", {
      source: "Learning Path Professional Certificate Collapse",
    });
  };

  return (
    <div className="col-lg-8 course-column">
      <CourseHeros
        slug={slug}
        category="LEARNING PATH"
        summary={custom}
        slugData={path}
      />

      <FancyCard custom={custom} />

      <div className="course-section">
        <h2 className="mb-6x fs-h2main">
          This path has{" "}
          {path?.data?.levels?.map((a) => a.courses).flat().length ?? 0} highly
          curated courses
        </h2>
        <ul className="accordion accordion--border">
          {courseSections}
          <li className="accordion__item">
            <div
              onClick={handleClick}
              role="presentation"
              onKeyDown={() => {}}
              className={`accordion__title ${
                isOpen ? "accordion__title--open" : ""
              } d-flex align-items-center justify-content-between`}
            >
              <h5 className="d-flex align-items-center">
                <span className="course-number color-secondary mr-6x earn">
                  <img
                    className="course-image"
                    src="/images/award.svg"
                    alt="badge"
                    title="badge"
                  />
                  EARN
                </span>
                <span className="text-ellipsis-mobile course-text">
                  Professional Certificate
                </span>
              </h5>
            </div>
          </li>
        </ul>
      </div>

      <Banner custom={custom} />

      {/* <Testimonial /> */}
    </div>
  );
};

export default CourseFeatures;
