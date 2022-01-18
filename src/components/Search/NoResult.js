import React from "react";

const NoResult = ({ extraClass }) => {
  return (
    <div className="no-result-found text-center py-8x">
      <img
        src="/images/search-no-result.svg"
        alt="No result found"
        title="No result found"
        className="mb-6x"
      />
      <p className="fs-h3main mb-2x text-medium">No Results Found</p>
      <p className={`${extraClass}`}>Try again with different keyword.</p>
    </div>
  );
};

export default NoResult;
