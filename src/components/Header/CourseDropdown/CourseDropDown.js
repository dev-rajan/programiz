import React, { useContext, useState } from "react";
import Link from "next/link";
import { COURSE_FILTERS } from "containers/Package/Filter/PackageTab/Data";

import CourseType from "./CourseType";
import DropdownMenuItems from "./DropdownMenuItems";
import { CatalogContext } from "contextApi/CatalogContext";

const CourseDropDown = ({ handleDropdown, setMinor }) => {
  const { course, learn, challenge } = useContext(CatalogContext);
  const [selected, setSelected] = useState(COURSE_FILTERS[1]?.title);
  const url = "/catalog/";
  const Course_URL = "/course";
  const Learn_URL = "/learn";

  return (
    <div className="dropdown-menu show">
      <ul className="dropdown-menu__tabs">
        <li className="dropdown-menu__tab">
          {COURSE_FILTERS?.map((a) => (
            <CourseType
              {...a}
              key={a.id}
              selected={selected}
              setSelected={setSelected}
              setMinor={setMinor}
            />
          )).slice(1)}
        </li>
      </ul>
      <div className="dropdown-menu__content d-flex flex-column justify-content-between">
        <div className="dropdown-menu__list">
          {selected === COURSE_FILTERS[1].title && (
            <>
              {learn?.map((a) => (
                <DropdownMenuItems
                  link={`${Learn_URL}/${a.slug}`}
                  {...a}
                  key={a.id}
                  handleDropdown={handleDropdown}
                  courseCount={a?.levels?.[0]?.courses?.length}
                />
              ))}
            </>
          )}
          {selected === COURSE_FILTERS[2].title && (
            <>
              {course?.map((a) => (
                <DropdownMenuItems
                  link={`${Course_URL}/${a.slug}`}
                  {...a}
                  key={a.id}
                  handleDropdown={handleDropdown}
                />
              ))}
            </>
          )}
          {selected === COURSE_FILTERS[3].title && (
            <>
              {challenge?.map((a) => (
                <DropdownMenuItems
                  link={`${Course_URL}/${a.slug}`}
                  {...a}
                  key={a.id}
                  handleDropdown={handleDropdown}
                />
              ))}
            </>
          )}
        </div>

        <div className="dropdown-menu__more d-flex align-items-center justify-content-end">
          {selected === COURSE_FILTERS[1].title && (
            <Link href={`${url}learn`}>
              <a
                className="btn btn--link text-dark btn-xs"
                onClick={handleDropdown}
              >
                See All Learning Path ({learn?.length})
              </a>
            </Link>
          )}
          {selected === COURSE_FILTERS[2].title && (
            <Link href={`${url}course`}>
              <a
                className="btn btn--link text-dark btn-xs"
                onClick={handleDropdown}
              >
                See All Learning Courses ({course?.length})
              </a>
            </Link>
          )}
          {selected === COURSE_FILTERS[3].title && (
            <Link href={`${url}challenge`}>
              <a
                className="btn btn--link text-dark btn-xs"
                onClick={handleDropdown}
              >
                See All Challenges ({challenge?.length})
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDropDown;
