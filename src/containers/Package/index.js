import React, { useContext, useEffect, useMemo } from "react";
import { CatalogContext } from "contextApi/CatalogContext";
import { useRouter } from "next/router";

import PackageTabs from "./Filter/PackageTab";

const Package = () => {
  const { course, learn, challenge, isLoading } = useContext(CatalogContext);
  const router = useRouter();

  const { language, courseType } = router.query;

  if (
    isLoading ||
    (router.pathname.split("/").length > 2 &&
      Object.keys(router.query).length == 0)
  ) {
    return (
      <div class="d-flex justify-content-center p-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <PackageTabs
      key={courseType}
      course={course}
      learn={learn}
      challenge={challenge}
      language={language}
      courseType={courseType}
    />
  );
};

export default Package;
