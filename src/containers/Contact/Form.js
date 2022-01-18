import React from "react";
import useForm from "hooks/useForm";
import { FiChevronDown } from "react-icons/fi";

import { ContactApi } from "services";
import Loading from "containers/Landing/component/Quiz/Loading";
import validate from "containers/Contact/Validation/ValidInfo";

const Form = () => {
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    isLoading,
    response,
    setResponse,
  } = useForm(validate);

  const handleClick = async () => {
    if (!isLoading) {
      const body = {
        firstName: values.firstName,
        lastName: values.lastName,
        emailAddress: values.email,
        jobTitle: values.job,
        numberOfEmployees: values.empId,
      };

      try {
        const { data } = await ContactApi.post(body);

        if (data?.data?.message) {
          setResponse(true);
        }
      } catch (_error) {
        setResponse(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <div className="row">
        <div className="form-group mb-6x col-md-6">
          <label htmlFor="firstName">First Name</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div className="form-group mb-6x col-md-6">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
      </div>
      <div className="form-group mb-6x">
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Enter your business/company email address"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className="row">
        <div className="form-group mb-6x col-md-6">
          <label htmlFor="phone">Phone (Optional)</label>
          <input
            className="form-control"
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
        <div className="form-group mb-6x col-md-6">
          <label htmlFor="job">Job Title</label>
          <input
            className="form-control"
            type="text"
            name="job"
            placeholder="Enter current job title"
            value={values.job}
            onChange={handleChange}
          />
          {errors.job && <p>{errors.job}</p>}
        </div>
      </div>
      <div className="form-group mb-0">
        <label htmlFor="empId">No. of Employees</label>
        <div className="input-w-append">
          <select
            name="empId"
            className="custom-select"
            id="employeeNumber"
            onChange={handleChange}
          >
            <option defaultValue="1 to 5">1 to 5</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div className="input-append">
            <FiChevronDown size={26} />
          </div>
        </div>
        {errors.empId && <p>{errors.empId}</p>}
      </div>
      {isLoading ? (
        <button
          type="button"
          className={`btn ${
            response ? "btn-success text-light" : "btn--primary"
          } btn--block mt-8x`}
        >
          {response && (
            <img src="/images/check-circle.svg" alt="success" title="success" />
          )}
          {!response ? <Loading /> : " Submitted Successfully"}
        </button>
      ) : (
        <button
          type="submit"
          onClick={handleClick}
          className="btn btn--primary btn--block mt-8x"
        >
          Contact Us
        </button>
      )}
    </form>
  );
};

export default Form;
