import React from "react";
import Link from "next/link";
import List from "./List";

const Enterprise = ({ Items }) => {
  return (
    <div className="col-lg-4 col-sm-6 pl-4x">
      <div className="card  d-flex align-items-end pricing__card">
        <div>
          <h4 className="color-secondary mb-2x">ENTERPRISE</h4>

          <p className="mb-0x">
            Looking to upgrade yout team’s skill, react out to us and we will
            get back to you soon.
          </p>
          <hr className="my-8x" />
          <ul>
            {Items?.map((a) => (
              <List key={a.id} {...a} />
            ))}
          </ul>
          {/* <hr /> */}
          <Link href="/enterprise">
            <a className="btn btn--primary btn--sm btn--block">Get a Quote</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
