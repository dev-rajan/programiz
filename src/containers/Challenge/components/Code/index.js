import React, { useEffect, useMemo, useState } from "react";
import { Form } from "react-distributed-forms";

import Code from "./ChallengeCode";

import Success from "containers/Landing/component/Quiz/Success";
import Completed from "containers/Landing/component/Quiz/Completed";
import { DASHBOARD_APP_ROUTES } from "constants/app-routes";

import Medal from "../../../../assets/images/medal.svg";
import { FiArrowRight } from "react-icons/fi";
import ChallengeEditor from "./ChallengeEditor";
import Tabs, { TABS } from "./ChallengeMobile/Tabs";
import Desc from "./ChallengeDescription";

function getNumberWithOrdinal(n) {
  var s = ["th", "st", "nd", "rd"],
    v = n % 100;

  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

const getValue = (v) => Math.ceil(v / 2) - (v % 2);

const ChallengeSuccess = ({ step }) => (
  <div>
    <div className=" challenge__result pt-21x pb-26x">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Success
            isMounted={true}
            extraClass="text-white"
            title={`Challenge ${step} Completed`}
            message={`Great work on completing the ${getNumberWithOrdinal(
              step
            )} Challenge. Let’s try one more and test your knowledge.`}
            btnText={`Take Challenge ${step + 1}`}
            arrow={<FiArrowRight size={24} />}
          />
        </div>
      </div>
    </div>
  </div>
);

const ChallengeComplete = ({ step, slug }) => (
  <div>
    <div className=" challenge__result pt-21x pb-26x">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Completed
            extraClass="text-white"
            img={Medal}
            title={`Challenge ${step} Completed`}
            message="Congratulations on completing all Challenges. Now Enroll in our Course Challenge and take part in 100+ more challenges."
            btnText="Enroll for FREE!"
            enrollPath={`${DASHBOARD_APP_ROUTES.COURSE}/${slug}`}
            externalLink
            arrow={<FiArrowRight size={24} />}
          />
        </div>
      </div>
    </div>
  </div>
);

const CodeSection = ({ isOutputError, setIsOutputError, data }) => {
  return (
    <div className="d-lg-flex d-none">
      <Desc data={data} />
      <div className="challenge__code-editor">
        <Code
          key={data.id}
          isOutputError={isOutputError}
          setIsOutputError={setIsOutputError}
          code={data.codeOutline}
          challengeId={data.id}
        />
      </div>
    </div>
  );
};

const TabCodeSection = ({
  toggleTab,
  activeTab,
  isOutputError,
  setIsOutputError,
  data,
}) => (
  <div className="d-block d-lg-none">
    <Tabs toggleTab={toggleTab} activeTab={activeTab} />
    <div className="tab-content" id="pills-tabContent">
      {activeTab === TABS.DESCRIPTION ? (
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <Desc
            onStartCodingClick={() => toggleTab(TABS.COMPILER)}
            data={data}
          />
        </div>
      ) : (
        <div
          className="tab-pane fade show active"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <Code
            key={data.id}
            isOutputError={isOutputError}
            setIsOutputError={setIsOutputError}
            code={data.codeOutline}
            challengeId={data.id}
          />
        </div>
      )}
    </div>
  </div>
);

const ViewContainer = ({
  data,
  children,
  handleSubmit,
  currentChallengeIndex,
}) => {
  return (
    <div className="challenge__tryout">
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <ChallengeEditor
            currentChallengeIndex={currentChallengeIndex}
            step={data.step}
            label={data.title}
          >
            {children}
          </ChallengeEditor>
        </Form>
      </div>
    </div>
  );
};

const index = ({ challengeData, slug }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isOutputError, setIsOutputError] = useState(false);
  const [activeTab, setActiveTab] = useState(TABS.DESCRIPTION);
  const [data, setData] = useState(challengeData[0]);

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = ({ name }) => {
    if (isOutputError !== true) {
      if (name === "next") {
        if (currentPage + 1) {
          setCurrentPage(currentPage + 1);
        }
      }
    }
  };

  useEffect(() => {
    const challengeDataIndex = getValue(currentPage);

    setData(challengeData[challengeDataIndex]);
  }, [currentPage]);

  const currentChallengeIndex = useMemo(
    () => getValue(currentPage),
    [currentPage]
  );

  if (challengeData.length === 0) {
    return null;
  }

  if (
    currentChallengeIndex === challengeData.length - 1 &&
    currentPage % 2 === 1
  ) {
    return (
      <ViewContainer
        currentChallengeIndex={currentChallengeIndex}
        data={data}
        handleSubmit={handleSubmit}
      >
        <ChallengeComplete slug={slug} step={currentChallengeIndex + 1} />
      </ViewContainer>
    );
  }

  if (currentPage % 2 === 1) {
    return (
      <ViewContainer
        currentChallengeIndex={currentChallengeIndex}
        data={data}
        handleSubmit={handleSubmit}
      >
        <ChallengeSuccess step={currentChallengeIndex + 1} />
      </ViewContainer>
    );
  }

  return (
    <ViewContainer
      key={currentChallengeIndex}
      currentChallengeIndex={currentChallengeIndex}
      data={data}
      handleSubmit={handleSubmit}
    >
      <>
        <CodeSection
          key={currentChallengeIndex}
          isOutputError={isOutputError}
          setIsOutputError={setIsOutputError}
          data={data}
        />

        <TabCodeSection
          key={currentChallengeIndex}
          toggleTab={toggleTab}
          activeTab={activeTab}
          isOutputError={isOutputError}
          setIsOutputError={setIsOutputError}
          data={data}
        />
      </>
    </ViewContainer>
  );
};

export default index;
