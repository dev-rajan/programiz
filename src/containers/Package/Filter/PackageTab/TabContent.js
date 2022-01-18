import React from "react";

import Cards from "./Cards";
import { FILTER_TYPES } from "./Data";

const TabContent = ({ filterType, course, learn, challenge }) => {
  const Course_URL = "/course";
  const Learn_URL = "/learning";

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
            <Cards link={`${Course_URL}/${a.slug}`} key={a.slug} {...a} />
          ))}
          {learn?.map((a) => (
            <Cards link={`${Learn_URL}/${a.slug}`} key={a.slug} {...a} />
          ))}
          {challenge?.map((a) => (
            <Cards link={`${Course_URL}/${a.slug}`} key={a.slug} {...a} />
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
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TabContent;
