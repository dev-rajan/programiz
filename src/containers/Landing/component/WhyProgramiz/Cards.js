import React from "react";

import Progress from "../Learning/Progress";

const Cards = ({ title, onTimeEnd, isActive, handleSelect, idx }) => (
  <div
    data-idx={idx}
    onClick={handleSelect}
    role="button"
    onKeyDown={() => {}}
    tabIndex="0"
    className={`card-path border why-card pointer ${
      isActive ? "current" : ""
    } p-6x d-flex align-items-center`}
    style={{ height: "150px" }}
  >
    <p>{title}</p>
    {isActive ? <Progress onTimeEnd={onTimeEnd} /> : ""}
  </div>
);

export default Cards;
