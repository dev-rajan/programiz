import React from "react";

const FIltrIM = (courses, learningPath) => {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [filteredLearningPath, setFilteredLearningPath] =
    useState(learningPath);
  const [languageFilters, setLanguageFilters] = useState([]);
  const [filterType, setFilterType] = useState("all");

  const [isMobileFilterActive, setIsMobileFilterActive] = useState(false);
  const [mobileFilters, setMobileFilters] = useState([]);

  const handleFilterSelection = (type) => {
    setFilterType(type);
  };

  const onMobileFilterSelection = () => {
    if (languageFilters.includes(lang)) {
      setMobileFilters(languageFilters.filter((l) => l !== lang));
    } else {
      setMobileFilters([...languageFilters, lang]);
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

  const onApplyMobileFilters = () => {
    setLanguageFilters(mobileFilters);
    setIsMobileFilterActive(false);
  };

  useEffect(() => {
    const _filteredCourses = courses.filter((course) =>
      languageFilters.includes(course.language)
    );
    const _filteredLearningPath = courses.filter((learningPath) =>
      languageFilters.includes(learningPath.language)
    );

    setFilteredCourses(_filteredCourses);
    setFilteredLearningPath(_filteredLearningPath);
  }, [courses, learningPath, languageFilters, filterType]);

  useEffect(() => {
    setMobileFilters(languageFilters);
  }, [languageFilters]);

  useEffect(() => {
    const { courseType, lang } = router.readQueryParams();

    setFilterType(courseType);
    setLanguageFilters(lang);
  }, []);

  useEffect(() => {
    router.addQuery();
  }, [languageFilters, filterType]);

  return (
    <>
      <div>
        <div isActive={"all" == filterType}>All</div>
        <div>Courses</div>
        <div>LearningPath</div>
      </div>
      <div>Filter</div>
      <div>
        <div
          onClick={handleLanguageFilter}
          isActive={languageFilters.includes("python")}
        >
          Python
        </div>
        <div>C</div>
        <div>C ++</div>
      </div>
    </>
  );
};

export default FIltrIM;
