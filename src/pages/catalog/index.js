import React from "react";

import PackageComponent from "containers/Package";
import SEO from "components/SEO";
import { useRouter } from "next/router";

const Course = () => {
  const router = useRouter();

  return (
    <>
      <SEO path={router.pathname} title="Catalog | Programiz PRO" />
      <PackageComponent />
    </>
  );
};

export default Course;
