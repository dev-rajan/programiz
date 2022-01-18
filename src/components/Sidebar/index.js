import React from "react";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const CardArrow = () => (
  <div className="sidebar-wrapper">
    <div className="course-sidebar">
      <div className="sidebar-toggle sidebar-toggle--closed">
        <FiChevronLeft className="toggle-icon" size={16} />
      </div>
      <ul className="accordion">
        <li className="accordion__item">
          <h5 className="accordion__title accordion__title--open d-flex align-items-center justify-content-between">
            <span>Introduction</span> <FiChevronRight className="title__icon" />
          </h5>
          <ul className="course-progress">
            <li className="course-progress__item course-progress__item--complete">
              <a href="#">
                <div className="course-progress__icon">
                  <img
                    src="/images/icon-check-circle-complete.svg"
                    alt="Course Complete"
                    title="Course Complete"
                  />
                </div>
                Get Started
              </a>
            </li>
            <li className="course-progress__item course-progress__item--current">
              <a href="#">
                <div className="course-progress__icon">
                  <img
                    src="/images/icon-check-circle-current.svg"
                    alt="Course Current"
                    title="Course Current"
                  />
                </div>
                Numbers &amp; Text
              </a>
            </li>
            <li className="course-progress__item">
              <a href="#">
                <div className="course-progress__icon">
                  <img
                    src="/images/icon-check-circle.svg"
                    alt="Course incomplete"
                    title="Course incomplete"
                  />
                </div>
                Variables
              </a>
            </li>
            <li className="course-progress__item">
              <a href="#">
                <div className="course-progress__icon">
                  <img
                    src="/images/icon-check-circle.svg"
                    alt="Course incomplete"
                    title="Course incomplete"
                  />
                </div>
                Master Output
              </a>
            </li>
            <li className="course-progress__item">
              <a href="#">
                <div className="course-progress__icon">
                  <img
                    src="/images/icon-check-circle.svg"
                    alt="Course incomplete"
                    title="Course incomplete"
                  />
                </div>
                Basic Arithmetic
              </a>
            </li>
            <li className="course-progress__item">
              <a href="#">
                <div className="course-progress__icon">
                  <img
                    src="/images/icon-check-circle.svg"
                    alt="Course incomplete"
                    title="Course incomplete"
                  />
                </div>
                Data Conversion
              </a>
            </li>
            <li className="course-progress__item">
              <a href="#">
                <div className="course-progress__icon">
                  <img
                    src="/images/icon-check-circle.svg"
                    alt="Course incomplete"
                    title="Course incomplete"
                  />
                </div>
                Get User
              </a>
            </li>
            <li className="course-progress__item">
              <a href="#">
                <div className="course-progress__icon">
                  <img
                    src="/images/icon-check-circle.svg"
                    alt="Course incomplete"
                    title="Course incomplete"
                  />
                </div>
                Revise: Python Basics
              </a>
            </li>
          </ul>
        </li>
        <li className="accordion__item">
          <div className="accordion__title d-flex align-items-center justify-content-between">
            <h5>Control Flow</h5> <FiChevronRight className="title__icon" />
          </div>
        </li>
        <li className="accordion__item">
          <h5 className="accordion__title d-flex align-items-center justify-content-between">
            <span>Function</span> <FiChevronRight className="title__icon" />
          </h5>
        </li>
        <li className="accordion__item">
          <h5 className="accordion__title d-flex align-items-center justify-content-between">
            <span>Data Types</span> <FiChevronRight className="title__icon" />
          </h5>
        </li>
        <li className="accordion__item">
          <h5 className="accordion__title d-flex align-items-center justify-content-between">
            <span>Appyling Logic</span>{" "}
            <FiChevronRight className="title__icon" />
          </h5>
        </li>
      </ul>
    </div>
  </div>
);

export default CardArrow;
