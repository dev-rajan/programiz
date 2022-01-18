import React from "react";

const Courses = ({
  slug,
  idx,
  title,
  logo,
  setCourseTitle,
  setSelectedCourse,
  setSelectedLearning,
}) => {
  const handleClick = () => {
    setCourseTitle(title);
    setSelectedCourse(slug);
    setSelectedLearning(slug);
  };

  const getColor = (val) => {
    if (val === 0) {
      return "yellow";
    }
    if (val === 1) {
      return "blue";
    }
    if (val === 2) {
      return "red";
    }

    return "green";
  };

  return (
    <div
      className={`col-lg-6 px-0 ${
        title === "C++ Programmer" || title === "Java Programmer"
          ? "d-none"
          : null
      }`}
      onClick={handleClick}
      role="button"
      onKeyPress={() => {}}
      tabIndex={-1}
    >
      <div
        className={`major__item d-flex align-items-center major__item--${getColor(
          idx
        )} `}
      >
        <img
          className="mr-2"
          src={logo.length !== 0 ? logo : "/images/noimage.png"}
          alt="Hero Img"
          title="Hero Img"
        />
        <span className="fs-4">{title}</span>
      </div>
    </div>
  );
};

export default Courses;
