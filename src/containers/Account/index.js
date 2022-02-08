import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const Contact = () => (
  <>
    {/* Hero section */}
    <section className="hero-inner hero-Contact">
      <div className="container">
        <div className="hero-inner__content text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <h2 className="hero-inner__title">
                Transforming People into Tech Professionals!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* our mission section */}
    <section className="section-padding text-center">
      <div className="container">
        <h2 className="fs-h2main mb-4x">
          Our mission is to help users learn programming more easily.
        </h2>
        <p>
          We are a small team of passionate developers, teachers, mentors, and
          students. Since the very beginning, we have been dedicated to creating
          programming resources that&apos;s accurate, practical, and easier to
          understand. Through our interactive and project-driven courses, we
          strive to sculpt our users into skilled programmers who can
          confidently take on the job market.
        </p>
      </div>
    </section>

    {/* our story section */}
    <section className="section-padding bg-light text-center">
      <div className="container">
        <h2 className="fs-h2main mb-4x">Our Story</h2>
        <p>
          We understand that creating textual content on the web to learn
          programming is not enough. To improve the learning experience of our
          users, we started Programiz.pro. Most online tutorials (including our
          own) can appear as confusing walls of text. We realized that this is a
          huge hurdle to learning.
        </p>
        <p>
          So, we decided to mitigate this issue by revamping our courses. Our
          aim was to create extremely engaging and interactive lessons to make
          learning easy and enjoyable. Our modified, highly curated courses
          prioritize setting a strong programming foundation. We designed our
          lessons For this, we the core concepts of programming while
          simultaneously building their practical skills through our carefully
          selected projects.{" "}
        </p>
      </div>
    </section>

    {/* testimonial section */}
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h2 className="mb-5x fs-h2main">Message from our Founder</h2>
            <div className="testimony testimony--sm bg-primary mb-8x">
              <div className="testimony__img">
                {/* <img src={IMAGES.ctoPunit} alt="Testimony Image" /> */}
              </div>
              <div className="testimony__body color-white-main">
                <p className="testimony__text mb-10x">
                  “We&apos;ve gone from a simple tutorial site to developers of
                  online compilers and mobile learning apps. We now bring you
                  Programiz Pro: a project-driven, highly curated, and fully
                  interactive learning package! Coding is so much easier now!”
                </p>
                <span className="testimony__name">
                  Punit Jajodia, CTO, Programiz
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <h2 className="mb-5x fs-h2main">What our student say?</h2>
            <div className="testimony testimony--sm bg-warning mb-8x">
              <div className="testimony__img">
                {/* <img src={IMAGES.testimonyMary} alt="Testimony Image" /> */}
              </div>
              <div className="px-8x py-14x">
                <p className="testimony__text mb-10x">
                  “I like how interactive the course is. The content is
                  super-easy to understand. 5 Stars.”
                </p>
                <span className="testimony__name">Mary Dippler</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="block-start-coding-today">
      <h2 className="mb-6x">Start Coding TODAY!</h2>
      <Link href="#">
        <a className="btn btn--white btn--w-icon btn--sm">
          Sign Up
          <FiArrowRight className="ml-2x btn-icon" size={20} />
        </a>
      </Link>
    </section>
  </>
);

export default Contact;
