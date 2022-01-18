import { data } from "jquery";
import React, { useEffect, useState } from "react";
import { Button } from "react-distributed-forms";
import { FiXCircle } from "react-icons/fi";

const Question = ({
  Data,
  Answers,
  isSelected,
  setIsCorrect,
  setIsSelected,
  isCorrect,
  setCurrentPage,
}) => {
  const [isValue, setIsValue] = useState("");
  const [question, setQuestion] = useState("");

  useEffect(() => {
    if (isCorrect) setCurrentPage(2);
  }, [isCorrect]);

  const quizQuestion = `print(${Data.num1} - ${Data.num2})`;

  const handleClick = () => {
    setIsValue(question);
    setIsCorrect(null);
  };

  const handleCheck = () => {
    const isAnswerCorrect = isSelected === 2;

    if (isAnswerCorrect) {
      window.analytics.track(`Mock Quiz Correct Answer Submitted`, {
        question: quizQuestion,
        answer_selected: Data.questions[isSelected - 1].question,
        serial_number: Data.questions[isSelected - 1].sn,
        source: "Homepage Quiz",
      });
    } else {
      window.analytics.track(`Mock Quiz Wrong Answer Submitted`, {
        question: quizQuestion,
        answer_selected: Data.questions[isSelected - 1].question,
        serial_number: Data.questions[isSelected - 1].sn,
        source: "Homepage Quiz",
      });
    }
    setIsCorrect(isAnswerCorrect);

    setIsValue(question);
  };

  return (
    <div className="quiz__wrapper">
      <h3 className="color-secondary">
        Step {Data.step}: {Data.label}
      </h3>
      <div className="quiz-question mb-4">{Data.title}</div>
      <pre>
        <code>
          <span className="highlight">{quizQuestion}</span>
        </code>
      </pre>
      <div className="quiz-answer">
        <div className="row">
          {Data?.questions?.map((a) => (
            <Answers
              key={a.id}
              {...a}
              id={a.id}
              question={a.question}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              setIsCorrect={setIsCorrect}
              isCorrect={isCorrect}
              setIsValue={setIsValue}
              setQuestion={setQuestion}
            />
          ))}
        </div>
        <div className="quiz-action">
          <div className="quiz-result mr-4x" />
          <div className="quiz-submit ">
            {isSelected ? (
              <Button
                className={`btn btn--primary  btn--block my-3 ${
                  isSelected ? "" : "disabled "
                } ${isCorrect === false ? "d-none" : ""}`}
                onClick={handleCheck}
                name="next"
              >
                Submit Answer
              </Button>
            ) : (
              <Button
                className={`btn btn--primary my-3 btn--block  ${
                  isSelected ? "" : "disabled"
                } ${isCorrect === false ? "d-none" : ""}`}
                name="next"
                disabled
              >
                Submit Answer
              </Button>
            )}
          </div>
        </div>

        {isCorrect !== false ? (
          ""
        ) : (
          <div className="quiz-action">
            <div className="quiz-result mr-md-3 mr-0 mb-4 mb-md-0">
              <div className="answer-status answer-status--incorrect mb-0x">
                <div className="answer-status__icon">
                  <FiXCircle size={24} />
                </div>
                <div className="answer-status__body">
                  <h4 className="answer-status__title">Incorrect Answer !</h4>
                  <p className="m-0x answer-status__text">
                    Subtraction of {Data.num1}-{Data.num2} does not equal to
                    &nbsp;
                    {isValue}.
                  </p>
                </div>
              </div>
            </div>
            <div className="quiz-submit d-block d-md-inline ">
              <Button
                className={`btn btn--primary btn--block w-100 my-3 ${
                  isSelected ? "" : "disabled "
                }`}
                onClick={question === "1" ? handleCheck : handleClick}
                name="next"
              >
                Retry
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
