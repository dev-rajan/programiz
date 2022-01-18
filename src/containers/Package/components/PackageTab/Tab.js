import React from "react";

const Tab = ({
  filterSlug,
  title,
  total,
  idx,
  courseTotal,
  learningTotal,
  slug,
  setCourseType,
  isActive,
  course,
  learn,
  setFilteredData,
}) => {
  const handleSelect = () => {
    setCourseType(slug);

    const coursesData = course?.data?.filter(
      (item) => item.language.title.toLowerCase() === filterSlug.toLowerCase()
    );

    const learningData = learn?.data?.filter((item) => {
      const val = Object.values(item).join("").toLowerCase();

      return val.includes(title.toLowerCase());
    });

    if (idx === 0) {
      setFilteredData([]);
      setFilteredData((prev) => [...prev, ...coursesData, ...learningData]);
    }
    if (idx === 1) {
      setFilteredData([]);
      setFilteredData((prev) => [...prev, ...learningData]);
    }
    if (idx === 2) {
      setFilteredData([]);
      setFilteredData((prev) => [...prev, ...coursesData]);
    }
  };

  const getTotal = (val) => {
    if (val === 0) {
      return total;
    }
    if (val === 1) {
      return learningTotal;
    }

    return courseTotal;
  };

  return (
    <button
      onClick={() => handleSelect(idx)}
      className={`nav-link  py-0 mb-0 mb-md-2 ${
        isActive ? "active" : ""
      } link__button`}
      id={idx}
      type="button"
      role="tab"
    >
      {title}
      <span className="tab__indicator ml-1">{getTotal(idx)}</span>
    </button>
  );
};

export default Tab;
