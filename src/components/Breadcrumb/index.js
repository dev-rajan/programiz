import React from "react";

const Breadcrumb = () => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb border-bottom">
      <li className="breadcrumb-item">
        <a href="#">Python Learning Path</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Python Basics Course
      </li>
    </ol>
  </nav>
);

export default Breadcrumb;
