import React, { useState } from "react";

import FooterLinks from "./FooterLinks";
import Newsletter from "./Newsletter";
import { Data, Social } from "./Data";
import SocialLinks from "./SocialLinks";

const Footers = ({ footerClass }) => {
  return (
    <>
      <footer className={`footer`}>
        <div className="container">
          <div className="row">
            <FooterLinks data={Data} />
            <Newsletter />
          </div>
        </div>
      </footer>
      <div className={`footer-bottom py-4x ${footerClass}`}>
        <div className="container">
          <div className="footer-bottom__content d-flex justify-content-between align-items-center">
            <p className="fs-body14 mb-0x text-center text-sm-left">
              Copyright Parewa Labs Pvt. Ltd.{" "}
              <span className="d-block d-sm-inline-block">
                All rights reserved.
              </span>
            </p>
            <div className="footer-social mt-6x mt-0x-sm">
              <ul className="d-flex mb-0x p-0">
                {Social?.map((a) => (
                  <SocialLinks key={a.id} {...a} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footers;
