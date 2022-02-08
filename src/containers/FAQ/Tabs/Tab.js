import React from "react";

import handleScroll from "utility/clickScroller";

const Tab = ({ title, id, isActive, setIsActive }) => {
  const handleClick = (idx) => {
    setIsActive(idx);
    if (id === 1) {
      handleScroll("general-scroll");
    }
    if (id === 2) {
      handleScroll("account-scroll");
    }
    if (id === 3) {
      handleScroll("certificate-scroll");
    }
    if (id === 4) {
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
