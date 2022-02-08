import React from "react";
import { useRouter } from "next/router";

import getSummaryText from "utility/TextFormatter";
import {
  CUSTOM_LEARNING_PATH_DATA,
  DEFAULT_SUMMARY_CONTENT,
} from "constants/consts";

const CourseHeros = ({ summary, category, slugData }) => {
  const router = useRouter();

  return (
    <section className="hero-inner hero-inner-light">
      <div className="hero-inner__content">
        <div className="hero-inner__tag">{category}</div>
        <h2 className="hero-inner__title mb-4x">{slugData?.data?.title}</h2>
        <div className="hero-inner__desc">
          <p className="m-0 text-primary-shade">
            <>
              {summary ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: summary?.data?.content,
                  }}
                />
              ) : (
                <span>
                  {slugData?.data?.content
                    ? getSummaryText(
                        JSON.parse(slugData?.data?.content),
                        "text"
                      )
                    : DEFAULT_SUMMARY_CONTENT}
                </span>
              )}
            </>
            <span className="hero-inner__question d-block hero-dash">
              What will I learn from this course?
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseHeros;
