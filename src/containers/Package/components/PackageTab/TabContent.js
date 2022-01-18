import React from "react";

import Cards from "./Cards";
import { FILTER_TYPES } from "./Data";

const TabContent = ({ course, learn, courseType }) => {
  const Course_URL = "/course";
  const Learn_URL = "/learning";

  return (
    <div className="tab-content" id="v-pills-tabContent">
      {courseType === FILTER_TYPES.ALL && (
        <div
          className="tab-pane fade show active"
          id="v-pills-all"
          role="tabpanel"
          aria-labelledby="v-pills-all-tab"
        >
          {course?.data?.map((a) => (
            <Cards link={`${Course_URL}/${a.slug}`} key={a.slug} {...a} />
          ))}
          {learn?.data?.map((a) => (
            <Cards link={`${Learn_URL}/${a.slug}`} key={a.slug} {...a} />
          ))}
        </div>
      )}

      {courseType === FILTER_TYPES.LEARNING && (
        <div
          className="tab-pane fade show active"
          id="v-pills-learning"
          role="tabpanel"
          aria-labelledby="v-pills-learning-tab"
        >
          {learn?.data?.map((a) => (
            <Cards
              key={a.slug}
              link={`${Learn_URL}/${a.slug}`}
              slug={a.slug}
              {...a}
            />
          ))}
        </div>
      )}

      {courseType === FILTER_TYPES.COURSES && (
        <div
          className="tab-pane fade show active"
          id="v-pills-courses"
          role="tabpanel"
          aria-labelledby="v-pills-courses-tab"
        >
          {course?.data?.map((a) => (
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
