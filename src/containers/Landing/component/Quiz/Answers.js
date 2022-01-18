import React from "react";

const Answers = ({
  sn,
  id,
  question,
  isSelected,
  setIsSelected,
  setIsCorrect,
  isCorrect,
  setQuestion,
}) => {
  const handleClick = () => {
    setIsSelected(id);
    setQuestion(question);
    if (!isCorrect) {
      setIsCorrect(null);
      setIsSelected(id);
    }
  };

  return (
    <div className="col-md-6">
      <label
        role="presentation"
        onKeyDown={() => {}}
        onClick={handleClick}
        className={`label quiz-answer__item ${
          isSelected === id
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
          {question}
        </div>
      </label>
    </div>
  );
};

export default Answers;
