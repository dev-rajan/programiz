import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { FiSearch, FiX } from "react-icons/fi";

import NoResult from "./NoResult";
import LearnTab from "./LearnTab";
import CourseTab from "./CourseTab";

const Search = ({ result }) => {
  const router = useRouter();
  const params = router.query.q;
  const searchUrl = "/search?q=";

  const [filteredCourses, setFilteredCourses] = useState([]);
  const [filteredLearning, setFilteredLearning] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [total, setTotal] = useState(0);

  const keyword = params;

  const [selected, setSelected] = useState(true);

  const handleClick = () => {
    setSelected((prev) => !prev);
  };

  const handleChange = (searchValue) => {
    router.push(`${searchUrl}${searchValue}`);
    setSearchInput(searchValue);
    const courseData = result?.data?.courses
      ?.map((a) => a)
      .filter((item) => {
        return Object.values(item)
          ?.join("")
          ?.toLowerCase()
          ?.includes(searchValue?.toLowerCase());
      });

    setFilteredCourses(courseData);

    const learningData = result?.data?.learningPaths
      ?.map((a) => a)
      .filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue?.toLowerCase());
      });

    setFilteredLearning(learningData);
    setTotal(courseData?.length + learningData?.length);
  };

  useEffect(() => {
    handleChange(keyword);
  }, [keyword]);

  const handleClear = () => {
    setSearchInput("");
    setFilteredCourses([]);
    setFilteredLearning([]);
    setTotal(0);
  };

  return (
    <div>
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="search-wrapper mb-8x">
                <div className="input-group--w-icon my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search for courses"
                    aria-label="Search for courses"
                    onChange={(e) => handleChange(e.target.value)}
                    value={searchInput}
                  />
                  <div className="input-group-prepend">
                    <FiSearch size={24} />
                  </div>
                  <button
                    type="button"
                    className="search-cross btn btn--icon p-0x"
                    onClick={() => handleClear()}
                  >
                    <FiX size={24} />
                  </button>
                </div>

                {total > 0 && total !== undefined && (
                  <div className="result-found">
                    <p className="my-7x">
                      {total} results found for
                      <b> {`${searchInput}`}</b>
                    </p>
                  </div>
                )}

                {total === 0 || total === undefined ? (
                  <NoResult />
                ) : (
                  <div className="lesson-tabs border-bottom border-top">
                    {selected ? (
                      <LearnTab
                        filteredLearning={filteredLearning}
                        filteredCourses={filteredCourses}
                        handleClick={handleClick}
                      />
                    ) : (
                      <CourseTab
                        filteredLearning={filteredLearning}
                        filteredCourses={filteredCourses}
                        handleClick={handleClick}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
