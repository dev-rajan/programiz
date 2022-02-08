import React from "react";
import { FiArrowRight } from "react-icons/fi";

import { DASHBOARD_APP_ROUTES } from "constants/app-routes";
import DashboardLink from "components/DashboardLink";
import Testimonials from "containers/Landing/component/Testimonial";
import Form from "./Form";

const data = {
  checklist: [
    {
      id: 1,
      title: "All Courses Unlocked",
    },
    {
      id: 2,
      title: "Interactive Challenges",
    },
    {
      id: 3,
      title: "Get Certified",
    },
    {
      id: 4,
      title: "Community Discord Access",
    },
  ],
};

const Checklist = ({ title }) => {
  return (
    <li className="d-flex align-items-start mb-4x">
      <img
        src="/images/icon-tick.svg"
        className="mr-3x"
        alt="Check"
        title="Check"
      />
      {title}
    </li>
  );
};

const Contact = () => {
  return (
    <>
      {/* Hero section */}
      <section className="hero-inner hero-contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-5 d-flex align-items-center">
              <div className="hero-inner__content mb-8x mb-0x-sm">
                <h2 className="hero-inner__title mb-4x text-center text-lg-left">
                  PRO for Teams
                </h2>
                <div className="hero-inner__desc text-white-shade">
                  <p className="text-white-shade">
                    Upgrade your team&apos;s skill with Programiz.pro.
                  </p>
                  <p className="mb-4 text-white-shade">
                    Reduce training time and train your team with the best
                    interactive tool for learning how to code.
                  </p>
                  <ul className="pl-0x text-white-shade">
                    {data?.checklist?.map((a) => (
                      <Checklist {...a} key={a.id} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-7">
              <Form />
            </div>
          </div>
        </div>
      </section>

      {/* <Testimonials /> */}

      <section className="block-start-coding-today">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <h2 className="fs-h2main mb-6x mb-0x-sm mr-0x mr-8x-sm">
              Still in doubt? Try out our 7-day trial for FREE!
            </h2>
            <DashboardLink
              title="Sign Up"
              href={DASHBOARD_APP_ROUTES.SIGNUP}
              className="btn btn--white btn--w-icon btn--sm"
            >
              Sign Up <FiArrowRight className="ml-2x btn-icon" size={20} />
            </DashboardLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
