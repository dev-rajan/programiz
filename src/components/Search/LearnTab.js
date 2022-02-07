import React from "react";
import List from "./List";

const LearnTab = ({ filteredLearning, filteredCourses, handleClick }) => {
  return (
    <>
      <div className="tab">
        <div className="tab__item tab__item--current">
          <a className="d-flex">
            Learning Path
            <span className="badge badge--light ml-2x">
              {filteredLearning !== undefined && filteredLearning?.length}
            </span>
          </a>
        </div>

        <div
          className="tab__item"
          onClick={handleClick}
          role="presentation"
          onKeyDown={() => {}}
        >
          <a className="d-flex">
            Courses
            <span className="badge badge--light ml-2x">
              {filteredCourses?.length}
            </span>
          </a>
        </div>
      </div>

      {filteredLearning?.length === 0 || filteredLearning === undefined ? (
        <p className="mt-4x">No learning paths found</p>
      ) : (
        <div className="search__list">
          {filteredLearning?.map((a) => (
            <List linkTo="learn" {...a} key={a.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default LearnTab;
