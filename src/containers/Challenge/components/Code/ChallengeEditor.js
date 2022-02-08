import React from "react";

const ChallengeEditor = ({ step, label, children, currentChallengeIndex }) => {
  return (
    <div className="">
      <h2 className="mb-6x fs-h2main ">
        Here are some Challenges for you to try out:
      </h2>
      <div className="challenge__box">
        <div className="challenge__box--first">
          <h2 className="fs-h2main challenge__title">
            Challenge #{currentChallengeIndex + 1}:
            <br /> {label}
          </h2>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ChallengeEditor;
