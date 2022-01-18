import React from "react";
import PackageTabs from "./Filter/PackageTab";

const Package = ({ course, learn, challenge }) => {
  return <PackageTabs course={course} learn={learn} challenge={challenge} />;
};

export default Package;
