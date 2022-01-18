import React from "react";

const DropItem = ({ url, title }) => {
  return (
    <li className="py-3 py-md-0">
      <a className="dropdown-item" href={url}>
        {title}
      </a>
    </li>
  );
};

export default DropItem;
