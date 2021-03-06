import React from "react";
import Link from "next/link";

const SectionContent = ({ sectionContent }) => {
  return (
    <li className="course-progress__item">
      <a title={sectionContent.title}>
        <div className="course-progress__icon">
          <img
            src="/images/icon-check-circle.svg"
            alt="Course incomplete"
            title="Course incomplete"
          />
        </div>
        {sectionContent.title}
      </a>
    </li>
  );
};

export default SectionContent;
