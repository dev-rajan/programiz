/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/dist/client/router";
import { FiChevronDown } from "react-icons/fi";

import CourseApi from "services/Marketing/CourseApi";

import Courses from "./Courses";
import Learning from "./Learning";
import { LearnData } from "containers/Landing/Data";
import Loading from "../Quiz/Loading";
import LearningApi from "services/Marketing/LearningApi";

const Options = [
  {
    id: 1,
    title: "Learning Path",
    slug: "learning",
  },
  {
    id: 2,
    title: "Courses",
    slug: "course",
  },
];

const Search = () => {
  const minorRef = useRef(null);
  const majorRef = useRef(null);

  const [courseData, setCourseData] = useState(null);
  const [learnData, setLearnData] = useState(null);

  const [courseTitle, setCourseTitle] = useState("");
  const [learnTitle, setLearnTitle] = useState("Learning Path");

  const [selectedTitle, setSelectedTitle] = useState(null);

  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedLearning, setSelectedLearning] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [minor, setMinor] = useState(false);
  const [major, setMajor] = useState(false);

  const course = async () => {
    const response = await CourseApi.getAll();

    setCourseData(response.data);
  };

  const learn = async () => {
    const response = await LearningApi.getAll();

    setCourseTitle(response?.data?.data[0]?.title);
    setLearnData(response?.data);
    setSelectedLearning(response?.data?.data[0]?.slug);
  };

  useEffect(async () => {
    course();
    learn();
  }, []);

  useEffect(() => {
    if (learnTitle === "Learning Path") {
      setCourseTitle(learnData?.data[0]?.title);
      setSelectedLearning(learnData?.data[0]?.slug);
    } else {
      setCourseTitle(courseData?.data[0]?.title);
      setSelectedCourse(courseData?.data[0]?.slug);
    }
  }, [learnTitle]);

  const handleClick = (value) => {
    if (value === "minor" && !isLoading) {
      setMinor(!minor);
      setMajor(false);
    }
    if (value === "major" && !isLoading) {
      setMajor(!major);
      setMinor(false);
    }
  };

  const handleOutClick = () => {
    setMinor(false);
    setMajor(false);
  };

  useEffect(() => {
    handleOutClick();
  }, [selectedTitle, courseTitle]);

  useEffect(() => {
    document.addEventListener("click", handleOutClick);

    return () => {
      document.removeEventListener("click", handleOutClick);
    };
  }, [minorRef, majorRef]);

  const router = useRouter();

  const Learning_URL = "/learn";
  const Challenge_URL = "/challenge";
  const Course_URL = "/course";

  const handleLearn = () => {
    if (courseTitle !== undefined) {
      setIsLoading(true);
      window.analytics.track(`Learn For Free Clicked`, {
        category_selected: learnTitle,
        name_selected: courseTitle,
        source: "Home Page Top Of Fold Dropdown",
      });
      if (learnTitle === "Learning Path") {
        router.push(`${Learning_URL}/${selectedLearning}`);
      } else if (courseTitle === "Python Basics Challenges") {
        router.push(`${Challenge_URL}/${selectedCourse}`);
      } else {
        router.push(`${Course_URL}/${selectedCourse}`);
      }
    }
  };

  return (
    <section className=" py-0 py-md-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div
              className={`search__block ${
                major || minor ? "selected" : ""
              } d-flex flex-wrap align-items-center`}
            >
              <div
                className={`search__minor d-flex align-items-center ${
                  minor ? "minor__selected" : ""
                }`}
                // id="minor"
                ref={minorRef}
                role="button"
                onKeyDown={() => {}}
                tabIndex="0"
                onClick={(e) => {
                  e.stopPropagation();

                  handleClick("minor");
                }}
              >
                <span className="fw-bold fs-4">{learnTitle}</span>
                <FiChevronDown className="ml-auto" size={28} />
                <ul
                  className={`${minor ? "minor__list show" : `minor__list `}`}
                >
                  {Options?.map((a) => (
                    <Learning
                      {...a}
                      key={a.id}
                      learnTitle={learnTitle}
                      setLearnTitle={setLearnTitle}
                      slug={a.slug}
                      setSelectedTitle={setSelectedTitle}
                    />
                  ))}
                </ul>
              </div>
              <div
                className={`search__major d-flex align-items-center ${
                  major ? "major__selected" : ""
                }`}
                role="button"
                onKeyDown={() => {}}
                tabIndex="0"
                ref={majorRef}
                onClick={(e) => {
                  e.stopPropagation();

                  handleClick("major");
                }}
              >
                <span className=" fs-4">{courseTitle}</span>
                <FiChevronDown className="ml-auto" size={26} />
                <div
                  className={`${major ? "major__list show" : `major__list `}`}
                >
                  {selectedTitle === "course" ? (
                    <>
                      {courseData?.data
                        ?.map((a, idx) => (
                          <Courses
                            {...a}
                            key={a.id}
                            slug={a.slug}
                            idx={idx}
                            setCourseTitle={setCourseTitle}
                            setSelectedLearning={setSelectedLearning}
                            setSelectedCourse={setSelectedCourse}
                          />
                        ))
                        .slice(0, 4)}
                    </>
                  ) : (
                    <>
                      {learnData?.data?.map((a, idx) => (
                        <Courses
                          {...a}
                          key={a.id}
                          slug={a.slug}
                          idx={idx}
                          setCourseTitle={setCourseTitle}
                          setSelectedCourse={setSelectedCourse}
                          setSelectedLearning={setSelectedLearning}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>
              <button
                onClick={handleLearn}
                type="button"
                className="btn btn--secondary btn__search--primary py-4 ml-auto learn-btn"
              >
                {isLoading ? <Loading /> : " Learn for Free"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
