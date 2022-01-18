import React from "react";
import { FiChevronRight } from "react-icons/fi";

import DashboardLink from "components/DashboardLink";
import { DASHBOARD_APP_ROUTES } from "constants/app-routes";

import SectionContent from "./SectionContent";

const CourseSection = ({ section, slug }) => {
  const isFirstChapter = section.id === 1;
  const [displayContent, setDisplayContent] = React.useState(isFirstChapter);

  const sectionContents = section.courses.map((sectionContent) => (
    <SectionContent
      slug={slug}
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
            COURSE {section.id}
          </span>
          <span className="text-ellipsis-mobile course-text">
            {section.title}
          </span>
        </h5>
        <FiChevronRight className="title__icon" size={24} />
        {isFirstChapter && (
          <DashboardLink
            title="Start this Path"
            href={`${DASHBOARD_APP_ROUTES.LEARNING_PATH}/${slug}`}
            className="btn btn--primary btn--light btn--sm outline btn-course-start"
          >
            Start this Path
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
