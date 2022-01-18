import React from "react";
import { FiArrowRight } from "react-icons/fi";

const CardArrow = () => (
  <div className="card card-filled border py-6x">
    <div className="card__arrow" />
    <p className="d-flex align-items-center mb-3x">
      <img
        src="/images/emoji-books.svg"
        title="Emoji Eyeglass"
        alt="Emoji Eyeglass"
        className="icon-emoji--sm mr-2x"
      />
      Ongoing course part of enrolled learning path:
    </p>
    <h3 className="mb-1x">Become Java Job-ready</h3>
    <span>4 courses</span> •
    <a href="#" className="btn btn--link btn--w-icon p-0x">
      View learning path
      <FiArrowRight size={18} className="ml-2x" />
    </a>
  </div>
);

export default CardArrow;
