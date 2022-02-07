import React from "react";

import CatalogProvider from "./CatalogContext";

const Index = ({ children }) => {
  return <CatalogProvider>{children}</CatalogProvider>;
};

export default Index;
