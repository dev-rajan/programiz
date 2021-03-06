import React from "react";

import Progress from "./Progress";
import { DASHBOARD_APP_ROUTES } from "constants/app-routes";
import { DashboardRoute } from "components/DashboardLink";

const Cards = ({ title, slug, onTimeEnd, isActive, handleSelect, idx }) => {
  const onClick = () => {
    window.analytics.track(`Enroll For Free Button Clicked`, {
      learning_path: title,
      source: "Homepage Card",
    });
  };

  return (
    <div
      data-idx={idx}
      onClick={handleSelect}
      role="button"
      onKeyPress={() => {}}
      tabIndex={-1}
    >
      <div
        className={`card-path learning__path border p-4   ${
          isActive ? "active" : null
        }
        `}
      >
        <p className="mb-0">{title}</p>
        {isActive ? (
          <>
            <DashboardRoute
              title="Enroll for Free"
              href={
                idx === 1 ? DASHBOARD_APP_ROUTES.C : DASHBOARD_APP_ROUTES.PYTHON
              }
              onClick={onClick}
              className="btn btn--primary btn--sm btn--block mt-3 text-white"
            >
              Enroll for Free
            </DashboardRoute>
            <Progress onTimeEnd={onTimeEnd} />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cards;
