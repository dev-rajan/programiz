import React from "react";
import List from "./List";

const Faq = ({ Items }) => {
  return (
    <div className="col-12 section-padding--large">
      <div className="pricing-section">
        <h2 className="mb-6x fs-h2main text-center">
          Frequently Asked Questions
        </h2>
        <ul className="accordion accordion--border">
          {Items?.map((a) => (
            <List {...a} key={a.id} step={a.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
