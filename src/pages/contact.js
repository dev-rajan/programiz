import React from "react";

import SEO from "components/SEO";
import ContactApp from "containers/Contact/Contact";

const contact = () => {
  return (
    <>
      <SEO path="/contact" title="Contact" />
      <ContactApp />
    </>
  );
};

export default contact;
