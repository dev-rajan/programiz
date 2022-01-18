import React from "react";

const Banner = ({ custom }) => {
  return (
    <div className="course-section">
      <h2 className="mb-6x fs-h2main">What will I make in this course?</h2>
      <div className="why-this-path mt-0x">
        <img
          src="/images/rock-paper.svg"
          alt="Rock Paper"
          title="Rock Paper"
          className="rock-paper"
        />
        <div className="row">
          <div className="col-7 offset-4">
            <h3 className="mb-2 mb-md-4">
              {custom !== ""
                ? custom?.data?.banner?.rock_paper?.title
                : "Rock, Paper & Scissors"}
            </h3>
            <p className="mb-0x">
              &quot;
              {custom !== ""
                ? custom?.data?.banner?.rock_paper?.desc
                : `I have been teaching English for 25 years. I wanted to learn how to code but had no idea before I discovered Programiz. Recommend 100%.`}
              &quot;
            </p>
          </div>
        </div>
      </div>
      <div className="row ">
        <div
          className={`col-lg-6 ${
            custom?.data?.banner?.tic_toe !== undefined ? "" : "d-none"
          }`}
        >
          <div className="bg__primary--dark text-center py-10x px-6x card__block mt-lg-9x mt-6x">
            <img
              src="/images/Tic-tac-toe.png"
              title="Tic tac toe"
              alt="Tic tac toe"
            />
            <h3 className="text-white mb-2 mt-6x">
              {custom !== "" && custom?.data?.banner?.tic_toe?.title}
            </h3>
            <span className="text-white">
              “{custom !== "" && custom?.data?.banner?.tic_toe?.desc}”
            </span>
          </div>
        </div>
        <div
          className={`col-lg-6 ${
            custom?.data?.banner?.form_validator !== undefined ? "" : "d-none"
          }`}
        >
          <div className="bg--dark text-center py-10x px-6x card__block mt-lg-9x mt-6x">
            <img
              src="/images/Guessing-game.png"
              title="Guessing game"
              alt="Guessing game"
            />
            <h3 className="text-white mb-2 mt-6x">
              {custom !== "" && custom?.data?.banner?.form_validator?.title}
            </h3>
            <span className="text-white">
              “{custom !== "" && custom?.data?.banner?.form_validator?.desc}”
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
