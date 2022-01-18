import SEO from "components/SEO";
import FAQComponent from "containers/FAQ";

const FAQPage = (props) => (
  <>
    <SEO path="/FAQ" title="FAQ" />
    <FAQComponent {...props} />
  </>
);

export default FAQPage;
