import React from "react";

const Testimonial = () => {
  return (
    <div className="course-section">
      <h2 className="mb-6x fs-h2main">What our Student say?</h2>
      <div className="testimony bg-warning d-block d-md-flex align-items-start ">
        <img
          src="/images/travina-disch.png"
          alt="Testimony"
          titles="Testimony"
          className="testimony__img"
        />
        <div className="p-4">
          <p className="testimony__text mb-3">
            “This is so practical. I learned so much in 6 months. This is the
            one, guys.”
          </p>
          <span className="testimony__name">Travina Disch</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
