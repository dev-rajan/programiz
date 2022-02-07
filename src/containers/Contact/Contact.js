import React, { useEffect, useState } from "react";

import useForm from "hooks/useForm";
import { FiChevronDown } from "react-icons/fi";

import { ContactApi } from "services";
import Loading from "containers/Landing/component/Quiz/Loading";
import validate from "containers/Contact/Validation/ValidInfo";

const ContactApp = () => {
  const {
    handleChange,
    handleContact,
    setValues,
    values,
    errors,
    setErrors,
    isLoading,
    response,
    setResponse,
  } = useForm(validate);

  const [queryTypes, setQueryTypes] = useState("");

  useEffect(async () => {
    setQueryTypes(await ContactApi.getFeed());
  }, []);

  const handleClick = async () => {
    if (!isLoading) {
      const body = {
        name: values.name,
        email: values.email,
        message: values.message,
        queryType: values.queryType,
      };

      try {
        const { data } = await ContactApi.postFeed(body);

        if (data?.data?.message) {
          setResponse(true);
          setErrors(false);
          setValues({
            name: "",
            message: "",
            queryType: "",
            email: "",
          });
        }
      } catch (_error) {
        setResponse(false);
      }
    }
  };

  useEffect(() => {
    (function () {
      const selectboxPlaceholderOptions = document.querySelectorAll(
        "select option.placeholder"
      );

      function selectBoxChange(event) {
        const select = event.srcElement;
        const placeholderOption =
          event.srcElement.querySelector("option.placeholder");

        if (!placeholderOption) return;

        if (!select.value || select.value === "") {
          placeholderOption.disabled = true;
          placeholderOption.textContent =
            placeholderOption.dataset["placeholderText"];
        } else {
          placeholderOption.disabled = false;
          placeholderOption.textContent = "";
        }
      }

      for (let i = 0; i < selectboxPlaceholderOptions.length; i++) {
        const option = selectboxPlaceholderOptions[i];
        const select = option.parentElement;

        option.value = "";
        option.disabled = true;
        option.dataset["placeholderText"] = option.textContent;
        select.addEventListener("change", selectBoxChange);
      }
    })();
  }, []);

  return (
    <>
      <div className="contact-page">
        <div className="contact__header inner__header ">
          <div className="container">
            <h2 className="color-white-main text-center">Contact Us</h2>
          </div>
        </div>
        <div className="contact__content section-padding">
          <div className="container">
            <h2 className="text-center">Get in touch with us</h2>
            <div className="row">
              <div className="col-md-8 mx-auto">
                <form
                  onSubmit={handleContact}
                  className="contact-form"
                  noValidate
                >
                  <div className="row">
                    <div className="form-group mb-6x col-md-6">
                      <label htmlFor="firstName">Full Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={values.name}
                        onChange={handleChange}
                      />
                      {errors.name && <p>{errors.name}</p>}
                    </div>
                    <div className="form-group mb-6x col-md-6">
                      <label htmlFor="email">Email</label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={values.email}
                        onChange={handleChange}
                      />
                      {errors.email && <p>{errors.email}</p>}
                    </div>
                  </div>
                  <div className="form-group mb-6x">
                    <label htmlFor="empId">Query related to:</label>
                    <div className="input-w-append">
                      <select
                        value={values.queryType}
                        name="queryType"
                        className="custom-select"
                        id="employeeNumber"
                        onChange={handleChange}
                      >
                        <option className="placeholder">Select Query</option>
                        {queryTypes?.data?.data?.map((a) => (
                          <option key={a.id} value={`${a.id}`}>
                            {a.title}
                          </option>
                        ))}
                      </select>
                      <div className="input-append">
                        <FiChevronDown size={26} />
                      </div>
                    </div>
                    {errors.queryType && <p>{errors.queryType}</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactMessage">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      id="contactMessage"
                      rows="3"
                      placeholder="Write your message here..."
                      value={values.message}
                      onChange={handleChange}
                    />
                    {errors.message && <p>{errors.message}</p>}
                  </div>
                  <div className="text-right">
                    {isLoading ? (
                      <button
                        type="button"
                        className={`btn ${
                          response ? "btn-success text-light" : "btn--primary"
                        } btn-submit mt-8x`}
                      >
                        {response && (
                          <img
                            src="/images/check-circle.svg"
                            alt="success"
                            title="success"
                          />
                        )}
                        {!response ? <Loading /> : " Message Sent"}
                      </button>
                    ) : (
                      <button
                        type="submit"
                        onClick={handleClick}
                        className="btn btn--primary btn--sm btn-submit mt-8x"
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactApp;
