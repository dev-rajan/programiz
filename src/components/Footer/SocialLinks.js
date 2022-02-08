import React from "react";

const SocialLinks = ({ url, icon, title }) => {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        className="footer__link px-2x mb-0x"
        alt={title}
        title={title}
      >
        {icon}
      </a>
    </li>
  );
};

export default SocialLinks;
