import React from "react";

import { DASHBOARD_APP_ROUTES } from "constants/app-routes";
import DashboardLink from "components/DashboardLink";

const SectionContent = ({ sectionContent, courseSlug }) => {
  return (
    <li className="course-progress__item">
      <DashboardLink
        title={sectionContent.title}
        href={`${DASHBOARD_APP_ROUTES.COURSE}/${courseSlug}/${sectionContent.slug}`}
      >
        <div className="course-progress__icon">
          <img
            src="/images/icon-check-circle.svg"
            alt="Course incomplete"
            title="Course incomplete"
          />
        </div>
        {sectionContent.title}
      </DashboardLink>
    </li>
  );
};

export default SectionContent;
