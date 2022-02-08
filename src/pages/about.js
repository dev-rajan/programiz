import SEO from "components/SEO";
import AboutComponent from "containers/About";
import { ROUTE_TITLE } from "constants/consts";

const AboutPage = (props) => (
  <>
    <SEO path="/about" title={`${ROUTE_TITLE.ABOUT} | ${ROUTE_TITLE.BRAND}`} />
    <AboutComponent {...props} />
  </>
);

export default AboutPage;
