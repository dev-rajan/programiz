/* eslint-disable no-restricted-syntax */
import React from "react";
import { useRouter } from "next/router";

import getSummaryText from "utility/TextFormatter";
import { CUSTOM_COURSE_DATA } from "constants/consts";

const CourseHeros = ({ details, category }) => {
  const router = useRouter();

  return (
    <section className="hero-inner hero-inner-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="hero-inner__content">
              <div className="hero-inner__tag">{category}</div>
              <h2 className="hero-inner__title mb-4x">
                {details?.data?.title}
              </h2>
              <div className="hero-inner__desc">
                <p className="m-0 text-primary-shade">
                  {details?.data?.summary !== undefined &&
                    details?.data?.summary?.length > 1 && (
                      <>
                        {router.query.slug[0] == CUSTOM_COURSE_DATA.PYTHON ||
                        router.query.slug[0] == CUSTOM_COURSE_DATA.C ? (
                          <span
                            dangerouslySetInnerHTML={{
                              __html: details?.data?.summary,
                            }}
                          />
                        ) : (
                          <span>
                            {getSummaryText(
                              JSON.parse(details?.data?.summary),
                              "text"
                            )}
                          </span>
                        )}
                      </>
                    )}

                  <span className="hero-inner__question d-block">
                    What will I learn from this course?
                    <span className="d-block">
                      <img
                        src="/images/hero-underline.svg"
                        alt="Hero Question"
                        title="Hero Question"
                      />
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHeros;
