import React from "react";

const CourseType = ({ title, selected, setSelected, setMinor }) => {
  const handleSelect = (selectedTitle) => {
    setSelected(selectedTitle);
    setMinor(true);
  };

  return (
    <a
      onClick={(e) => {
        e.stopPropagation();
        handleSelect(title);
      }}
      className={`tab__link ${selected === title ? "tab__link--active" : null}`}
    >
      {title}
    </a>
  );
};

export default CourseType;
