/* eslint-disable no-restricted-syntax */
import { DEFAULT_SUMMARY_CONTENT } from "constants/consts";
import React from "react";

import getSummaryText from "utility/TextFormatter";

const CourseHeros = ({ details, category, customData }) => {
  return (
    <section className="hero-inner hero-inner-light ">
      <div className="hero-inner__content">
        <div className="hero-inner__tag">{category}</div>
        <h2 className="hero-inner__title mb-4x">{details?.data?.title}</h2>
        <div className="hero-inner__desc">
          <p className="m-0 text-primary-shade">
            <>
              {customData ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: customData?.data?.summary,
                  }}
                />
              ) : (
                <span>
                  {details?.data?.summary
                    ? getSummaryText(JSON.parse(details?.data?.summary), "text")
                    : DEFAULT_SUMMARY_CONTENT}
                </span>
              )}
            </>

            <span className="hero-inner__question d-block hero-dash ">
              What will I learn from this course?
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseHeros;
