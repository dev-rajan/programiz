import React from "react";

const CourseCards = ({ img, title }) => {
  return (
    <li className="d-flex align-items-start mb-4">
      <img src={img} alt="Check" title="Check" className="mr-3x" />
      <span>{title}</span>
    </li>
  );
};

export default CourseCards;
