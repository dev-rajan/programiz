import React from "react";

import handleScroll from "utility/clickScroller";

const Tab = ({ title, id, isActive, setIsActive }) => {
  const handleClick = (idx) => {
    setIsActive(idx);
    if (id === 1) {
      handleScroll("general-scroll");
    }
    if (id === 2) {
      handleScroll("pricing-scroll");
    }
    if (id === 3) {
      handleScroll("account-scroll");
    }
    if (id === 4) {
      handleScroll("certificate-scroll");
    }
    if (id === 5) {
      handleScroll("content-scroll");
    }
  };

  return (
    <li className="nav-item" onClick={() => handleClick(id)}>
      <span className={`nav-link ${isActive === id ? "active" : ""} mb-2 p-0`}>
        {title}
      </span>
    </li>
  );
};

export default Tab;
