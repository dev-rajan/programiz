import React from "react";
import Link from "next/link";

const LearningCards = ({ title, logo, chaptersCount, level, slug }) => {
  const Learn_URL = "/learn";

  return (
    <div className={` mx-3`}>
      <Link href={`${Learn_URL}/${slug}`}>
        <a className="link">
          <div className="card card--border card--link card__learning d-flex flex-column align-items-start">
            <h3 className="card__title ">{title}</h3>
            <img
              className="course__image my-auto"
              src={logo?.length !== 0 ? logo : "/images/noimage.png"}
              alt="Course"
              title="Course"
            />
            <p className="text-tiny mb-0x text-medium">
              {chaptersCount} chapters &nbsp;•&nbsp; Level: {level}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default LearningCards;
