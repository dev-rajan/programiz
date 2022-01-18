import React, { useState, useEffect } from "react";
import { FILTER_TYPES } from "./Data";

const Filter = ({
  course,
  learn,
  title,
  idx,
  filteredData,
  setFilteredData,
  slug,
  setLanguageFilters,
  reset,
  setReset,
  mobileFilter,
  setMobileFilter,
  apply,
  setApply,
  courseType,
  setFilterSlug,
}) => {
  const [checked, setChecked] = useState(false);
  const [checkedHistory, setCheckedHistory] = useState(false);

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  const addFilter = (slug) => {
    setFilterSlug(slug);
    const coursesData = course?.data?.filter(
      (item) => item.language.title.toLowerCase() === slug.toLowerCase()
    );

    const learningData = learn?.data?.filter((item) => {
      const val = Object.values(item).join("").toLowerCase();

      return val.includes(title.toLowerCase());
    });

    if (courseType === FILTER_TYPES.ALL) {
      setFilteredData((prev) => [...prev, ...coursesData, ...learningData]);
    }
    if (courseType === FILTER_TYPES.LEARNING) {
      setFilteredData((prev) => [...prev, ...learningData]);
    }
    if (courseType === FILTER_TYPES.COURSES) {
      setFilteredData((prev) => [...prev, ...coursesData]);
    }
    setLanguageFilters((prev) => [...prev, slug]);
  };

  const removeFilter = (slug) => {
    const removedValue = filteredData?.filter(
      (item) => item.language?.title !== slug
    );

    const newFilter = removedValue?.filter(
      (item) =>
        !Object.values(item)
          .join("")
          .toLowerCase()
          .includes(title.toLowerCase())
    );

    setFilteredData(newFilter);
    setLanguageFilters((p) => p.filter((item) => item !== slug));
    setFilterSlug("");
  };

  useEffect(() => {
    if (apply) {
      setCheckedHistory(checked);
      setMobileFilter(filteredData);
      setApply(false);
    }

    if (reset) {
      setChecked(checkedHistory);
      setFilteredData(mobileFilter);
      setReset(false);
      setApply(false);
    }
  }, [reset, checked, apply]);

  useEffect(() => {
    if (checked) {
      addFilter(slug);
    } else {
      removeFilter(slug);
    }
  }, [checked]);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <li
      className={`nav-link link__button border-0 py-0 mb-2 ${
        checked ? "active" : ""
      }`}
      onClick={() => handleClick(idx)}
      role="presentation"
    >
      <input
        type="checkbox"
        className="align-middle"
        value={slug}
        id={`flexCheckDefault-${idx}`}
        onChange={handleChange}
        checked={checked}
      />
      <label
        className="form-check-label ml-1 align-middle"
        htmlFor={`flexCheckDefault-${idx}`}
        onClick={() => handleClick(idx)}
        role="presentation"
      >
        {title}
      </label>
    </li>
  );
};

export default Filter;
