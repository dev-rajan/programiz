import React from "react";
import { data } from "./Data";

const Testimonials = () => (
  <section className="testimonial-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-end">
          <h2 className="mb-4">{data?.title}</h2>
          <div className="testimony testimony--large bg-primary mb-4 mb-lg-0 d-flex flex-column">
            <div className="testimony__img testimony__img--large">
              <img src={data?.card1?.image} alt="Testimony" title="Testimony" />
            </div>
            <div className="testimony__body color-white-main flex-grow-1 d-flex flex-column">
              <p className="testimony__text mb-10x">“{data?.card1?.content}”</p>
              <div className="testimony__name mt-auto ">
                {data?.card1?.name}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-end">
          <div className="testimony bg-warning d-lg-flex d-block align-items-start mb-8x">
            <img
              src={data?.card2?.image}
              alt="Testimony"
              title="Testimony"
              className="testimony__img"
            />
            <div className="px-8x pt-14x pb-10x color">
              <p className="testimony__text mb-3">“{data?.card2?.content}”</p>
              <div className="testimony__name mt-5">{data?.card2?.name}</div>
            </div>
          </div>
          <div className="testimony bg-text d-lg-flex d-block align-items-start">
            <img
              src={data?.card3?.image}
              alt="Testimony"
              title="Testimony"
              className="testimony__img"
            />
            <div className="px-8x pt-14x pb-10x color-white-main">
              <p className="testimony__text mb-14x">“{data?.card3?.content}”</p>
              <div className="testimony__name mt-5">{data?.card3?.name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
