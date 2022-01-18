import React from "react";

import * as Constants from "constants/consts";

import ContentRender from "components/SlateRender";

const Desc = ({ onStartCodingClick, data }) => {
  return (
    <div className="challenge__detail">
      <ContentRender
        courseTitle={data.contentDetails.title}
        content={data.contentDetails.problemStatement}
        contentType={Constants.LESSON_TYPES.CHALLENGE}
      />
      <button
        onClick={onStartCodingClick}
        className="btn btn--primary btn--sm d-flex mx-auto justify-content-center w-100 mt-3 d-lg-none"
        name="next"
      >
        Start Coding
      </button>
    </div>
  );
};

export default Desc;
