import SEO from "components/SEO";
import { ROUTE_TITLE } from "constants/consts";
import FAQComponent from "containers/FAQ";

const FAQPage = (props) => (
  <>
    <SEO path="/FAQ" title={`${ROUTE_TITLE.FAQ} | ${ROUTE_TITLE.BRAND}`} />
    <FAQComponent {...props} />
  </>
);

export default FAQPage;
