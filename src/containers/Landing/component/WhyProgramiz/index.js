import React, { useState } from "react";
import { FiPlayCircle } from "react-icons/fi";
import Slider from "react-slick";

import DashboardLink from "components/DashboardLink";
import { DASHBOARD_APP_ROUTES } from "constants/app-routes";

import Cards from "./Cards";
import Images, { MobileImage } from "./Images";

const Items = {
  title: "Why Learn With Programiz?",
  data: [
    {
      id: 1,
      title: "Interactive and Highly Intuitive Lessons",
      image: "images/browser-example.svg",
    },
    {
      id: 2,
      title: "Save Time, Save Money",
      image: "images/image1.svg",
    },
    {
      id: 3,
      title: "Build Projects, Get Certified",
      image: "images/image2.svg",
    },
  ],
};

const demoClicktoSegment = () => {
  window.analytics.track(`Demo Product With Free Trial Clicked`, {
    source: "Homepage Why Learn With Programiz Section",
  });
};

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const onTimeEnd = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % Items.data.length);
  };

  const swipeFunc = () => {
    const timeout = setTimeout(() => {
      const a = document
        ?.querySelector(".why-slide")
        ?.querySelector(".slick-active")
        ?.querySelector(".why-card");

      if (a) setActiveIndex(+a.dataset.idx);
    }, 100);

    return () => clearTimeout(timeout);
  };

  const slideFunc = () => {
    const timeout = setTimeout(() => {
      const a = document
        ?.querySelector(".why-slide")
        ?.querySelector(".slick-active")
        ?.querySelector(".why-card");

      if (a) setActiveIndex(+a.dataset.idx);
    }, 500);

    return () => clearTimeout(timeout);
  };

  const settings = {
    className: "center why-slide",
    centerMode: false,
    autoplay: true,
    infinite: false,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 100,
    focusOnSelect: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipeToSlide: true,
    mobileFirst: true,
    onSwipe: swipeFunc,
    beforeChange: slideFunc,
    responsive: [
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  const BigOption = {
    arrows: false,
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    onSwipe: swipeFunc,
    afterChange: slideFunc,
  };

  return (
    <section className="bg-light why-programiz">
      <div className="container container__void--mobile">
        <h2 className="text-center fs-h1 mb-8x">{Items?.title}</h2>
        <div className="row d-none d-md-block why-programiz__title">
          <div className="col-xl-3">
            <div className="d-flex flex-nowrap overflow-auto overflow-lg-hidden justify-content-start justify-content-lg-center  flex-row flex-xl-column">
              {Items?.data?.map((a, idx) => (
                <Cards
                  key={a.id}
                  {...a}
                  onTimeEnd={onTimeEnd}
                  handleSelect={() => setActiveIndex(idx)}
                  isActive={activeIndex === idx}
                />
              ))}
            </div>
          </div>
          <div className="col-xl-9 px-5 px-md-0">
            <Images tab={Items?.data[activeIndex]} />
          </div>
          {/* <div className=" mt-4 w-100">
            <DashboardLink
              title="Demo Product with Free Trial"
              href={DASHBOARD_APP_ROUTES.SIGNUP}
              onClick={demoClicktoSegment}
              className="btn  why-programiz__link btn--link d-flex btn--block justify-content-xl-start justify-content-center align-items-center pl-3"
            >
              <FiPlayCircle className="btn-icon mr-2x " size={20} />
              Demo Product with Free Trial
            </DashboardLink>
          </div> */}
        </div>
        <div className="d-md-none">
          <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            {...settings}
          >
            {Items?.data?.map((a, idx) => (
              <Cards
                idx={idx}
                key={a.id}
                {...a}
                onTimeEnd={onTimeEnd}
                handleSelect={() => setActiveIndex(idx)}
                isActive={activeIndex === idx}
              />
            ))}
          </Slider>
          <div className="col-xl-9 px-3 px-md-5 px-md-0 mb-3">
            <Slider
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
              {...BigOption}
            >
              {Items?.data?.map((a) => (
                <MobileImage key={a.id} {...a} />
              ))}
            </Slider>
          </div>
          {/* <div className=" mt-2 w-100">
            <DashboardLink
              title="Demo Product with Free Trial"
              href={DASHBOARD_APP_ROUTES.SIGNUP}
              onClick={demoClicktoSegment}
              className="btn btn--link d-flex btn--block mt-4 justify-content-md-start justify-content-center align-items-center  pl-3"
            >
              <FiPlayCircle className="btn-icon mr-2x" size={20} />
              Demo Product with Free Trial
            </DashboardLink>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Index;
