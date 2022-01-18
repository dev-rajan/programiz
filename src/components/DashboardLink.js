import { routeToDashboard } from "constants/app-routes";
import React from "react";

const DashboardLink = ({ children, href, ...props }) => {
  const hreflink = routeToDashboard(href);

  return (
    <a target="_blank" href={hreflink} {...props}>
      {children}
    </a>
  );
};

export default DashboardLink;
