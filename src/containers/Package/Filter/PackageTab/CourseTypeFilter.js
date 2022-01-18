import React from "react";

const CourseTypeFilter = ({
  handleSelect,
  isActive,
  filterItem,
  dataCount,
}) => {
  return (
    <button
      onClick={() => handleSelect(filterItem.slug)}
      className={`nav-link  py-0 mb-0 mb-md-2 ${
        isActive ? "active" : ""
      } link__button`}
      type="button"
      role="tab"
    >
      {filterItem.title}
      {/* <span className="tab__indicator ml-1">{getTotal(idx)}</span> */}
      <span className="tab__indicator ml-1">{dataCount}</span>
    </button>
  );
};

export default CourseTypeFilter;
