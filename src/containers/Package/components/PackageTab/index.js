import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { FiFilter } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

import { Browse, Data } from "./Data";
import Filter from "./Filter";
import FilteredContent from "./FilteredContent";
import Tab from "./Tab";
import TabContent from "./TabContent";

const PackageTabs = ({ course, learn }) => {
  const router = useRouter();
  const [mobileFilterActive, setMobileFilterActive] = useState(false);

  const [courseType, setCourseType] = useState("all");
  const [languageFilters, setLanguageFilters] = useState([]);

  const [filteredData, setFilteredData] = useState([]);
  const [reset, setReset] = useState(false);

  const [filterSlug, setFilterSlug] = useState("");

  const [apply, setApply] = useState(false);
  const [mobileFilter, setMobileFilter] = useState([]);

  const total = course?.data?.length + learn?.data?.length;
  const courseTotal = course?.data?.length;
  const learningTotal = learn?.data?.length;

  const handleToggle = () => {
    setMobileFilterActive((prevState) => !prevState);
  };

  const handleCheck = () => {
    router.replace(
      {
        pathname: router.pathname,
        query: {
          type: courseType,
          lang: languageFilters,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleApply = () => {
    setApply(true);
  };

  useEffect(() => {
    const { type } = router.query;

    if (type) {
      setCourseType(type);
    }
  }, []);

  useEffect(() => {
    handleCheck();
  }, [languageFilters, courseType]);

  return (
    <div className="border-top">
      <div className="container ">
        <div className="d-flex align-items-center mt-5 mb-4 d-lg-none">
          <h3>Courses</h3>
          <div className="ml-auto">
            <button
              type="button"
              onClick={handleToggle}
              className={`btn btn--sm rounded ${
                mobileFilterActive ? "active" : ""
              }`}
            >
              <FiFilter className="mr-2 align-middle" height={26} />
              Filter
            </button>
          </div>
        </div>
        <div className="row ">
          <div
            className="nav flex-column nav-pills py-5 border-right col-lg-3 filter__block"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <div className="filter__primary d-flex flex-lg-column justify-content-center">
              {Data?.map((a) => (
                <Tab
                  key={a.id}
                  {...a}
                  isActive={courseType === a.slug}
                  idx={a.id}
                  total={total}
                  courseTotal={courseTotal}
                  learningTotal={learningTotal}
                  setCourseType={setCourseType}
                  filterSlug={filterSlug}
                  courseType={courseType}
                  course={course}
                  learn={learn}
                  setFilteredData={setFilteredData}
                />
              ))}
            </div>
            <div
              className={`filter__secondary py-3 py-lg-0 ${
                mobileFilterActive ? "show" : ""
              }`}
            >
              <div className="d-flex align-items-center ">
                <h4 className="pl-md-3 px-3 mt-md-4  mb-md-2 m-0  ">
                  {Browse?.title}
                </h4>
                <div className="ml-auto d-block d-lg-none">
                  <GrClose className="mr-2 " size={16} onClick={handleToggle} />
                </div>
              </div>
              <ul className="pl-0">
                {Browse?.data?.map((a) => (
                  <Filter
                    key={a.id}
                    {...a}
                    idx={a.id}
                    filteredData={filteredData}
                    setFilteredData={setFilteredData}
                    languageFilters={languageFilters}
                    setLanguageFilters={setLanguageFilters}
                    course={course}
                    learn={learn}
                    reset={reset}
                    setReset={setReset}
                    mobileFilter={mobileFilter}
                    setMobileFilter={setMobileFilter}
                    apply={apply}
                    setApply={setApply}
                    courseType={courseType}
                    setFilterSlug={setFilterSlug}
                  />
                ))}
              </ul>
              <div className="d-flex justify-content-around align-items-center mt-4 d-lg-none ">
                <span
                  className="px-4 btn--filter btn--filter-link"
                  onClick={() => setReset(true)}
                  role="presentation"
                >
                  Cancel
                </span>
                <button
                  type="button"
                  className="btn btn--primary btn--sm btn--filter"
                  onClick={handleApply}
                  onClick={handleToggle}
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-9 d-none d-lg-block package__page--sm">
            {filteredData.length > 0 ? (
              <FilteredContent filteredData={filteredData} />
            ) : (
              <TabContent
                course={course}
                learn={learn}
                courseType={courseType}
              />
            )}
          </div>
          <div className="col-lg-9 d-lg-none py-6x py-lg-0">
            {mobileFilter.length > 0 ? (
              <FilteredContent filteredData={mobileFilter} />
            ) : (
              <TabContent
                course={course}
                learn={learn}
                courseType={courseType}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageTabs;
