import React, { useState } from "react";

import StartCoding from "containers/About/StartCoding";
import { Data, List } from "./Data";
import HeroSection from "containers/About/HeroSection";
import Tab from "./Tabs/Tab";
import TabContent from "./Tabs/TabContent";

const FAQ = () => {
  const [isActive, setIsActive] = useState(1);

  return (
    <>
      <div className="faq__page">
        <HeroSection title={Data.title} extraClass="hero-faq" />

        <div className="container ">
          <div className="row ">
            <div className="pt-14x border-right col-lg-3 d-none d-lg-block">
              <div className="sticky-top">
                <ul className="navbar-nav flex-column">
                  {Data?.list?.map((a) => (
                    <Tab
                      key={a.id}
                      {...a}
                      isActive={isActive}
                      setIsActive={setIsActive}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-9 faq__detail">
              <TabContent Items={List} />
            </div>
          </div>
        </div>
      </div>

      <StartCoding title="Start Coding TODAY!" btnTxt="Sign Up" />
    </>
  );
};

export default FAQ;
