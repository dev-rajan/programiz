import React from "react";

const RouteLink = ({ title, url, target }) => {
  return (
    <li>
      <a href={url} className="footer__link" target={target}>
        {title}
      </a>
    </li>
  );
};

export default RouteLink;
