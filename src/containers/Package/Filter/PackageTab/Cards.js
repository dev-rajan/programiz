import React from "react";
import { useRouter } from "next/router";

const Cards = ({ logo, category, title, link }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      onKeyPress={() => {}}
      tabIndex={-1}
      className="col-xl-4 col-lg-6 col-md-6 mb-4x px-0 px-md-3 "
    >
      <div className="card card--border card--link card-course">
        <div className="card__body order-md-1 order-0">
          <div className="course__image text-center ">
            <img
              src={
                logo?.length !== 0 && logo !== null
                  ? logo
                  : "/images/noimage.png"
              }
              alt="Course"
              title="Course"
            />
          </div>
        </div>
        <div className="order-md-0 order-1 p-3 d-flex flex-column flex-grow-1">
          <h3 className="card__title">{title}</h3>
          <p className="text-tiny mb-0x  order-md-3 order-3 mt-auto text-dark">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
