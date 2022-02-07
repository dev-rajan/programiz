import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Callout = () => (
  <div className="callout">
    <div className="row align-items-center">
      <div className="col-md-8">
        <div className="d-flex align-items-center">
          <h3 className="callout__title color-white-main">
            Unlock all Courses by starting your FREE trial.
            <br />
            Get started NOW!
          </h3>
        </div>
      </div>
      <div className="col-md-4">
        <a
          href="#"
          className="btn btn--white btn--w-icon text-bold callout__action"
        >
          Start Free Trial
          <FiArrowRight className="btn-icon ml-5x" />
        </a>
      </div>
    </div>
  </div>
);

export default Callout;
