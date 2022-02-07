import SEO from "components/SEO";
import ContactComponent from "containers/Contact";

const EnterprisePage = (props) => (
  <>
    <SEO path="/enterprise" title="Enterprise" />
    <ContactComponent {...props} />
  </>
);

export default EnterprisePage;
