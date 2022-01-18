import React from "react";
import StartCoding from "containers/About/StartCoding";
import ProCard from "./Cards/ProCard";
import Enterprise from "./Cards/Enterprise";
import Faq from "./Faq/Faq";
import { List } from "./data";

const Pricing = ({ subscriptions }) => (
  <>
    {/* Hero section */}
    <section className="hero-inner hero-pricing">
      <div className="container">
        <div className="hero-inner__content text-center">
          <h2 className="hero-inner__title mb-4x text-white">
            Choose the best plan for you.
          </h2>
          <div className="hero-inner__desc text-white-shade">
            <p>
              No multiple-tier plans, no locked features. Gain access to
              everything!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="pricing-detail">
      <div className="container">
        <div className="row justify-content-center pricing-cards">
          <ProCard subscriptions={subscriptions} Items={List?.pro} />

          <Enterprise Items={List?.enterprise} />
        </div>
        <Faq Items={List?.faq} />
      </div>
    </section>
    <StartCoding title="Start Coding TODAY!" btnTxt="Sign Up" />
  </>
);

export default Pricing;
