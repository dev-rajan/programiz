import React from "react";

const Section = ({ title, desc, desc2, extraClass }) => {
  return (
    <section
      className={`section-padding ${extraClass} about__desc text-center`}
    >
      <div className="container">
        <h2 className="fs-h2main mb-4x">{title}</h2>
        <p className="mb-3" dangerouslySetInnerHTML={{ __html: desc }} />
        <p className="mb-0" dangerouslySetInnerHTML={{ __html: desc2 }} />
      </div>
    </section>
  );
};

export default Section;
