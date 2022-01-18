import React from "react";

export const TABS = {
  DESCRIPTION: "DESCRIPTION",
  COMPILER: "COMPILER",
};

const Tabs = ({ toggleTab, activeTab }) => {
  return (
    <ul
      className="nav nav-pills challenge__pills align-items-center "
      id="pills-tab"
      role="tablist"
    >
      <li
        className="nav-item "
        role="tab"
        onClick={() => toggleTab(TABS.DESCRIPTION)}
      >
        <button
          className={`nav-link ${
            activeTab === TABS.DESCRIPTION ? "active" : ""
          }`}
          id="pills-home-tab"
          type="button"
          role="tab"
        >
          Description
        </button>
      </li>
      <li
        className="nav-item"
        role="tab"
        onClick={() => toggleTab(TABS.COMPILER)}
      >
        <button
          className={`nav-link ${activeTab === TABS.COMPILER ? "active" : ""}`}
          id="pills-profile-tab"
          type="button"
          role="tab"
        >
          Compiler
        </button>
      </li>
    </ul>
  );
};

export default Tabs;
