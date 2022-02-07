export default function validateInfo(values) {
  const errors = {};

  if (!values?.name?.trim()) {
    errors.name = "Name is required";
  }

  if (!values?.firstName?.trim()) {
    errors.firstName = "First Name required";
  }

  if (!values?.lastName?.trim()) {
    errors.lastName = "Last Name required";
  }

  if (!values?.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Please enter a valid email.";
  }

  if (!values?.job) {
    errors.job = "Job Title required";
  }

  if (!values?.empId) {
    errors.empId = "Number of employees required";
  }

  if (!values?.queryType) {
    errors.queryType = "Query is required";
  }

  if (!values?.message) {
    errors.message = "Message is required";
  }

  return errors;
}
