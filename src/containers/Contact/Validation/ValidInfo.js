export default function validateInfo(values) {
  const errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "First Name required";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last Name required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.job) {
    errors.job = "Job Title required";
  }

  if (!values.empId) {
    errors.empId = "Number of employees required";
  }

  return errors;
}
