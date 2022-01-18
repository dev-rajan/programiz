import SEO from "components/SEO";
import AboutComponent from "containers/About";

const AboutPage = (props) => (
  <>
    <SEO path="/about" title="About" />
    <AboutComponent {...props} />
  </>
);

export default AboutPage;
