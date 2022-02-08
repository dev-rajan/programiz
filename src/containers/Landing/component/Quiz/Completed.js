import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import DashboardLink from "components/DashboardLink";

const LinkTag = ({ children, btnText, externalLink, href, ...props }) => {
  if (externalLink) {
    return (
      <DashboardLink title={btnText} href={href} {...props}>
        {children}
      </DashboardLink>
    );
  }

  return (
    <Link href={href}>
      <a title={btnText} {...props}>
        {children}
      </a>
    </Link>
  );
};

const Completed = ({
  img,
  title,
  message,
  btnText,
  extraClass,
  enrollPath,
  arrow,
  externalLink,
}) => {
  return (
    <div className="text-center completed__box">
      <div className="image">
        <Image alt={title} title={title} src={img} />
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h3 className={`mt-5x ${extraClass}`}>{title}</h3>
          <p className={`my-3 ${extraClass}`}>{message}</p>
          <LinkTag
            externalLink={externalLink}
            title={btnText}
            href={enrollPath}
          >
            <button
              type="button"
              className="btn btn--primary btn--sm d-flex mx-auto justify-content-center"
              name="next"
            >
              <span>{btnText} </span>
              {arrow}
            </button>
          </LinkTag>
        </div>
      </div>
    </div>
  );
};

export default Completed;
