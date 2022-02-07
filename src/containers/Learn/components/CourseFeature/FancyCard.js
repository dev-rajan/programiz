import React from "react";

const FancyCard = ({ custom }) => {
  return (
    <div className="course-section">
      <img
        className="arrow__down"
        src="/images/arrow-down.svg"
        alt="arrow down"
        title="arrow down"
      />
      <div className="card border shadow-none card__box">
        <div className="row">
          <div className="col-md-6 card__list">
            <div className="d-flex align-items-start">
              <div className="learn__image">
                <img
                  src="/images/learning-1.svg"
                  alt="Learn"
                  title="Learn"
                  className="mr-2x"
                />
              </div>
              <div>
                <p className="text-bold mb-2x text-primary-dark">
                  {custom !== ""
                    ? custom?.data?.card1?.title
                    : "Learn end-to-end Programming one by one"}
                </p>
                <p className="mb-0x fs-body14">
                  {custom !== ""
                    ? custom?.data?.card1?.desc
                    : "Step by step learning. No prior knowledge required."}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 card__list">
            <div className="d-flex align-items-start">
              <div className="learn__image">
                <img
                  src="/images/learning-2.svg"
                  alt="Learn"
                  title="Learn"
                  className="mr-2x"
                />
              </div>
              <div>
                <p className="text-bold mb-2x text-primary-dark">
                  {custom !== ""
                    ? custom?.data?.card2?.title
                    : "Create multiple projects"}
                </p>
                <p className="mb-1x fs-body14">
                  {custom !== ""
                    ? custom?.data?.card2?.desc
                    : "Put all you have learned into practice by creating projects."}
                </p>
                <p className="text-bold color-secondary mb-0">
                  What is a learning path?
                  <img
                    className="arrow2"
                    src="/images/arrow-down-2.svg"
                    alt="arrow down"
                    title="arrow down"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyCard;
