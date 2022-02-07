import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

import copyToClipboard from "utility/CopyToClipboard";
import { LearnData } from "containers/Landing/Data";

const ShareModal = ({ show, setShow }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);
  const segmentForSocialMedia = (e, platform) => {
    window.analytics.track(`Learning Path Shared`, {
      socialmedia_platform: platform,
      learning_path: LearnData[url.slice(-1) - 1]?.title,
    });
  };

  return (
    <div className={`modal__dimmer ${show ? "" : "d-none"}`}>
      <div
        className="modal fade modal__sm"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-right">
              <div
                onClick={() => setShow(false)}
                role="presentation"
                tabIndex="-1"
              >
                <FiX className="ml-2x btn-icon pointer" size={26} />
              </div>
            </div>
            <div className="modal-body text-center px-4">
              <div className="row justify-content-center">
                <div className="col-md-8 ">
                  <h3>Share this course with your social community</h3>
                </div>
              </div>
              <div className="d-flex justify-content-center py-5">
                <div className="social__icon px-2">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${url}`}
                    onClick={(e) => segmentForSocialMedia(e, "Twitter")}
                  >
                    <img src="/images/twitter.svg" alt="twitter" />
                  </a>
                </div>
                <div className="social__icon px-2">
                  <a
                    href={`https://instagram.com`}
                    onClick={(e) => segmentForSocialMedia(e, "Instagram")}
                  >
                    <img src="/images/instagram.svg" alt="twitter" />
                  </a>
                </div>
                <div className="social__icon px-2">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                    onClick={(e) => segmentForSocialMedia(e, "Facebook")}
                  >
                    <img
                      src="/images/facebook.svg"
                      alt="facebook"
                      title="facebook"
                    />
                  </a>
                </div>
              </div>
              <div>
                <span>or copy link</span>
              </div>
              <div className="link__block mb-4 mt-3 d-flex  w-100 p-2 rounded">
                <div className="w-100 text-left truncate">{url}</div>
                <div className="ms-auto">
                  <span
                    className="text-primary pointer btn-link"
                    onClick={() => copyToClipboard(url, LearnData)}
                    role="presentation"
                  >
                    Copy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
