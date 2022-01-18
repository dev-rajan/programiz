import React from "react";

import LearningCards from "./LearningCards";

const CourseLearnings = ({ recommended }) => {
  return (
    <section className="section-padding learning__path--options">
      <div className="container">
        <h2 className="mb-8x text-left text-lg-center">
          Learning paths similar to this
        </h2>
        <div className="d-flex justify-content-start justify-content-md-center overflow-auto">
          {recommended?.data
            ?.map((a) => (
              <LearningCards
                key={a.slug}
                slug={a.slug}
                {...a}
                extraClass="col-lg-3"
              />
            ))
            .slice(0, 2)}
        </div>
      </div>
    </section>
  );
};

export default CourseLearnings;
