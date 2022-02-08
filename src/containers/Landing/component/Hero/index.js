import React from "react";

const Heros = () => (
  <section className="hero">
    <div className="container">
      <div className="hero__content">
        <h2 className="hero__title">
          learn to code & create a job winning portfolio.
        </h2>
        <div className="hero__image ml-n3">
          {/* <img src={IMAGES.heroImg} alt="Hero Img" /> */}
          <img
            src="images/hero-img.svg"
            className="d-none d-lg-block img-fluid"
            alt="Learn to code & create a job winning portfolio."
            title="Learn to code & create a job winning portfolio."
          />
          <img
            className="d-block d-lg-none banner__image"
            src="images/banner-mobile.svg"
            alt="Learn to code & create a job winning portfolio."
            title="Learn to code & create a job winning portfolio."
          />
        </div>
        <div className="hero__desc hero__toolset py-md-0 mr-5 mr-md-0">
          <ul>
            <li>
              {/* <img src="{IMAGES.iconSelfPaced}" alt="Self-paced Courses" /> */}
              <img
                src="images/icon-self-paced.svg"
                alt="Self-paced Courses"
                title="Self-paced Courses"
              />

              <div>
                <h3>Self-paced Courses</h3>
                <p className="w-60">
                  Learn at your own time; no deadlines or restrictions.
                </p>
              </div>
            </li>
            <li>
              {/* <img
                    src={IMAGES.iconInteractiveTools}
                    alt="Interactive Toolset"
                  /> */}
              <img
                src="images/icon-interactive-toolset.svg"
                alt="Interactive Toolset"
                title="Interactive Toolset"
              />
              <div>
                <h3>Interactive Toolset</h3>
                <p className="w-60">
                  Learn effectively with our intuitive courses.
                </p>
              </div>
            </li>
            <li>
              {/* <img
                    src={IMAGES.iconCertification}
                    alt="Earn Certification"
                  /> */}
              <img
                src="images/icon-earn-certification.svg"
                alt="Earn Certification"
                title="Earn Certification"
              />
              <div>
                <h3>Earn Certification</h3>
                <p className="w-60">
                  Complete Learning paths and earn Certifications.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero__search" />
    </div>
  </section>
);

export default Heros;
