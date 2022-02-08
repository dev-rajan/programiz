import React, { useState } from "react";

import Loading from "containers/Landing/component/Quiz/Loading";
import validateInfo from "containers/Contact/Validation/ValidInfo";
import { notifyEmail } from "services/newsLetterApi";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const [errors, setErrors] = useState({});

  const handleClick = async (e) => {
    e?.preventDefault?.();
    setSubmissionError(false);

    const submissionErrors = validateInfo({ email });

    if (submissionErrors?.email) {
      setErrors(submissionErrors);

      return;
    }

    if (!isLoading) {
      setIsLoading(true);
      try {
        const res = await notifyEmail(email);

        if (res) {
          setSuccess(true);
        }
      } catch (_error) {
        setSuccess(false);
        setSubmissionError(true);
      }
    }

    setIsLoading(false);
  };

  const onChange = (e) => {
    setErrors({});
    setSubmissionError(false);
    setEmail(e.target.value);
  };

  return (
    <div className="col-lg-4 offset-lg-1 pl-15x-lg mt-8x mt-0x-lg">
      <img
        src="/images/logo-programiz-pro.svg"
        title="Programiz Pro Logo"
        alt="Programiz Pro Logo"
        className="mb-2x footer-logo"
        width="112px"
      />
      <p className="mb-5x fw-500">
        {success
          ? "Thank you for subscribing!"
          : "Join our newsletter for the latest updates."}
      </p>
      {!success && (
        <form onSubmit={handleClick} className="contact-form" noValidate>
          <div className="input-group form-group mb-3">
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter Email address"
              aria-label="Enter email address"
              aria-describedby="basic-addon2"
              value={email}
              onChange={onChange}
            />
            {errors.email && <p>{errors.email}</p>}
            {submissionError && (
              <p>Couldn't join newsletter. Please try again later!</p>
            )}
            <div className="input-group-append">
              {isLoading ? (
                <button
                  type="button"
                  className={`btn ${
                    success ? "btn-success text-light" : "btn--primary"
                  } btn--block newsletter-btn`}
                >
                  {success && (
                    <img
                      src="/images/check-circle.svg"
                      alt="success"
                      title="success"
                    />
                  )}
                  {!success ? <Loading /> : " Joined"}
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleClick}
                  disabled={!email}
                  className="btn btn--primary btn--block newsletter-btn"
                >
                  Join
                </button>
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
