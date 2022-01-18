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
      <div className="card border shadow-none py-10x px-8x">
        <div className="row">
          <div className="col-md-6 pr-10x-md mb-10x mb-0x-md  border-md-right ">
            <div className="d-flex align-items-start">
              <img
                src="/images/learning-1.svg"
                alt="Learn"
                title="Learn"
                className="mr-4x"
              />
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
          <div className="col-md-6 px-10x-md">
            <div className="d-flex align-items-start">
              <img
                src="/images/learning-2.svg"
                alt="Learn"
                title="Learn"
                className="mr-4x"
              />
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
                  What&apos;s in the course?
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
