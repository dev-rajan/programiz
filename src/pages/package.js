import SEO from "components/SEO";

import PackageComponent from "containers/Package";

const PackagePage = (props) => {
  return (
    <>
      <SEO path="/catalog" title="All Courses" />
      <PackageComponent {...props} />
    </>
  );
};

export default PackagePage;
