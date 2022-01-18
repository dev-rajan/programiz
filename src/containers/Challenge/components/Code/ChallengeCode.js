import React, { useState } from "react";
import AceEditor from "react-ace-cdn";
import { Button } from "react-distributed-forms";

import ChallengeApi from "services/api/ChallengeApi";
import Loading from "containers/Landing/component/Quiz/Loading";

const Code = ({ isOutputError, setIsOutputError, code }) => {
  const [show, setShow] = useState(true);
  const [isClicked, setIsClicked] = useState("");
  const [item, setItem] = useState("");
  const [editor, setEditor] = useState(null);

  const [codeValue, setCodeValue] = useState(code);

  const [output, setOutput] = useState({});

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

      const actualOutput = parseInt(res?.data?.actualOutput, 10);
      const expectedOutput = parseInt(res?.data?.expectedOutput, 10);

      setItem(actualOutput);

      setIsOutputError(!(actualOutput === expectedOutput));
      setOutput({ actualOutput, expectedOutput });
    } catch (e) {
      setIsOutputError(false);
      setShow(false);
    }
  };

  const handleClick = () => {
    submitCode();
    setIsClicked(true);
  };

  return (
    <>
      <div className="editor__header" />
      <div className="challenge__editor">
        {typeof window != "undefined" && (
          <AceEditor
            onLoad={(e) => setEditor(e)}
            mode="python"
            theme="monokai"
            value={codeValue}
            onChange={onChange}
            highlightActiveLine
            name="challenge-editor"
            fontSize="14px"
            editorProps={{ $blockScrolling: true, wrap: 1 }}
            readOnly={isOutputError || !show}
            focus
          />
        )}
        <div className="editor__footer">
          <div
            className={
              show ? `d-flex justify-content-end px-10x mb-10x ` : "d-none "
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
                  className="btn btn--primary btn--sm  w-sm-100 "
                  name="next"
                >
                  Retry
                </button>
              ) : (
                <Button className="btn btn--primary btn--sm" name="next">
                  Submit & Go to Next Step
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Code;
