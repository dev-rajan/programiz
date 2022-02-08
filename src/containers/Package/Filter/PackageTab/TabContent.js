import React from "react";

import Cards from "./Cards";
import { FILTER_TYPES } from "./Data";
import { CATEGORY } from "constants/consts";

const TabContent = ({ filterType, course, learn, challenge }) => {
  const Course_URL = "/course";
  const Learn_URL = "/learn";

  return (
    <div className="tab-content" id="v-pills-tabContent">
      {filterType === FILTER_TYPES.ALL && (
        <div
          className="tab-pane fade show active"
          id="v-pills-all"
          role="tabpanel"
          aria-labelledby="v-pills-all-tab"
        >
          {course?.map((a) => (
            <Cards
              link={`${Course_URL}/${a.slug}`}
              key={a.slug}
              {...a}
              category={CATEGORY.course_category}
            />
          ))}
          {learn?.map((a) => (
            <Cards
              link={`${Learn_URL}/${a.slug}`}
              key={a.slug}
              {...a}
              category={CATEGORY.learn_category}
            />
          ))}
          {challenge?.map((a) => (
            <Cards
              link={`${Course_URL}/${a.slug}`}
              key={a.slug}
              {...a}
              category={CATEGORY.challenge_category}
            />
          ))}
        </div>
      )}

      {filterType === FILTER_TYPES.LEARNING && (
        <div
          className="tab-pane fade show active"
          id="v-pills-learning"
          role="tabpanel"
          aria-labelledby="v-pills-learning-tab"
        >
          {learn?.map((a) => (
            <Cards
              key={a.slug}
              link={`${Learn_URL}/${a.slug}`}
              slug={a.slug}
              {...a}
              category={CATEGORY.learn_category}
            />
          ))}
        </div>
      )}

      {filterType === FILTER_TYPES.COURSES && (
        <div
          className="tab-pane fade show active"
          id="v-pills-courses"
          role="tabpanel"
          aria-labelledby="v-pills-courses-tab"
        >
          {course?.map((a) => (
            <Cards
              key={a.slug}
              link={`${Course_URL}/${a.slug}`}
              slug={a.slug}
              {...a}
              category={CATEGORY.course_category}
            />
          ))}
        </div>
      )}

      {filterType === FILTER_TYPES.CHALLENGES && (
        <div
          className="tab-pane fade show active"
          id="v-pills-courses"
          role="tabpanel"
          aria-labelledby="v-pills-courses-tab"
        >
          {challenge?.map((a) => (
            <Cards
              key={a.slug}
              link={`${Course_URL}/${a.slug}`}
              slug={a.slug}
              {...a}
              category={CATEGORY.challenge_category}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TabContent;
