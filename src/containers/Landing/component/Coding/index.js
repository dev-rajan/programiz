import React from "react";
import { FiArrowRight } from "react-icons/fi";

import DashboardLink from "components/DashboardLink";
import { DASHBOARD_APP_ROUTES } from "constants/app-routes";

const Codings = () => (
  <section className="start-coding-section">
    <div className="container">
      <div className="row">
        <div className="start-coding-illus">
          {/* <img src={IMAGES.startCoding} alt="Start Coding" /> */}
          <img
            src="images/start-coding.png"
            alt="Start Coding"
            title="Start Coding"
          />
        </div>
        <div className="col-md-6 offset-md-6">
          <h2 className="mb-6x">
            Start Coding <br />
            TODAY!
          </h2>
          <DashboardLink
            title="Start Free Trial"
            href={DASHBOARD_APP_ROUTES.SIGNUP}
            className="btn btn--white btn--sm code__btn btn--w-icon px-9x d-flex justify-content-between d-md-inline-flex "
          >
            <span>Sign Up</span>
            <FiArrowRight className="btn-icon ml-2x" size={20} />
          </DashboardLink>
        </div>
      </div>
    </div>
  </section>
);

export default Codings;
