import React from "react";
import { routeToDashboard } from "constants/app-routes";
import Link from "next/link";

const DashboardLink = ({ children, href, target, ...props }) => {
  const hreflink = routeToDashboard(href);

  return (
    <a target={target} href={hreflink} {...props}>
      {children}
    </a>
  );
};

export default DashboardLink;

export const DashboardRoute = ({ href, children, ...props }) => {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};
