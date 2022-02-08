import React from "react";

const Images = ({ tab }) => (
  <figure className="image m-0 text-center">
    <img src={tab?.image} alt="Browser" title="Browser" />
  </figure>
);

export default Images;

export const MobileImage = ({ image }) => (
  <figure className="image m-0 w-100">
    <img src={image} alt="Browser" title="Browser" />
  </figure>
);
