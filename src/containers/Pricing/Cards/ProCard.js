import React, { useMemo, useState } from "react";

import List from "./List";

const getSaveValue = (monthlyPrice, yearlyPrice) => {
  return (
    ((((monthlyPrice * 12 - yearlyPrice) / (monthlyPrice * 12)) * 100).toFixed(
      2
    ) /
      100) *
    yearlyPrice
  ).toFixed(2);
};

const ProCard = ({ Items, subscriptions }) => {
  const [yearlySelected, setYearlySelected] = useState(true);
  const [locale, setLocale] = useState("USD");

  const monthlyData = useMemo(() => {
    return subscriptions.find(
      ({ billing_type: billingType }) => billingType === "month"
    );
  }, [subscriptions]);

  const yearlyData = useMemo(() => {
    return subscriptions.find(
      ({ billing_type: billingType }) => billingType === "year"
    );
  }, [subscriptions]);

  const handleSubscriptionToggle = () => {
    setYearlySelected((prev) => !prev);
  };

  const handleSubmit = () => {};

  const yearlyPrice = yearlyData?.recurring_price?.[locale];
  const monthlyPrice = monthlyData?.recurring_price?.[locale];
  const saveValue = getSaveValue(monthlyPrice, yearlyPrice);

  return (
    <div className="col-lg-4 col-sm-6 mb-8x mb-0x-sm pr-6x">
      <div className="card  pricing__card">
        {yearlySelected ? (
          <>
            <div className="react-tabs mb-6x">
              <div className="react-tabs__tab-list">
                <div className="react-tabs__tab react-tabs__tab--selected">
                  Yearly
                </div>
                <div
                  className="react-tabs__tab"
                  onClick={handleSubscriptionToggle}
                  role="presentation"
                  onKeyDown={() => {}}
                >
                  Monthly
                </div>
              </div>
            </div>
            <h4 className="color-primary">PRO</h4>
            <div className="d-flex align-items-center">
              <span className="fs-h1 mr-2x main-price">
                ${yearlyData?.recurring_price?.[locale]}
              </span>
              <span className="text-success">Save ${saveValue}</span>
            </div>
            <p>per month, billed yearly</p>
          </>
        ) : (
          <>
            <div className="react-tabs mb-6x">
              <div className="react-tabs__tab-list">
                <div
                  className="react-tabs__tab"
                  onClick={handleSubscriptionToggle}
                  role="presentation"
                  onKeyDown={() => {}}
                >
                  Yearly
                </div>
                <div className="react-tabs__tab react-tabs__tab--selected">
                  Monthly
                </div>
              </div>
            </div>
            <h4 className="color-primary">PRO</h4>
            <div className="d-flex align-items-center">
              <span className="fs-h1 mr-2x">
                ${monthlyData?.recurring_price?.[locale]}
              </span>
              <span className="text-success" />
            </div>
            <p>per month, billed monthly</p>
          </>
        )}
        <hr className="my-8x" />
        <ul>
          {Items?.map((a) => (
            <List key={a.id} {...a} />
          ))}
        </ul>
        {/* <hr /> */}
        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn--primary btn--sm btn--block mt-2"
        >
          Get PRO Now!
        </button>
      </div>
    </div>
  );
};

export default ProCard;
