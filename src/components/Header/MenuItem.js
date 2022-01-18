import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuItem = ({
  url,
  title,
  id,
  selected,
  setSelected,
  idx,
  handleToggle,
}) => {
  const router = useRouter();
  const handleClick = () => {
    handleToggle();
    setSelected(idx);
    window.analytics.track(`${title} Clicked`, {
      source: "Homepage Navbar",
    });
  };

  return (
    <li
      onClick={handleClick}
      role="presentation"
      className={`nav-item py-2 py-md-0 ${
        title.toLowerCase() === "home" || "courses" ? "d-lg-none" : null
      } ${
        selected === id || router.route === "/" + title.toLowerCase()
          ? "active"
          : ""
      }`}
    >
      <Link href={url}>
        <a title={title} className="nav-link">
          {title}
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
