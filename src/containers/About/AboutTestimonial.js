import React from "react";

const AboutTestimonial = ({ Item }) => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h2 className="mb-6x fs-h2main">{Item?.message?.title}</h2>
            <div className="testimony testimony--sm bg-primary d-flex flex-grow-1 flex-column">
              <div className="testimony__img">
                <img
                  src="/images/cto-punit.png"
                  alt="Testimony"
                  title="Testimony"
                />
              </div>
              <p className="testimony__text mb-4 color-white-main py-4 px-8x ">
                {Item?.message?.message}
              </p>
              <span className="testimony__name mt-auto color-white-main px-4 pb-4">
                {Item?.message?.position}
              </span>
            </div>
          </div>
          {/* <div className="col-md-5">
              <h2 className="mb-6x fs-h2main">{Item?.testimonial?.title}</h2>
              <div className="testimony testimony--sm bg-warning  d-flex flex-grow-1 flex-column">
                <div className="testimony__img testimony__img--large ">
                  <img
                    src="/images/mary-dippler.png"
                    alt="Testimony"
                    title="Testimony"
                  />
                </div>
                <p className="testimony__text mb-4  py-4 px-4 ">
                  {Item?.testimonial?.para}
                </p>
                <span className="testimony__name  px-4 pb-4 mt-auto">
                  {Item?.testimonial?.name}
                </span>
              </div>
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonial;
