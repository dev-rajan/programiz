import React, { useState } from "react";

import ShareModal from "components/Modal/ShareModal";

import CardModal from "containers/Course/components/CourseDetail/CardModal";
import FancyCard from "containers/Course/components/CourseFeature/FancyCard";
import { DASHBOARD_APP_ROUTES } from "constants/app-routes";

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

const CourseDetails = ({ custom, slug }) => {
  const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow(true);
  };

  return (
    <section className="course-detail">
      <div className="container">
        <div className="row">
          <ShareModal show={show} setShow={setShow} />

          <div className="col-lg-8 course-column">
            <FancyCard custom={custom} />
          </div>

          <div className="col-lg-4 sticky-none">
            <CardModal
              path={`${DASHBOARD_APP_ROUTES.COURSE}/${slug}`}
              Items={Items}
              handleModal={handleModal}
              title="ENROLL FOR FREE"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
