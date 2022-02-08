import React from "react";

const HeroSection = ({ title, extraClass }) => {
  return (
    <section className={`hero-inner ${extraClass}`}>
      <div className="container">
        <div className="hero-inner__content text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <h2 className="hero-inner__title">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
