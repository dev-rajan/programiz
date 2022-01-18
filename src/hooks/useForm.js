import { useState } from "react";

const useForm = (validate) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    job: "",
    empId: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
    if (isLoading === true) {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      values.email.length > 0 &&
      values.empId.length > 0 &&
      values.firstName.length > 0 &&
      values.lastName.length > 0 &&
      values.job.length > 0
    ) {
      setIsLoading(true);
    }
    setErrors(validate(values));
  };

  const handleJoin = (e) => {
    e.preventDefault();
    if (values.email.length > 0) setIsLoading(true);
    setErrors(validate(values));
  };

  return {
    handleChange,
    handleJoin,
    handleSubmit,
    values,
    errors,
    isLoading,
    response,
    setResponse,
  };
};

export default useForm;
