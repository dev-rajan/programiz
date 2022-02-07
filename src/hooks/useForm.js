import { useState } from "react";

const useForm = (validate) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const [values, setValues] = useState({
    name: "",
    message: "",
    queryType: "",
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
    if (value.length > 0) {
      setErrors(false);
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

  const handleContact = (e) => {
    e.preventDefault();
    if (
      values.email.length > 0 &&
      values.name.length > 0 &&
      values.message.length > 0 &&
      values.queryType.length > 0
    ) {
      setIsLoading(true);
    } else setErrors(validate(values));
  };

  return {
    handleChange,
    handleContact,
    handleJoin,
    handleSubmit,
    setValues,
    values,
    errors,
    setErrors,
    isLoading,
    response,
    setResponse,
  };
};

export default useForm;
