const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_APP;

export const routeToDashboard = (path) => {
  if (path?.toString?.()?.startsWith("/")) return `${DASHBOARD_URL}${path}`;

  return `${DASHBOARD_URL}/${path}`;
};

export const DASHBOARD_APP_ROUTES = {
  LOGIN: "/login",
  SIGNUP: "/signup",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",
  COURSE: "/course",
  LEARNING_PATH: "/learning-path",
};
