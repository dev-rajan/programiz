import React from "react";

const List = ({ title }) => {
  return (
    <li className="d-flex align-items-start mb-4x pricing__list">
      <img
        src="images/icon-tick.svg"
        className="mr-3x"
        alt="Check"
        title="Check"
      />
      {title}
    </li>
  );
};

export default List;
