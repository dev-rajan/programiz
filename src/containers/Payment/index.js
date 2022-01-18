import React from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiChevronDown,
  FiXCircle,
  FiAlertCircle,
} from "react-icons/fi";

const Payment = () => (
  <div className="payment-page">
    <div className="payment__header">
      <div className="container">
        <div className="btn btn--link btn--w-icon">
          <FiArrowLeft className="btn-icon mr-2x" size={20} />
          Back
        </div>
        <h2 className="payment__title">
          Take your account to a whole new level with Programiz Pro.
        </h2>
      </div>
    </div>
    <div className="payment__content">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mb-4x mb-md-0x">
            <div className="payment__plan payment-card">
              <h2 className="fs-h2main mb-4x">Choose a Plan</h2>
              <form>
                <div className="form-group mb-3">
                  <label className="sr-only" htmlFor="PaymentPlan">
                    Options
                  </label>
                  <div className="input-w-append">
                    <select className="custom-select" id="PaymentPlan">
                      <option selected>
                        Pro Annual - $15 a month - Save $60
                      </option>
                      <option value="1">Free</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <div className="input-append">
                      <FiChevronDown size={20} color={black} />
                    </div>
                  </div>
                  <small id="emailHelp" className="form-text text-muted">
                    * Membership will begin after 7 days. You can cancel
                    anytime.
                  </small>
                </div>
              </form>
              <h2 className="fs-h2main mb-4x">Review Payment Details</h2>
              <div className="d-flex justify-content-between align-items-center mb-4x">
                <span>Amount</span>
                <div className="font-weight-bold">$180.00</div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>Discount</span>
                <div className="font-weight-bold">-$180.00</div>
              </div>
              <hr className="my-4x" />
              <div className="d-flex justify-content-between align-items-center">
                <span>Amount</span>
                <div className="font-weight-bold">0.00 *</div>
              </div>
              <p className="alert alert-primary mt-4x">
                A recurring yearly charge of $120 will automatically apply and
                start on October 3, 2021.
              </p>
              <p>You may cancel at any time in your payment settings.</p>
              <p>
                By clicking on the &apos;Start 7 Day Free Trial&apos; button you
                agree to our
                <Link href="/#">
                  <a>Terms of Service</a>
                </Link>
                and authorize this recurring charge. To learn more about our
                services view our
                <Link href="/#">
                  <a>FAQ</a>
                </Link>
                page.
              </p>
            </div>
          </div>
          <div className="col-md-7">
            <div className="payment__plan payment-card">
              <h2 className="fs-h2main mb-4x">Payment Method</h2>
              <form>
                <div className="card-selection mb-6x">
                  <div className="custom-control custom-radio custom-control-inline mr-8x">
                    <input
                      type="radio"
                      id="credit-card"
                      name="card-type"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="credit-card"
                    >
                      Credit/Debit Card
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="paypal"
                      name="card-type"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label" htmlFor="paypal">
                      Paypal
                    </label>
                  </div>
                </div>
                <div className="card-detail">
                  <div className="card-detail__item">
                    <div className="row form-group form-group--error">
                      <label className="col-md-3 mb-2x mb-0x-md">
                        Card Number
                      </label>
                      <div className="col-md-9">
                        <div className="input-w-prepend">
                          <div className="input-prepend">
                            {/* <img
                                  src={IMAGES.iconCreditCard}
                                  alt="Credit Card"
                                /> */}
                          </div>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="xxxx-xxxx-xxxx-xxxx"
                          />
                        </div>
                        <span id="emailHelp" className="form-text d-flex mt-2x">
                          <FiAlertCircle size={16} className="mr-2x" />
                          Please enter 16 digit credit card number.
                        </span>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-md-3 mb-2x mb-0x-md">Name</label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Cardholder Name"
                        />
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-md-3 mb-2x mb-0x-md">Expiry</label>
                      <div className="col-md-2 col-5">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="MM"
                        />
                      </div>
                      <div className="col-md-3 col-6">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="YYYY"
                        />
                      </div>
                      <div className="col-md-4 mt-4x mt-0x-md">
                        <div className="row form-group mb-0x">
                          <label className="col-md-5 mb-2x mb-0x-md">CVV</label>
                          <div className="col-md-7 col-6">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="CVV"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link href="/#">
                      <a className="btn btn--link d-inline-block mb-4x mt-2x">
                        Add Coupon
                      </a>
                    </Link>
                    <button
                      type="submit"
                      className="btn btn--primary btn--block"
                    >
                      Start 7 Day Free Trial
                    </button>
                    <div className="answer-status answer-status--incorrect mt-4x">
                      <div className="answer-status__icon">
                        <FiXCircle />
                      </div>
                      <div className="answer-status__body">
                        <p className="m-0x text-danger">
                          The credit card that you provided was declined. Please
                          try paying with another card.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center card-detail__item">
                    <p>
                      <small>
                        This order process is conducted by our online reseller
                        &amp; Merchant of Record, Paddle.com, who also handle
                        order related inquiries and returns.
                      </small>
                    </p>
                    <p>
                      <small>
                        Your data will be shared wil Seller for product
                        fulfillment, Paddle.com Inc, 2811 Ditmors Blvd #1071,
                        Astoria, NY 11105-1803
                      </small>
                    </p>
                    <div className="payment-footer">
                      <Link href="/#">
                        <a>Terms &amp; Conditions</a>
                      </Link>
                      <Link href="/#">
                        <a>Privacy Policy</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Payment;
