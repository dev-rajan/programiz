import React from "react";

const LanguageFilter = ({
  isChecked,
  onLanguageFilterSelected,
  filter,
  id,
}) => {
  const handleChange = (e) => {
    onLanguageFilterSelected(e.target.value);
  };

  return (
    <li
      className={`nav-link link__button border-0 py-0 mb-2 ${
        isChecked ? "active" : ""
      }`}
      role="presentation"
    >
      <input
        type="checkbox"
        className="align-middle"
        value={filter.slug}
        id={`flexCheckDefault-${id}-${filter.id}`}
        onChange={handleChange}
        checked={isChecked}
      />
      <label
        className="form-check-label ml-1 align-middle"
        htmlFor={`flexCheckDefault-${id}-${filter.id}`}
        role="presentation"
      >
        {filter.title}
      </label>
    </li>
  );
};

export default LanguageFilter;
