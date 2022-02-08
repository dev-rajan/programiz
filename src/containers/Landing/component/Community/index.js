import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Communitys = () => (
  <section className="community py-section">
    <div className="container">
      <div className="community__block">
        <div className="d-block d-md-flex no-gutters align-items-center">
          <div className="col-md-6">
            <div className=" text-white  community__text ">
              With PRO, get access to our Discord Community.
            </div>
          </div>
          <div className="col-md-6 text-right">
            <img
              className="w-100"
              src="/images/community.png"
              alt="community"
              title="community"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Communitys;
