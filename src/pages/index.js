import SEO from "components/SEO";
import LandingComponent from "containers/Landing";
import { useEffect } from "react";

const LandingPage = (props) => {
  useEffect(() => {
    window.analytics.identify(localStorage.getItem("ajs_anonymous_id"));
  }, []);

  return (
    <>
      <SEO path="/" title="Home" />
      <LandingComponent {...props} />
    </>
  );
};

export default LandingPage;
