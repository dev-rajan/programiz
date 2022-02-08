import React from "react";

import List from "containers/Pricing/Faq/List";

const TabContent = ({ Items }) => {
  return (
    <>
      <div id="general-scroll">
        <h2 className="mb-6x fs-h2main">{Items?.general?.title}</h2>
        <ul className="accordion accordion--border accordion--border--sm">
          {Items?.general?.list?.map((a) => (
            <List {...a} key={a.id} step={a.id} />
          ))}
        </ul>
      </div>

      <div id="account-scroll">
        <h2 className="mb-6x fs-h2main mt-5">{Items?.account?.title}</h2>
        <ul className="accordion accordion--border accordion--border--sm">
          {Items?.account?.list?.map((a) => (
            <List {...a} key={a.id} step={a.id} />
          ))}
        </ul>
      </div>

      <div id="certificate-scroll">
        <h2 className="mb-6x fs-h2main mt-5">{Items?.certificate?.title}</h2>
        <ul className="accordion accordion--border accordion--border--sm">
          {Items?.certificate?.list?.map((a) => (
            <List {...a} key={a.id} step={a.id} />
          ))}
        </ul>
      </div>

      <div id="content-scroll">
        <h2 className="mb-6x fs-h2main mt-5">{Items?.content?.title}</h2>
        <ul className="accordion accordion--border accordion--border--sm">
          {Items?.content?.list?.map((a) => (
            <List {...a} key={a.id} step={a.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TabContent;
