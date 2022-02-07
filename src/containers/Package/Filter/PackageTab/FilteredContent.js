import React from "react";
import Cards from "./Cards";

const FilteredContent = ({ filteredData }) => {
  return (
    <div className="tab-content mt-lg-0 mt-3" id="v-pills-tabContent">
      <div className="tab-pane fade show active">
        {filteredData?.map((a) => (
          <Cards key={a.slug} {...a} />
        ))}
      </div>
    </div>
  );
};

export default FilteredContent;
