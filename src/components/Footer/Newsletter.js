import React from "react";
import useForm from "hooks/useForm";
import { ContactApi } from "services";

import Loading from "containers/Landing/component/Quiz/Loading";
import validateInfo from "containers/Contact/Validation/ValidInfo";

const Newsletter = () => {
  const {
    handleChange,
    handleJoin,
    values,
    errors,
    isLoading,
    response,
    setResponse,
  } = useForm(validateInfo);

  const handleClick = async () => {
    if (!isLoading) {
      const body = {
        emailAddress: values.email,
      };

      try {
        const { data } = await ContactApi.post(body);

        if (data?.data?.message) {
          setResponse(true);
        }
      } catch (_error) {
        setResponse(true);
      }
    }
  };

  return (
    <div className="col-lg-4 offset-lg-1 pl-15x-lg mt-8x mt-0x-lg">
      <img
        src="/images/programiz-dark.svg"
        title="Programiz Pro Logo"
        alt="Programiz Pro Logo"
        className="mb-2x footer-logo"
        width="112px"
      />
      <p className="mb-5x">Join our newsletter for the latest updates.</p>
      <form onSubmit={handleJoin} className="contact-form" noValidate>
        <div className="input-group form-group mb-3">
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter Email address"
            aria-label="Enter email address"
            aria-describedby="basic-addon2"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
          <div className="input-group-append">
            {isLoading ? (
              <button
                type="button"
                className={`btn ${
                  response ? "btn-success text-light" : "btn--primary"
                } btn--block`}
              >
                {response && (
                  <img
                    src="/images/check-circle.svg"
                    alt="success"
                    title="success"
                  />
                )}
                {!response ? <Loading /> : " Joined"}
              </button>
            ) : (
              <button
                type="submit"
                onClick={handleClick}
                className="btn btn--primary btn--block"
              >
                Join
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
