import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const List = ({ step, title, desc }) => {
  const isFirstChapter = step === 1;
  const [displayContent, setDisplayContent] = useState(isFirstChapter);

  const handleClick = () => {
    setDisplayContent(!displayContent);
  };

  return (
    <li className="accordion__item">
      <div
        onClick={handleClick}
        role="presentation"
        onKeyDown={() => {}}
        className={`accordion__title ${
          displayContent ? "accordion__title--open" : ""
        } d-flex align-items-center justify-content-between`}
      >
        <h5>
          {step}. {title}
        </h5>
        <FiChevronRight className="title__icon" size={24} />
      </div>
      <div
        className="accordion__content"
        aria-expanded={!displayContent}
        dangerouslySetInnerHTML={{
          __html: desc,
        }}
      />
    </li>
  );
};

export default List;
