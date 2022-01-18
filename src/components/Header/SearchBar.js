import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ handleToggle }) => {
  const router = useRouter();
  const searchPath = "/search?q=";

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    window.analytics.track(`Course Searched`, {
      keyword: value,
      source: "Top Navbar",
    });
    e.preventDefault();
    if (e.keyCode === 13) {
      router.push(`${searchPath}${value}`);
      handleToggle();
    }
    router.push(`${searchPath}${value}`);
    handleToggle();
  };

  return (
    <div className="navbar-search">
      <form className="my-2 my-lg-0" onSubmit={handleSubmit}>
        <div className="input-group--w-icon">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search for courses"
            aria-label="Search for courses"
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="input-group-prepend">
            <FiSearch size={24} />
          </div>
        </div>
      </form>
      <div className="navbar-search__results d-none">
        <h4 className="navbar-search__category fs-article">Popular Searches</h4>{" "}
        <div className="navbar-search-result-wrapper">
          <div className="navbar-search__items">
            <a href="#" className="navbar-search__item">
              Python
            </a>
            <a href="#" className="navbar-search__item">
              C++
            </a>
          </div>
        </div>
        <div className="navbar-search-result-wrapper">
          <h4 className="navbar-search__category fs-body14 py-3x border-top border-bottom">
            Learning Path
          </h4>
          <div className="navbar-search__items w-border">
            <a href="#" className="navbar-search__item">
              <div className="d-flex align-items-center">
                {/* <img
                        src="images/notification-book.svg"
                        alt="Book"
                        className="mr-5x"
                      /> */}
                <div>
                  <p className="mb-0x text-medium">Analyze data with Python</p>
                  <span className="text-tiny text-medium color-text-caption">
                    4 courses &nbsp;•&nbsp; Level: Intermediate
                  </span>
                </div>
              </div>
            </a>
            <a href="#" className="navbar-search__item">
              <div className="d-flex align-items-center">
                {/* <img
                        src="images/notification-book-open.svg"
                        alt="Book"
                        className="mr-5x"
                      /> */}
                <div>
                  <p className="mb-0x text-medium">
                    Artificial Intelligence 101
                  </p>
                  <span className="text-tiny text-medium color-text-caption">
                    6 courses &nbsp;•&nbsp; Level: Intermediate
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="navbar-search-result-wrapper">
          <h4 className="navbar-search__category fs-body14 py-3x border-top border-bottom">
            Courses
          </h4>
          <span href="#" className="navbar-search__item text-medium py-4x">
            No Courses found.
          </span>
        </div>
        <div className="d-flex justify-content-center border-top px-5x py-3x">
          <a href="#" className="btn btn--link p-0x">
            See All Results
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
