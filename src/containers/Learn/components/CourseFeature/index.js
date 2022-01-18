import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

import Banner from "./Banner";
import CourseSection from "./CourseSection";
import FancyCard from "./FancyCard";
import Testimonial from "./Testimonial";

const CourseFeatures = ({ path, custom, slug }) => {
  const [isOpen, setIsOpen] = useState(false);

  const courseSections = path?.data?.levels?.map((section) => {
    return <CourseSection slug={slug} key={section.id} section={section} />;
  });

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    window.analytics.track("Pro Advantages Collapse Toggled", {
      source: "Learning Path Professional Certificate Collapse",
    });
  };

  return (
    <div className="col-lg-8 course-column">
      <FancyCard custom={custom} />

      <div className="course-section">
        <h2 className="mb-6x fs-h2main">
          This path has {path?.data?.levels?.length ?? 0} highly curated courses
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
              <h5 className="d-flex aign-items-center">
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
              <FiChevronRight className="title__icon" size={24} />
            </div>
            <div className="accordion__content" aria-expanded={!isOpen}>
              <p>
                Learn Python: Programiz Pro is available as a monthly or annual
                subscription. The subscriptions give you access to:
              </p>
              <ul>
                <li>Ad-free mode</li>
                <li>Unlimited compiler usage</li>
                <li>Unlocked lessons</li>
                <li>Dark mode</li>
              </ul>
              <p>
                With the monthly subscription, you automatically get billed
                every month. With the annual subscription, you automatically get
                billed every year.
              </p>
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
