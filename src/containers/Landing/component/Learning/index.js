import React, { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Slider from "react-slick";
import Link from "next/link";

import Cards from "./Cards";

const DEFAULT_CONTENT = {
  title: "Rock, Paper & Scissors",
  description:
    "Make fun and interesting projects such as simple games and utilities. Learn practical coding skills and have fun at the same time.",
  coursesCount: 5,
  courseBenefits: [
    "No Prior Knowledge Required",
    "Practice by Solving Challenges",
    "Earn Language Certification",
  ],
};

const CARD_CONTENT = [
  {
    title: "Rock, Paper & Scissors",
    description:
      "Make popular games like rock paper scissors and tic-tac-toe in a fun way using the basic and object-oriented concept of Python.",
    coursesCount: 4,
    courseBenefits: [
      "No Prior Knowledge Required",
      "Practice by Solving Challenges",
      "Earn Python Certification",
    ],
  },
  {
    title: "Rock, Paper & Scissors",
    description:
      "Make a popular game, rock paper scissors, to apply your C programming knowledge practically in the real world.",
    coursesCount: 2,
    courseBenefits: [
      "No Prior Knowledge Required",
      "Practice by Solving Challenges",
      "Earn C Certification",
    ],
  },
];

const Items = [
  {
    id: 1,
    slug: "master-python-basics",
    fetchId: 1,
    title: "Become a Python Master",
  },
  {
    id: 2,
    slug: "master-c-basics",
    fetchId: 3,
    title: "Become a C Master",
  },
  // {
  //   id: 3,
  //   slug: "master-java-basics",
  //   fetchId: 4,
  //   title: "Master Java Basics - Professional Certification",
  // },
];

const getColor = (val) => {
  if (val === 0) {
    return "blue";
  }
  if (val === 1) {
    return "yellow";
  }

  return "red";
};

const Learnings = () => {
  const sliderRef = useRef();

  useEffect(() => {}, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeContent, setActiveContent] = useState(CARD_CONTENT[0]);

  const onTimeEnd = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % Items.length);
  };

  useEffect(() => {
    if (CARD_CONTENT[activeIndex]) setActiveContent(CARD_CONTENT[activeIndex]);
    else setActiveContent(DEFAULT_CONTENT);
  }, [activeIndex]);

  const swipeFunc = () => {
    const timeout = setTimeout(() => {
      const a = document
        ?.querySelector(".slick-active")
        ?.querySelector(".learning-card");

      if (a) setActiveIndex(+a.dataset.idx);
    }, 100);

    return () => clearTimeout(timeout);
  };

  const slideFunc = () => {
    const timeout = setTimeout(() => {
      const a = document
        ?.querySelector(".slick-active")
        ?.querySelector(".learning-card");

      if (a) setActiveIndex(+a.dataset.idx);
    }, 500);

    return () => clearTimeout(timeout);
  };

  const options = {
    className: "center learning-slide",
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: false,
    arrows: false,
    dot: false,
    speed: 100,
    focusOnSelect: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipeToSlide: true,
    mobileFirst: true,
    onSwipe: swipeFunc,
    afterChange: slideFunc,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section className={`guided-learning ${getColor(activeIndex)}`}>
      <div className="">
        <h2 className="text-center mb-8x fs-h1">
          Start with our guided learning paths.
        </h2>
      </div>
      {/* <div className="d-none d-lg-flex overflow-auto justify-content-start justify-content-lg-center">
        {Items?.map((a, idx) => (
          <Cards
            {...a}
            key={a.id}  
            id={a.id}
            onTimeEnd={onTimeEnd}
            handleSelect={() => setActiveIndex(idx)}
            isActive={activeIndex === idx}
          />
        ))}
        <div className="card-path border p-6x d-flex align-items-center mx-md-3 mx-0">
          <Link href="/catalog/learn">
            <a className="btn btn--w-icon btn--block btn--link mb-0x text-primary font-weight-bold">
              View all paths
              <FiArrowRight className="ml-1x" size={18} />
            </a>
          </Link>
        </div>
      </div> */}
      <div className="learning__container">
        <Slider {...options} ref={sliderRef}>
          {Items?.map((a, idx) => (
            <Cards
              idx={idx}
              {...a}
              key={a.slug}
              slug={a.slug}
              onTimeEnd={onTimeEnd}
              handleSelect={() => setActiveIndex(idx)}
              isActive={activeIndex === idx}
            />
          ))}
          <div className="card-path border p-6x d-flex align-items-center learning__path ">
            <Link href="/catalog/learn">
              <a className="btn btn--w-icon btn--block btn--link mb-0x text-primary font-weight-bold">
                View all paths
                <FiArrowRight className="ml-1x" size={18} />
              </a>
            </Link>
          </div>
        </Slider>
        {/* <div className="d-md-none card-path border p-6x d-flex align-items-center mx-md-3 mx-auto mt-3 justify-content-center card__path--mobile">
          <Link href="/catalog/learn">
            <a className="btn btn--w-icon btn--block btn--link mb-0x text-primary font-weight-bold">
              View all paths
              <FiArrowRight className="ml-1x" size={18} />
            </a>
          </Link>
        </div> */}
      </div>
      <div className="container">
        <div className="why-this-path why-this-path--lg">
          <img
            src="images/rock-paper.svg"
            title="Rock Paper"
            alt="Rock Paper"
            className="rock-paper"
          />
          <div className="row">
            <div className="col-lg-5 offset-md-2 fun-projects">
              <p className="mb-1x">What will I make in this course?</p>
              <h3 className="mb-5x text-white">{activeContent.title}</h3>
              <p className="mb-0x d-none d-lg-block">
                {activeContent.description}
              </p>
            </div>
            <div className="col-lg-4 why-path-list d-none d-lg-block">
              <p className="mb-2x">Why take this path?</p>
              <h3 className="mb-5x text-white">
                {activeContent.coursesCount} COURSES
              </h3>
              <ol className="mb-0x">
                {activeContent.courseBenefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learnings;
