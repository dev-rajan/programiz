import React from "react";

const Learning = ({
  title,
  setLearnTitle,
  slug,
  learnTitle,
  setSelectedTitle,
}) => {
  const handleSelect = () => {
    setLearnTitle(title);
    setSelectedTitle(slug);
  };

  return (
    <li onMouseDown={handleSelect} role="none">
      <span className={`link--inverse ${learnTitle === title ? "active" : ""}`}>
        {title}
      </span>
    </li>
  );
};

export default Learning;
