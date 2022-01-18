import React from "react";

const Testimonial = () => {
  return (
    <section className="py__section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-5x">Testimonials</h2>
            <div className="testimony bg-primary mb-8x">
              <div className="testimony__img">
                <img
                  src="/images/testimony-mac.jpg"
                  alt="Testimony"
                  title="Testimony"
                />
              </div>
              <div className="testimony__body color-white-main">
                <p className="testimony__text mb-10x">
                  “I’ve been teaching English for 25 years. I wanted to learn
                  coding but I had a rough time before discovering Programiz. I
                  highly recommend these guys!”
                </p>
                <span className="testimony__name">Mac Johnson</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="testimony bg-warning d-block d-md-flexalign-items-start mb-8x">
              <img
                src="/images/testimony-travina.jpg"
                alt="Testimony"
                title="Testimony"
              />

              <div className="px-8x py-10x">
                <p className="testimony__text mb-10x">
                  “This is so practical and I learned so much in 6 months!
                  Definitely beats sitting passively in my CS class.”
                </p>
                <span className="testimony__name">Travina Disch</span>
              </div>
            </div>
            <div className="testimony bg-text d-block d-md-flex align-items-start">
              <img
                src="/images/testimony-mary.jpg"
                alt="Testimony"
                title="Testimony"
              />
              <div className="px-8x py-10x color-white-main">
                <p className="testimony__text mb-10x">
                  “I like how interactive the course is. The content is
                  super-easy to understand. 5 Stars.”
                </p>
                <span className="testimony__name">Mary Dippler</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
