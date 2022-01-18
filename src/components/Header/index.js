import React, { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import Link from "next/link";

import { DASHBOARD_APP_ROUTES } from "constants/app-routes";
import DashboardLink from "components/DashboardLink";

import MenuItem from "./MenuItem";
// import DropItem from "./DropItem";
import SearchBar from "./SearchBar";
import { Data } from "./Data";
import CourseDropDown from "./CourseDropdown/CourseDropDown";
import LearningApi from "services/api/LearningApi";
import CourseApi from "services/api/CourseApi";

const Headers = () => {
  const minorRef = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);

  const [course, setCourse] = useState([]);
  const [learn, setLearn] = useState([]);
  const [challenge, setChallenge] = useState([]);

  const [minor, setMinor] = useState(false);

  useEffect(async () => {
    setLearn(await LearningApi.getAll());
    const courseData = await CourseApi.getAll();
    const challenge = [];
    const course = [];

    courseData?.data?.data?.forEach((item) => {
      if (
        Object.values(item.title).join("").toLowerCase().includes("challenge")
      ) {
        challenge.push(item);
      } else {
        course.push(item);
      }
    });

    setCourse(course);
    setChallenge(challenge);
  }, []);

  const handleClick = (value) => {
    if (value === "minor") {
      setMinor(!minor);
    }
  };

  const handleOutClick = () => {
    setMinor(false);
  };

  useEffect(() => {
    handleOutClick();
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleOutClick);

    return () => {
      document.removeEventListener("click", handleOutClick);
    };
  }, [minorRef]);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  const handleDropdown = () => {
    setShowDropDown(!showDropDown);
  };

  const saveSignUpeventinSegment = () => {
    window.analytics.track(`SignUp Clicked`, {
      source: "Homepage Navbar",
    });
  };
  const saveLoginUpeventinSegment = () => {
    window.analytics.track(`LogIn Clicked`, {
      source: "Homepage Navbar",
    });
  };

  return (
    <header className="border-md-bottom py-2">
      <div className="container">
        <div className="d-flex align-items-center">
          <div role="presentation" onClick={handleToggle}>
            <FiMenu className="mr-2 d-block d-lg-none" size={26} />
          </div>
          <Link href="/">
            <a
              className="navbar-brand mr-0 mr-md-3"
              onClick={() => setSelected(null)}
              role="presentation"
            >
              <img
                src="/images/logo-programiz-pro.svg"
                className="d-none d-md-block"
                title="Programiz Logo"
                alt="Programiz Logo"
              />
              <img
                src="/images/programiz-mobile.svg"
                className="d-block d-md-none"
                title="Programiz Logo"
                alt="Programiz Logo"
              />
            </a>
          </Link>
          <div className={`navbar__menu ${isActive ? "show" : ""}`}>
            <div
              className="border-bottom p-3 order-0  d-block d-lg-none w-100 menu__button"
              role="presentation"
              onClick={handleToggle}
            >
              <GrClose className="mr-2 " size={24} />
            </div>

            <ul className="navbar-nav mr-0 d-block d-lg-flex p-3 p-md-3 order-2 order-lg-1 ">
              {Data?.navlink?.map((a, idx) => (
                <MenuItem
                  {...a}
                  key={a.id}
                  id={a.id}
                  idx={idx}
                  selected={selected}
                  setSelected={setSelected}
                  handleToggle={handleToggle}
                />
              ))}
              <li
                className={`nav-item dropdown py-2 py-md-0 d-none d-lg-block`}
                ref={minorRef}
                onClick={(e) => {
                  e.stopPropagation();

                  handleClick("minor");
                }}
              >
                <a
                  className={`nav-link dropdown-toggle `}
                  onClick={handleDropdown}
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Courses
                  <FiChevronDown className="ml-1x" size={18} />
                </a>
                {minor && (
                  <CourseDropDown
                    course={course}
                    challenge={challenge}
                    learn={learn?.data?.data}
                    handleDropdown={handleDropdown}
                    setMinor={setMinor}
                  />
                )}
              </li>
            </ul>
            <div className="order-1 order-lg-2 px-4 mt-3 mt-lg-0 search__element">
              <SearchBar handleToggle={handleToggle} />
            </div>
            <div className="d-flex mt-auto  order-3 d-lg-none w-100 p-4">
              <Link href="/">
                <a className="navbar-brand mr-3">
                  <img
                    src="/images/logo-programiz-pro.svg"
                    className=""
                    title="Programiz Logo"
                    alt="Programiz Logo"
                  />
                </a>
              </Link>
              <div className="ml-auto">
                <div className="d-flex align-items-center navbar-nav ml-auto">
                  <DashboardLink
                    title="Log In"
                    href={DASHBOARD_APP_ROUTES.LOGIN}
                    onClick={saveLoginUpeventinSegment}
                    className="nav-link pr-2"
                  >
                    Log In
                  </DashboardLink>
                  <DashboardLink
                    title="Sign Up"
                    href={DASHBOARD_APP_ROUTES.SIGNUP}
                    onClick={saveSignUpeventinSegment}
                    className="nav-link"
                  >
                    Sign Up
                  </DashboardLink>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center navbar-nav ml-auto">
            <DashboardLink
              title="Log In"
              href={DASHBOARD_APP_ROUTES.LOGIN}
              onClick={saveLoginUpeventinSegment}
              className="nav-link pr-2  "
            >
              Log In
            </DashboardLink>
            <DashboardLink
              title="Sign Up"
              href={DASHBOARD_APP_ROUTES.SIGNUP}
              onClick={saveSignUpeventinSegment}
              className="nav-link"
            >
              Sign Up
            </DashboardLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
