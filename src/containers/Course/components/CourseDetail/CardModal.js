import React from "react";

import { LearnData } from "containers/Landing/Data";
import DashboardLink from "components/DashboardLink";

import CourseCards from "../CourseCard";

const url = typeof window !== "undefined" ? window.location.href : "";
const selectedLearningPath =
  LearnData[url.slice(-1) - 1] && LearnData[url.slice(-1) - 1].title
    ? LearnData[url.slice(-1) - 1].title
    : "";

const sendClickEventtoSegment = () => {
  window.analytics.track(`Start Learning For Free Clicked`, {
    source: "Learning Path Sticky Sidebar",
    learning_path: selectedLearningPath,
  });
};

const CardModal = ({ Items, handleModal, title, path }) => {
  return (
    <div className="card border start-learning-card">
      <img
        src="/images/illus-start-learning.png"
        alt="Start Learning"
        title="Start Learning"
        className="mb-4 d-none d-lg-block"
      />
      <DashboardLink
        title={title}
        href={path}
        onClick={sendClickEventtoSegment}
        className="btn btn--secondary btn--block mb-3x"
      >
        {title}
      </DashboardLink>
      <p className="text-center fs-body14 mb-4">
        Start here and start your 7-day free trial of full access.
      </p>
      <hr className="mb-4 d-none d-lg-block" />
      <ul className="d-none d-lg-block">
        {Items?.map((a) => (
          <CourseCards {...a} key={a.id} />
        ))}
      </ul>
      <hr className="d-none d-lg-block" />
      <button
        title="Share"
        type="button"
        className="btn btn--block d-none d-lg-block share-btn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        onClick={handleModal}
      >
        Share
      </button>
    </div>
  );
};

export default CardModal;
