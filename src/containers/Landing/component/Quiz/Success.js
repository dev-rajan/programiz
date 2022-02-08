import React, { useEffect, useState } from "react";
import { Button } from "react-distributed-forms";
import { Fragment } from "react/cjs/react.production.min";

function useDelayUnmount(isMounted, delayTime) {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isMounted && !showDiv) {
      setShowDiv(true);
    } else if (!isMounted && showDiv) {
      timeoutId = setTimeout(() => setShowDiv(false), delayTime); //delay our unmount
    }

    return () => clearTimeout(timeoutId); // cleanup mechanism for effects , the use of setTimeout generate a sideEffect
  }, [isMounted, delayTime, showDiv]);

  return showDiv;
}

const Success = ({ title, message, btnText, extraClass, arrow, isMounted }) => {
  const showDiv = useDelayUnmount(isMounted, 200);
  const mountedStyle = { animation: "inAnimation 200ms ease-in" };

  return (
    <Fragment>
      {showDiv && (
        <div style={mountedStyle} className="text-center answer-success ">
          <div className="image">
            <img src="/images/success-quiz.png" alt={title} />
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
      )}
    </Fragment>
  );
};

export default Success;
