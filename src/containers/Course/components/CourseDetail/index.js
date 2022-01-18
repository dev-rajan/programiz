import React, { useState } from "react";

import { DASHBOARD_APP_ROUTES } from "constants/app-routes";
import ShareModal from "components/Modal/ShareModal";

import CourseFeatures from "../CourseFeature";
import CardModal from "./CardModal";

const Items = [
  {
    id: 1,
    title:
      "Self paced learning. Learn at your own time. All our courses are online.",
    img: "/images/icon-tick.svg",
  },
  {
    id: 2,
    title: "Earn completion certificatoin",
    img: "/images/icon-tick.svg",
  },
  {
    id: 3,
    title: "Join our Discord community of 10,000+ passionate coders",
    img: "/images/icon-tick.svg",
  },
  {
    id: 4,
    title: "Language: English",
    img: "/images/icon-tick.svg",
  },
  {
    id: 5,
    title: "Level: Beginner, No-prior coding required",
    img: "/images/icon-tick.svg",
  },
];

const CourseDetails = ({ toc, custom, slug }) => {
  const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow(true);
  };

  return (
    <section className="course-detail">
      <div className="container">
        <div className="row">
          <ShareModal show={show} setShow={setShow} />

          <CourseFeatures slug={slug} toc={toc} custom={custom} />

          <div className="col-lg-4">
            <CardModal
              Items={Items}
              path={`${DASHBOARD_APP_ROUTES.COURSE}/${slug}`}
              handleModal={handleModal}
              title="START LEARNING FOR FREE"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
