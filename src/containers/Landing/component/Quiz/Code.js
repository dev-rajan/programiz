import React, { useState, Fragment } from "react";
import { Button } from "react-distributed-forms";

import AceEditor from "components/CodeEditor";
import ChallengeApi from "services/Marketing/ChallengeApi";

import { CodeBlock } from "../../Data";
import Loading from "./Loading";

function getExpectedValue(testValues) {
  const errorValue = testValues.find((testValue) => !testValue.testPassed);

  return errorValue?.output;
}

const Code = ({ quizData }) => {
  const [show, setShow] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [item, setItem] = useState(null);
  const [editor, setEditor] = useState(null);

  const [codeValue, setCodeValue] = useState(
    quizData.contentDetails.codeOutline
  );
  const [isOutputError, setIsOutputError] = useState(false);
  const [output, setOutput] = useState({});

  const [isActive, setIsActive] = useState(false);

  const onChange = (newValue) => {
    setCodeValue(newValue);
    setIsActive(true);
  };

  const submitCode = async () => {
    const data = {
      challengeId: quizData.contentDetails.id,
      sectionContentPageId: quizData.sectionContentPageId,
      saveProgress: false,
      code: codeValue,
    };

    try {
      const response = await ChallengeApi.post(data);
      const res = response.data;

      const actualOutput = parseInt(res?.data?.actualOutput, 10);
      const expectedValue = getExpectedValue(res?.data?.tests);
      let expectedOutput = expectedValue;

      if (!expectedValue) {
        expectedOutput = actualOutput;
      }

      setItem(actualOutput);

      setIsOutputError(!(actualOutput === expectedOutput));
      setOutput({ actualOutput, expectedOutput });
      setShow(false);
    } catch (e) {
      setIsOutputError(false);
      setOutput({ actualOutput: 0, expectedOutput: 0 });
      setShow(false);
    }
  };

  const handleClick = () => {
    window.analytics.track(`Mock Code Ran`, {
      question: CodeBlock.title,
      submitted_code: codeValue,
      source: "Homepage Coding Challenge",
    });
    submitCode();
    setIsClicked(true);
  };

  const onEditorLoad = (e) => {
    setEditor(e);
  };

  return (
    <div className="d-flex flex-column h-100">
      <div className="quiz__title">
        <h3 className="color-secondary">
          Step {quizData.step}: {CodeBlock.label}
        </h3>
        <div className="quiz-question">{quizData.contentDetails.title}</div>
      </div>
      <div className="editor__header" />
      <div className="editor__block flex-grow-1">
        <AceEditor
          onLoad={(e) => setEditor(e)}
          mode="python"
          theme="monokai"
          value={codeValue}
          onChange={onChange}
          highlightActiveLine
          name="code-editor"
          height="325px"
          fontSize="14px"
          editorProps={{ $blockScrolling: true }}
          readOnly={isOutputError || !show}
          focus
        />
        {/* <div
          className={`compiler__loader ${
            isClicked === true && item === null
              ? "d-flex justify-content-center align-items-center"
              : "d-none"
          }`}
        >
          <Loading />
        </div> */}

        <div
          className={`mask ${isOutputError || !show ? null : "d-none"}`}
        ></div>

        <div className="editor__footer">
          <div className={show ? `run__code` : "d-none "}>
            <button
              type="button"
              disabled={!isActive}
              onClick={handleClick}
              className="btn btn--primary btn--sm text-center"
            >
              {isClicked === true && item === null ? <Loading /> : "Run Code"}
            </button>
          </div>
          <div
            className={
              show
                ? `d-none`
                : `d-block d-md-flex justify-content-between align-items-end editor__output `
            }
          >
            <div className="d-flex w-100">
              <div className="mr-3 w-100">
                <label
                  htmlFor="codeExpectedOutput"
                  className="text-white fs-5 fw-lighter"
                >
                  Expected Output
                </label>
                <input
                  id="codeExpectedOutput"
                  className="form-control form__control--dark me-2 form__control--sm "
                  type="text"
                  value={output.expectedOutput}
                  placeholder={output.expectedOutput}
                  disabled
                />
              </div>
              <div className="w-100">
                <label
                  htmlFor="codeActualOutput"
                  className="text-white fs-5 fw-lighter"
                >
                  Your Output
                </label>
                <input
                  id="codeActualOutput"
                  className="form-control form__control--dark me-2 form__control--sm "
                  type="text"
                  value={output.actualOutput}
                  placeholder={output.actualOutput}
                  disabled
                />
              </div>
            </div>

            <div className="ml-0 ml-md-4 mt-3 mt-md-0">
              {isOutputError ? (
                <button
                  onClick={() => {
                    editor?.focus();
                    setIsOutputError(false);
                    setShow(true);
                    setItem(null);
                    setIsClicked(false);
                  }}
                  type="button"
                  className="btn btn--primary btn--sm  w-sm-100 btn__large--width"
                  name="next"
                >
                  Retry
                </button>
              ) : (
                <Button className="btn btn--primary btn--sm" name="next">
                  Submit &amp; Go to Final Step
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
