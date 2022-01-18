import React, { useState } from "react";
import AceEditor from "react-ace-cdn";
import { Button } from "react-distributed-forms";

import ChallengeApi from "services/api/ChallengeApi";

import { CodeBlock } from "../../Data";
import Loading from "./Loading";

const Code = () => {
  const [show, setShow] = useState(true);
  const [isClicked, setIsClicked] = useState("");
  const [item, setItem] = useState("");
  const [editor, setEditor] = useState(null);

  const [codeValue, setCodeValue] = useState(CodeBlock.code);
  const [isOutputError, setIsOutputError] = useState(false);
  const [output, setOutput] = useState("");

  const [isActive, setIsActive] = useState(false);

  const onChange = (newValue) => {
    setCodeValue(newValue);
    setIsActive(true);
  };

  const submitCode = async () => {
    const data = {
      challengeId: "1",
      saveProgress: false,
      code: codeValue,
    };

    try {
      const response = await ChallengeApi.post(data);
      const res = response.data;

      const outputValue = parseInt(res?.data?.actualOutput, 10);

      setItem(outputValue);

      setIsOutputError(!(outputValue === CodeBlock.expected_value));
      setOutput(outputValue);
      setShow(false);
    } catch (e) {
      setIsOutputError(false);
      setOutput("");
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

  return (
    <div>
      <div className="quiz__title">
        <h3 className="color-secondary">
          Step {CodeBlock.step}: {CodeBlock.label}
        </h3>
        <div className="quiz-question">{CodeBlock.title}</div>
      </div>
      <div className="editor__header" />
      <div className="editor__block">
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
        <div className="editor__footer">
          <div
            className={
              show ? `d-flex justify-content-end px-8x mb-11x` : "d-none "
            }
          >
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
                  value={CodeBlock.expected_value}
                  placeholder={CodeBlock.expected_value}
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
                  value={output}
                  placeholder={output}
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
                  className="btn btn--primary btn--sm  w-sm-100 "
                  name="next"
                >
                  Retry
                </button>
              ) : (
                <Button className="btn btn--primary btn--sm" name="next">
                  Submit & Go to Final Step
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
