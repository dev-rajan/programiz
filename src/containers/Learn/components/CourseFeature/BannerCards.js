import React from "react";

const BannerCards = () => {
  return (
    <div className="col-lg-6">
      <div className="bg__primary--dark text-center py-10x px-6x card__block mt-lg-9x mt-6x">
        <img
          src="/images/Tic-tac-toe.png"
          title="Tic tac toe"
          alt="Tic tac toe"
        />
        <h3 className="text-white mb-2 mt-6x">Tic Tac Toes</h3>
        <span className="text-white">
          “I have been teaching English for 25 years. I wanted to learn how to
          code but had no idea before I discovered.”
        </span>
      </div>
    </div>
  );
};

export default BannerCards;
