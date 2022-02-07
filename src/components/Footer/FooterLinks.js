import React from "react";
import RouteLink from "./RouteLink";
import Link from "next/link";

const FooterLinks = ({ data }) => {
  return (
    <div className="col-lg-6">
      <div className="row footer-nav">
        <div className="col-md-4 col-6">
          <h4>{data?.languages?.heading}</h4>
          <nav>
            <ul>
              {data?.languages?.list?.map((a) => (
                <RouteLink key={a.id} {...a} />
              ))}
              {/* <li>
                <Link href="/enterprise">
                  <a>Request a Course</a>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
        <div className="col-md-4 col-6">
          <h4>{data?.resources?.heading}</h4>
          <nav>
            <ul>
              {data?.resources?.list?.map((a) => (
                <RouteLink key={a.id} {...a} target="_blank" />
              ))}
            </ul>
          </nav>
        </div>
        <div className="col-md-4 col-6">
          <h4>{data?.company?.heading}</h4>
          <nav>
            <ul>
              {data?.company?.list?.map((a) => (
                <RouteLink key={a.id} {...a} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
