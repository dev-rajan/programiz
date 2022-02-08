import React from "react";
import { FiArrowRight } from "react-icons/fi";

import { DASHBOARD_APP_ROUTES } from "constants/app-routes";
import DashboardLink from "components/DashboardLink";

const StartCoding = ({ title, btnTxt }) => {
  return (
    <section className="block-start-coding-today">
      <h2 className="mb-6x">{title}</h2>
      <DashboardLink
        title={btnTxt}
        href={DASHBOARD_APP_ROUTES.SIGNUP}
        className="btn btn--white btn--w-icon btn--sm code__button"
      >
        {btnTxt}
        <FiArrowRight className="ml-2x btn-icon" size={20} />
      </DashboardLink>
    </section>
  );
};

export default StartCoding;
