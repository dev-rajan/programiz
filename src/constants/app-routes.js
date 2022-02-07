const EXTERNAL = {
  url: process.env.NEXT_PUBLIC_DASHBOARD_APP,
};

export const routeToDashboard = (path) => {
  if (path?.toString?.()?.startsWith("/")) return `${EXTERNAL.url}${path}`;

  return `${EXTERNAL.url}/${path}`;
};

export const DASHBOARD_APP_ROUTES = {
  LOGIN: "/login",
  SIGNUP: "/signup",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",
  COURSE: "/course",
  LEARNING_PATH: "/learn",
  PYTHON: "/learn/master-python",
  C: "/learn/master-c-programming",
};
