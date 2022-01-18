import React from "react";
import Link from "next/link";

const RouteLink = ({ title, url }) => {
  return (
    <li>
      <Link href={url}>
        <a title={title} className="footer__link">
          {title}
        </a>
      </Link>
    </li>
  );
};

export default RouteLink;
