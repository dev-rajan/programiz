import React from "react";
import { FiChevronRight } from "react-icons/fi";

import { DASHBOARD_APP_ROUTES } from "constants/app-routes";
import DashboardLink from "components/DashboardLink";

import SectionContent from "./SectionContent";

const CourseSection = ({ section, courseSlug }) => {
  const isFirstChapter = section.step === 1;
  const [displayContent, setDisplayContent] = React.useState(isFirstChapter);

  const sectionContents = section.sectionContent.map((sectionContent) => (
    <SectionContent
      courseSlug={courseSlug}
      key={sectionContent.id}
      sectionContent={sectionContent}
    />
  ));

  return (
    <li className="accordion__item">
      <div
        onKeyPress={() => {}}
        onClick={() => setDisplayContent(!displayContent)}
        className={`accordion__title ${
          displayContent ? "accordion__title--open" : ""
        } d-flex flex-wrap align-items-center justify-content-between`}
        tabIndex="-1"
        role="presentation"
      >
        <h5 className="d-flex align-items-center">
          <span className="course-number color-secondary mr-5x">
            CH. {section.step}
          </span>
          <span className="text-ellipsis-mobile course-text">
            {section.title}
          </span>
        </h5>
        <FiChevronRight className="title__icon" size={24} />
        {isFirstChapter && (
          <DashboardLink
            title="Start this Course"
            href={`${DASHBOARD_APP_ROUTES.COURSE}/${courseSlug}`}
            className="btn btn--primary btn--light btn--sm outline btn-course-start"
          >
            Start this Course
          </DashboardLink>
        )}
      </div>
      <div className="accordion__content px-0" aria-expanded={!displayContent}>
        <ul className="course-progress">{sectionContents}</ul>
      </div>
    </li>
  );
};

export default CourseSection;
