import React from "react";
import { useRouter } from "next/router";

import getSummaryText from "utility/TextFormatter";
import { CUSTOM_LEARNING_PATH_DATA } from "constants/consts";

const CourseHeros = ({ summary, category }) => {
  const router = useRouter();

  return (
    <section className="hero-inner hero-inner-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="hero-inner__content">
              <div className="hero-inner__tag">{category}</div>
              <h2 className="hero-inner__title mb-4x">
                {summary?.data?.title}
              </h2>
              <div className="hero-inner__desc">
                <p className="m-0 text-primary-shade">
                  {summary?.data?.content === undefined && (
                    <span
                      dangerouslySetInnerHTML={{
                        __html:
                          "Understand the core basics of analyzing data with Python by learning in a practical way. Start from the basics and move to advanced implementations.",
                      }}
                    />
                  )}

                  {summary?.data?.content?.length < 1 && (
                    <span
                      dangerouslySetInnerHTML={{
                        __html:
                          "Understand the core basics of analyzing data with Python by learning in a practical way. Start from the basics and move to advanced implementations.",
                      }}
                    />
                  )}

                  {summary?.data?.content !== undefined &&
                    summary?.data?.content?.length > 1 && (
                      <>
                        {router.query.slug[0] ==
                          CUSTOM_LEARNING_PATH_DATA.PYTHON_JOB_READY ||
                        router.query.slug[0] ==
                          CUSTOM_LEARNING_PATH_DATA.C_JOB_READY ? (
                          <span
                            dangerouslySetInnerHTML={{
                              __html: summary?.data?.content,
                            }}
                          />
                        ) : (
                          <span>
                            {getSummaryText(
                              JSON.parse(summary?.data?.content),
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
