import React from "react";

import { FiArrowRight } from "react-icons/fi";

const Modal = () => (
  <>
    <div className="modal__backdrop" />
    {/* Congratulation, lesson complete modal */}
    <div className="modal d-none">
      <div className="modal__body">
        <div className="row">
          <div className="col-md-6">
            <div className="text-center">
              <img
                src="/images/illus-course-complete.svg"
                alt="Course Completed"
              />
              <h3 className="mb-4x modal__title">Great Job!</h3>
              <p>
                Congratulations on completing
                <br />
                <b>Python Basic Course</b>
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-6x mt-0x-md">
            <div className="modal__box">
              <h3 className="modal__title mb-4x">
                Enroll to Python Learning Path
              </h3>
              <p>
                By enrolling to Learning Path you can get following advantages:
              </p>
              <ul className="mb-8x">
                <li>On completion get professional certificate</li>
                <li>Courses curated by professionals</li>
              </ul>
              <div>
                <a href="#" className="btn btn--primary btn--w-icon mb-2x">
                  Learn More
                  <FiArrowRight className="btn-icon ml-6x" />
                </a>
              </div>
              <a href="#" className="btn btn--link">
                Do it later
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Congratulation, impartial certificate modal */}
    <div className="modal d-none">
      <div className="modal__body">
        <div className="row">
          <div className="col-md-6">
            <div className="text-center">
              <img
                src="/images/confetti.png"
                title="Confetti"
                alt="Confetti"
                className="modal-confetti"
              />
              <img
                src="/images/illus-award.png"
                alt="Course Completed"
                title="Course Completed"
                className="illus-award"
              />
              <h3 className="mb-4x modal__title mt-12x">Congratulations!</h3>
              <p className="mb-8x">
                You have been certified for completing
                <br />
                <b>Level 1: Python Learning Path</b>
              </p>
              <img
                src="/images/illus-certificate.png"
                alt="Certificate"
                title="Certificate"
              />
              <a href="#" className="btn btn--link mt-4x d-block">
                Download/View your certificate
              </a>
            </div>
          </div>
          <div className="col-md-6 mt-6x mt-0x-md">
            <div className="modal__box">
              <h3 className="modal__title mb-4x">
                Ready for Level 2: Python Learning Path
              </h3>
              <p className="mb-8x">
                You have completed the Basic Python Course which is the level 1
                of the learning path, by choosing to enroll you can continue
                learning and complete all the courses and get a Certified
                Professional Certificate.
              </p>
              <div>
                <a href="#" className="btn btn--primary btn--w-icon mb-2x">
                  Start Level 2
                  <FiArrowRight className="btn-icon ml-6x" />
                </a>
              </div>
              <a href="#" className="btn btn--link">
                Do it later
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Great Job modal */}
    <div className="modal modal--sm d-none">
      <div className="modal__body">
        <div className="text-center">
          <img
            src="/images/illus-course-complete.svg"
            alt="Certificate"
            title="Certificate"
          />
          <h3 className="mb-4x modal__title">Great Job!</h3>
          <p className="mb-8x">
            Congratulations on completing
            <br />
            <b>Level 1: Python Learning Path</b>
          </p>
          <div>
            <a href="#" className="btn btn--primary btn--w-icon mb-2x">
              Take me to Next Chapter
              <FiArrowRight className="btn-icon ml-6x" />
            </a>
          </div>
          <a href="#" className="btn btn--link mt-2x d-block">
            Do it later
          </a>
        </div>
      </div>
    </div>
    {/* Congratulation, complete certificate modal */}
    <div className="modal modal--md d-none">
      <div className="modal__body">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <img
                src="/images/confetti.png"
                alt="Confetti"
                title="Confetti"
                className="modal-confetti"
              />
              <img
                src="/images/illus-award.png"
                title="Course Completed"
                alt="Course Completed"
                className="illus-award"
              />
              <h3 className="mb-4x modal__title mt-12x">Congratulations!</h3>
              <p className="mb-8x">
                You have been certified for completing
                <br />
                <b>Level 1: Python Learning Path</b>
              </p>
              <img
                src="/images/illus-certificate.svg"
                alt="Certificate"
                title="Certificate"
              />
              <div className="mt-8x">
                <a href="#" className="btn btn--primary">
                  Download/View the Certificate
                </a>
              </div>
              <a href="#" className="btn btn--link mt-4x d-block">
                Explore More Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Unlock PRO modal */}
    <div className="modal modal--md p-0x">
      <img
        src="/images/start-free-trials.svg"
        alt="Course Completed"
        title="Course Completed"
        className=""
      />
      <div className="modal__body p-7x">
        <div className="text-center">
          <h3 className="my-4x modal__title">
            Unlock all Courses by starting your FREE trial. Get started NOW!
          </h3>
          <div className="mt-8x">
            <a href="#" className="btn btn--primary btn--w-icon">
              Start Free Trial
              <FiArrowRight className="ml-4x" />
            </a>
          </div>
          <a href="#" className="btn btn--link mt-4x d-block">
            Return to Course
          </a>
        </div>
      </div>
    </div>
  </>
);

export default Modal;
