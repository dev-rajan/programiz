import React, { useEffect, useState } from "react";
import { Button } from "react-distributed-forms";
import { FiXCircle } from "react-icons/fi";

import Highlight from "react-highlight";

import getSummaryText from "utility/TextFormatter";
import ContentRender from "components/SlateRender";

import * as Constants from "constants/consts";

const Question = ({
  quizData,
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
  const [checkCorrect, setCheckCorrect] = useState(false);

  useEffect(() => {
    if (isCorrect) setCurrentPage(2);
  }, [isCorrect]);

  const quizQuestion = quizData?.contentDetails?.title;

  const handleClick = () => {
    setIsValue(question);
    setIsCorrect(null);
  };

  const handleCheck = () => {
    const isAnswerCorrect = checkCorrect;

    if (isAnswerCorrect) {
      window.analytics.track(`Mock Quiz Correct Answer Submitted`, {
        question: quizQuestion,
        answer_selected: getSummaryText(
          JSON.parse(quizData?.contentDetails?.lsOptions[isSelected - 1].value),
          "text"
        ),
        serial_number:
          quizData?.contentDetails?.lsOptions[isSelected - 1].order,
        source: "Homepage Quiz",
      });
    } else {
      window.analytics.track(`Mock Quiz Wrong Answer Submitted`, {
        question: quizQuestion,
        answer_selected: getSummaryText(
          JSON.parse(quizData?.contentDetails?.lsOptions[isSelected - 1].value),
          "text"
        ),
        serial_number:
          quizData?.contentDetails?.lsOptions[isSelected - 1].order,
        source: "Homepage Quiz",
      });
    }
    setIsCorrect(isAnswerCorrect);

    setIsValue(question);
  };

  const questionText =
    quizData?.contentDetails?.value &&
    getSummaryText(JSON.parse(quizData?.contentDetails?.value), "text");

  return (
    <div className="quiz__wrapper">
      <h3 className="color-secondary mb-3">
        Step {quizData?.step}: {Data.label}
      </h3>
      <div className="quiz-question mb-3">
        {quizData?.contentDetails?.question}
      </div>
      <span>
        <Highlight language="python">{questionText}</Highlight>
      </span>
      <div className="quiz-answer">
        <div className="row">
          {quizData?.contentDetails?.lsOptions?.map((a) => (
            <Answers
              key={a.id}
              {...a}
              sn={a.order}
              question={a.value}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              setIsCorrect={setIsCorrect}
              isCorrect={isCorrect}
              isRight={a.isCorrect}
              setIsValue={setIsValue}
              setQuestion={setQuestion}
              setCheckCorrect={setCheckCorrect}
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
