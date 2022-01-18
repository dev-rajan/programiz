import React from "react";
import { Button } from "react-distributed-forms";

const Success = ({ title, message, btnText, extraClass, arrow }) => (
  <div className="text-center answer-success ">
    <div className="image">
      <img src="/images/success-quiz.png" />
    </div>
    <h3 className={`mb-3 mt-5 ${extraClass}`}>{title}</h3>
    <p className={`w-75 mx-auto mb-4 ${extraClass}`}>{message}</p>
    <Button
      className="btn btn--primary btn--sm d-flex mx-auto justify-content-center"
      name="next"
    >
      {btnText} {arrow}
    </Button>
  </div>
);

export default Success;
