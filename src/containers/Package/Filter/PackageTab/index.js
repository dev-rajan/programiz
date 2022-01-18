import React, { useEffect, useMemo, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/router";

import { LANGUAGE_FILTERS, COURSE_FILTERS, FILTER_TYPES } from "./Data";
import TabContent from "./TabContent";
import NoResult from "components/Search/NoResult";
import CourseTypeFilter from "./CourseTypeFilter";
import LanguageFilter from "./LanguageFilter";

const PackageTabs = ({
  course: courses,
  learn: learningPaths,
  challenge: challenges,
}) => {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [filteredLearningPaths, setFilteredLearningPath] =
    useState(learningPaths);
  const [filteredChallenges, setFilteredChallenges] = useState(challenges);

  const [languageFilters, setLanguageFilters] = useState([]);
  const [filterType, setFilterType] = useState(FILTER_TYPES.ALL);
  const [mobileFilters, setMobileFilters] = useState([]);

  const [mobileFilterActive, setIsMobileFilterActive] = useState(false);

  const router = useRouter();

  const handleFilterSelection = (type) => {
    setFilterType(type);
  };

  const onMobileFilterSelection = (lang) => {
    if (mobileFilters.includes(lang)) {
      setMobileFilters(mobileFilters.filter((l) => l !== lang));
    } else {
      setMobileFilters([...mobileFilters, lang]);
    }
  };

  const handleLanguageFilter = (lang) => {
    if (languageFilters.includes(lang)) {
      setLanguageFilters(languageFilters.filter((l) => l !== lang));
    } else {
      setLanguageFilters([...languageFilters, lang]);
    }
  };

  const closeMobileFilter = () => {
    setMobileFilters(languageFilters);
    setIsMobileFilterActive(false);
  };

  const toggleMobileFilter = () => {
    setMobileFilters(languageFilters);
    setIsMobileFilterActive((prevState) => !prevState);
  };

  const onApplyMobileFilters = () => {
    setLanguageFilters(mobileFilters);
    setIsMobileFilterActive(false);
  };

  const addFiltersToParams = () => {
    router.replace(
      {
        pathname: router.pathname,
        query: {
          type: filterType,
          lang: languageFilters,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const getDataCount = (type) => {
    const coursesCount = courses.length;
    const learningPathsCount = learningPaths.length;
    const challengeCount = challenges.length;

    if (type === FILTER_TYPES.ALL) {
      return coursesCount + learningPathsCount + challengeCount;
    } else if (type === FILTER_TYPES.COURSES) {
      return coursesCount;
    } else if (type === FILTER_TYPES.LEARNING) {
      return learningPathsCount;
    } else if (type === FILTER_TYPES.CHALLENGES) {
      return challengeCount;
    }

    return 0;
  };

  useEffect(() => {
    addFiltersToParams();
  }, [languageFilters, filterType]);

  useEffect(() => {
    const _filteredCourses = courses?.filter?.((course) =>
      languageFilters.length
        ? languageFilters.includes(course.language.title)
        : true
    );

    const _filteredLearningPath = learningPaths?.filter?.((learningPath) =>
      languageFilters.length
        ? languageFilters.some((languageFilter) =>
            learningPath.languages.some((language) =>
              language.title.includes(languageFilter)
            )
          )
        : true
    );

    const _filteredChallenges = challenges?.filter?.((challenge) =>
      languageFilters.length
        ? languageFilters.includes(challenge.language.title)
        : true
    );

    setFilteredCourses(_filteredCourses);
    setFilteredLearningPath(_filteredLearningPath);
    setFilteredChallenges(_filteredChallenges);
  }, [courses, learningPaths, challenges, languageFilters, filterType]);

  useEffect(() => {
    setMobileFilters(languageFilters);
  }, [languageFilters]);

  useEffect(() => {
    const validCourseTypes = COURSE_FILTERS.map((type) => type.slug);
    const validLanguageFilters = LANGUAGE_FILTERS.map((lang) => lang.slug);

    const query = router.query;
    const languageFiltersFromQuery = query.lang;
    const filterType = query.type;

    if (validCourseTypes.includes(filterType)) {
      setFilterType(filterType);
    }

    if (languageFiltersFromQuery) {
      if (
        typeof languageFiltersFromQuery === "string" &&
        validLanguageFilters.includes(languageFiltersFromQuery)
      ) {
        setLanguageFilters([languageFiltersFromQuery]);
      } else {
        const applicableLanguageFilters = [];

        languageFiltersFromQuery.forEach((lang) => {
          if (validLanguageFilters.includes(lang)) {
            applicableLanguageFilters.push(lang);
          }
        });

        setLanguageFilters(applicableLanguageFilters);
      }
    }
  }, []);

  const filteredData = useMemo(() => {
    if (filterType === FILTER_TYPES.ALL) {
      return [
        ...filteredCourses,
        ...filteredLearningPaths,
        ...filteredChallenges,
      ];
    } else if (filterType === FILTER_TYPES.COURSES) {
      return filteredCourses;
    } else if (filterType === FILTER_TYPES.LEARNING) {
      return filteredLearningPaths;
    } else if (filterType === FILTER_TYPES.CHALLENGES) {
      return filteredChallenges;
    }

    return [];
  }, [filteredCourses, filteredLearningPaths, filteredChallenges]);

  return (
    <div className="border-top">
      <div className="container ">
        <div className="d-flex align-items-center mt-5 mb-4 d-lg-none">
          <h3>Courses</h3>
          <div className="ml-auto">
            <button
              type="button"
              onClick={toggleMobileFilter}
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
              {COURSE_FILTERS?.map((courseFilter) => (
                <CourseTypeFilter
                  key={courseFilter.id}
                  handleSelect={handleFilterSelection}
                  dataCount={getDataCount(courseFilter.slug)}
                  isActive={courseFilter.slug === filterType}
                  filterItem={courseFilter}
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
                  Browse by Languages
                </h4>
                <div className="ml-auto d-block d-lg-none">
                  <GrClose
                    className="mr-2 "
                    size={16}
                    onClick={closeMobileFilter}
                  />
                </div>
              </div>
              <ul className="pl-0 d-block d-lg-none">
                {LANGUAGE_FILTERS?.map((languageFilter) => (
                  <LanguageFilter
                    key={languageFilter.slug}
                    id="mbl"
                    onLanguageFilterSelected={onMobileFilterSelection}
                    filter={languageFilter}
                    isChecked={mobileFilters.includes(languageFilter.slug)}
                  />
                ))}
              </ul>
              <ul className="pl-0 d-none d-lg-block">
                {LANGUAGE_FILTERS?.map((languageFilter) => (
                  <LanguageFilter
                    key={languageFilter.slug}
                    id="dsk"
                    onLanguageFilterSelected={handleLanguageFilter}
                    filter={languageFilter}
                    isChecked={languageFilters.includes(languageFilter.slug)}
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
                  onClick={onApplyMobileFilters}
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-9 d-none d-lg-block package__page--sm">
            <>
              {filteredData.length <= 0 ? (
                <NoResult extraClass="d-none" />
              ) : (
                <TabContent
                  filterType={filterType}
                  course={filteredCourses}
                  learn={filteredLearningPaths}
                  challenge={filteredChallenges}
                />
              )}
            </>
          </div>
          <div className="col-lg-9 d-lg-none py-6x py-lg-0">
            <>
              {filteredData.length <= 0 ? (
                <NoResult extraClass="d-none" />
              ) : (
                <TabContent
                  filterType={filterType}
                  course={filteredCourses}
                  learn={filteredLearningPaths}
                  challenge={filteredChallenges}
                />
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageTabs;
