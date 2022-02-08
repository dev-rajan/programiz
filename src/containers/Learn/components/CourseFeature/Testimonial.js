import React from "react";

const Testimonial = () => {
  return (
    <div className="course-section">
      <h2 className="mb-6x fs-h2main">What our Student say?</h2>
      <div className="testimony bg-warning d-block d-md-flex align-items-start mb-8x">
        <img
          src="/images/travina-disch.png"
          alt="Testimony"
          title="Testimony"
          className="testimony__img"
        />
        <div className="p-8x">
          <p className="testimony__text testimony__text--secondary mb-3">
            “This is so practical. I learned so much in 6 months. This is the
            one, guys.”
          </p>
          <span className="testimony__name testimony__name--secondary">
            Travina Disch
          </span>
        </div>
      </div>
      <div className="testimony d-block bg-blue d-md-flex align-items-start mb-8x">
        <img
          src="/images/Mary-Dippler.png"
          alt="Testimony"
          title="Testimony"
          className="testimony__img"
        />
        <div className="p-8x">
          <p className="testimony__text testimony__text--secondary mb-3">
            “I like how interactive the course is. The content is super-easy to
            understand. 5 Stars.”
          </p>
          <span className="testimony__name testimony__name--secondary">
            Mary Dippler
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
