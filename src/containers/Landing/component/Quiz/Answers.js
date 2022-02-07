import React from "react";

import getSummaryText from "utility/TextFormatter";

const Answers = ({
  sn,
  question,
  isSelected,
  setIsSelected,
  setIsCorrect,
  isCorrect,
  isRight,
  setQuestion,
  setCheckCorrect,
}) => {
  const handleClick = () => {
    setIsSelected(sn);
    setCheckCorrect(isRight);
    setQuestion(option);
    if (!isCorrect) {
      setIsCorrect(null);
      setIsSelected(sn);
    }
  };

  const option = getSummaryText(JSON.parse(question), "text");

  return (
    <div className="col-md-6">
      <label
        role="presentation"
        onKeyDown={() => {}}
        onClick={handleClick}
        className={`label quiz-answer__item ${
          isSelected === sn
            ? `active ${
                isCorrect === null
                  ? "quiz-answer__item--selected"
                  : `quiz-answer__item--${isCorrect ? "correct" : "incorrect"}`
              } `
            : ""
        }`}
      >
        <input type="radio" name="answer" />
        <div>
          <span className="quiz-answer__sn mr-2x">{sn}.</span>
          {option}
        </div>
      </label>
    </div>
  );
};

export default Answers;
