import React from "react";
import { FiArrowRight } from "react-icons/fi";

import DashboardLink from "components/DashboardLink";
import { DASHBOARD_APP_ROUTES } from "constants/app-routes";

const Codings = () => (
  <section className="block-start-coding-today">
    <h2 className="mb-6x">Start Coding TODAY!</h2>
    <DashboardLink
      title="Sign Up"
      href={DASHBOARD_APP_ROUTES.SIGNUP}
      className="btn btn--white btn--w-icon btn--sm"
    >
      Sign Up
      <FiArrowRight className="ml-2x btn-icon" size={20} />
    </DashboardLink>
  </section>
);

export default Codings;
