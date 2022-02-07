import React, { useState, useEffect } from "react";
import { Form } from "react-distributed-forms";

import { Data } from "../../Data";
import Answers from "./Answers";
import Question from "./Question";
import Success from "./Success";
import Code from "./Code";
import Completed from "./Completed";

import Correct from "../../../../../public//images/success-quiz.png";

const Quizs = ({ quizData }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [isMounted, setIsMounted] = useState(false);

  const handleSubmit = ({ name }) => {
    if (isCorrect === true) {
      if (name === "next") {
        if (currentPage) {
          setCurrentPage(currentPage + 1);
        }
      }
    }
  };

  const handleClear = () => {
    setIsSelected(false);
    setIsCorrect(null);
  };

  useEffect(() => {
    if (currentPage === 2) {
      setIsMounted(true);
    }
  }, [currentPage]);

  return (
    <section className="interactive-quiz">
      <div className="container">
        <div className="d-flex flex-wrap no-gutters quiz__block ">
          <div className="col-xl-5 quiz-text d-flex flex-column flex-grow-1">
            <div className="mb-8x">
              <h1 className="mb-0 text-medium">
                The Best Interactive Learning Tool
              </h1>
            </div>

            <div className="d-none d-md-block">
              The best way to learn how to code is to practice. We’ve created a
              tool that let’s you practice everything you learned in a practical
              and intuitive way.
            </div>
            <p className="try-out pr-0 pr-md-5">
              Try out a snippet of our lesson
              <br className="d-md-none" /> flow NOW!
              <img
                src="images/try-out-arrow.svg"
                className={
                  currentPage !== 1
                    ? "d-none arrow3"
                    : "d-xl-block d-none arrow3"
                }
                alt="Try out"
                title="Try out"
              />
              <img
                src="images/arrow-down-2.png"
                className={currentPage !== 1 ? "d-none" : "d-xl-none d-block"}
                title="Try out"
                alt="Try out"
              />
            </p>
          </div>
          <div className="col-xl-7 quiz ">
            <Form onSubmit={handleSubmit}>
              {currentPage === 1 && (
                <Question
                  quizData={quizData[1]}
                  Data={Data}
                  Answers={Answers}
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                  setIsCorrect={setIsCorrect}
                  isCorrect={isCorrect}
                  handleClear={handleClear}
                  setCurrentPage={setCurrentPage}
                />
              )}
              {currentPage === 2 && (
                <Success
                  isMounted={isMounted}
                  img={Correct}
                  title="Correct Answer"
                  message="You just read a Python code syntax and gave the correct answer."
                  btnText="Go to Step 2"
                />
              )}
              {currentPage === 3 && <Code quizData={quizData[0]} />}
              {currentPage === 4 && (
                <Completed
                  img={Correct}
                  title="Great Job!"
                  enrollPath="/catalog/course"
                  message="You have taken your first steps into becoming a programmer. Check out our catalog of courses and get started now."
                  btnText="View all courses"
                />
              )}
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quizs;
