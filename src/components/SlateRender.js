import React from "react";
import AceEditor from "react-ace-cdn";

import { LESSON_TYPES, CODE_TYPES } from "constants/consts";
import { isObjectEmpty } from "utility/helper";

const ContentRender = ({
  content,
  contentType,
  courseTitle,
  compilerMode,
  handleCompilerCode,
  setTryLessonCode,
}) => {
  const highLightingLines = [];

  const contentJson = JSON.parse(content);
  const nodes = [...contentJson.document.nodes];
  const renderMarks = (marks, text) => {
    let textWithMarks = text;

    marks.forEach((mark) => {
      textWithMarks = renderMark(mark.type, textWithMarks);
    });

    return textWithMarks;
  };
  const getLeafValue = (nodes, isBold) => {
    let text = "";

    for (const innerNode of nodes) {
      for (const leaf of innerNode.leaves) {
        text += isBold ? leaf.text : leaf.text;
      }
    }

    return text;
  };

  const renderMark = (mark, text) => {
    switch (mark) {
      case "code":
        return (
          <code className="challenge-snippet nonexecutable-code">{text}</code>
        );

      case "samp":
        return <samp>{text}</samp>;

      case "bold":
        return <strong>{text}</strong>;

      default:
        return text;
    }
  };

  const renderLeaf = (leaf) => {
    if (leaf.marks && leaf.marks.length > 0) {
      return renderMarks(leaf.marks, leaf.text);
    }

    return leaf.text;
  };

  const renderSlateNodes = (nodes) => {
    return nodes.map((node, i) => (
      <React.Fragment key={i + 1}>{renderSlateNode(node)}</React.Fragment>
    ));
  };

  const renderSlateNode = (node) => {
    if (node && node.object && node.object === "text") {
      return node.leaves.map((leaf, i) => (
        <React.Fragment key={i + 1}>{renderLeaf(leaf)}</React.Fragment>
      ));
    }

    if (node && node.type === "link" && node.object === "inline") {
      const urlPattern =
        /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gm;
      const result = urlPattern.test(node?.data?.href);

      return (
        <React.Fragment>
          <span>
            {result ? (
              <a
                href={node?.data.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {renderSlateNodes(node.nodes)}
              </a>
            ) : node?.data?.href ? (
              <a
                href={`https://programiz.com${node.data.href}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                {renderSlateNodes(node.nodes)}
              </a>
            ) : null}
          </span>
        </React.Fragment>
      );
    }

    if (node?.type === "line") {
      return <React.Fragment>{renderSlateNodes(node.nodes)}</React.Fragment>;
    }

    if (node?.type === "sample-output") {
      return (
        <pre className="sample-output ">
          <code>{renderSlateNodes(node.nodes)}</code>
        </pre>
      );
    }

    if (node?.type === "code") {
      let editorCode = "";
      let lineCount = -1;

      if (node?.nodes && node?.nodes.length) {
        for (const content of node.nodes) {
          if (content?.data && !isObjectEmpty(content?.data)) {
            const dataValues = Object.values(content?.data);

            if (dataValues.includes("line-highlight")) {
              const leafValue = getLeafValue(content?.nodes, true);

              editorCode += leafValue;
              const codeSplit = leafValue.split("\n");

              for (let i = 0; i < codeSplit.length; i++) {
                lineCount += 1;
                highLightingLines.push(lineCount);
              }
            } else {
              const leafValue = getLeafValue(content?.nodes, false);

              editorCode += leafValue;
              lineCount += leafValue.split("\n").length - 1;
            }
          } else if (!content?.nodes && content?.leaves) {
            for (const leaf of content.leaves) {
              editorCode += leaf.text;
              lineCount += leaf.text.split("\n").length - 1;
            }
          }
        }
      }

      const minLines = calculateLinesOfCodeEditor(editorCode);

      return (
        <pre className="code">
          <AceEditor
            onLoad={() => {
              const layers =
                document.querySelectorAll(".ace_text-layer")[0].children;
              const layerToStyle = Array.from(layers).filter((layer, index) =>
                highLightingLines.includes(index)
              );

              for (const layer of layerToStyle) {
                const layerr = layer;

                layerr.style.background = "#1a1a1a";
              }
            }}
            mode={compilerMode ? compilerMode : "python"}
            width="100%"
            maxLines={minLines}
            fontSize={14}
            value={editorCode}
            theme="solarized_dark"
            style={{ background: "#2d2f34" }}
            name={`TERMINAL`}
            wrapEnabled={true}
            editorProps={{ $blockScrolling: true }}
            showPrintMargin={true}
            showGutter={false}
            highlightActiveLine={false}
            readOnly={true}
            setOptions={{
              fontFamily: "Droid Sans Mono",
            }}
          />
          {/* <code ref={aceEditor}>{renderSlateNodes(node.nodes)}</code> */}
          <button
            className="btn btn--run-code"
            type="button"
            name="tryYourself"
            onClick={() => {
              setTryLessonCode && setTryLessonCode(Date.now());
              handleCompilerCode &&
                handleCompilerCode(editorCode, CODE_TYPES.COMPILER);
            }}
          >
            Run Code &nbsp;&gt;&gt;
          </button>
        </pre>
      );
    }

    if (node?.type === "pre") {
      return (
        <pre
          className={`${
            contentType == LESSON_TYPES.CHALLENGE ? "challenge-snippet" : ""
          } nonexecutable-code`}
        >
          <code>{renderSlateNodes(node.nodes)}</code>
        </pre>
      );
    }

    if (node?.type === "nonexecutable-code") {
      return (
        <pre
          className={`${
            contentType == LESSON_TYPES.CHALLENGE ? "challenge-snippet" : ""
          } nonexecutable-code`}
        >
          <code>{renderSlateNodes(node?.nodes)}</code>
        </pre>
      );
    }

    if (node?.type === "executable-code") {
      return (
        <pre className="code">
          <code>{renderSlateNodes(node?.nodes)}</code>
        </pre>
      );
    }

    if (node?.type === "ul-list") {
      return <ul>{renderSlateNodes(node?.nodes)}</ul>;
    }

    if (node?.type === "ol-list") {
      return <ol>{renderSlateNodes(node?.nodes)}</ol>;
    }

    if (node?.type === "list-item") {
      return (
        <li className="text-white-shade">{renderSlateNodes(node?.nodes)}</li>
      );
    }

    if (node?.type === "table_cell") {
      return <td>{renderSlateNodes(node?.nodes)}</td>;
    }

    if (node?.type === "table_row") {
      return <tr>{renderSlateNodes(node?.nodes)}</tr>;
    }

    if (node?.type === "table") {
      return (
        <table className="slate-table">
          <tbody>
            {node?.nodes.map((row, nodeIndex) => {
              return (
                <>
                  {nodeIndex === 0 ? (
                    <tr key={`node-${nodeIndex}`}>
                      {row.nodes.map((description, descIndex) => {
                        return (
                          <th key={`description-${descIndex}`}>
                            {renderSlateNodes(description.nodes)}
                          </th>
                        );
                      })}
                    </tr>
                  ) : (
                    <tr key={`node-${nodeIndex}`}>
                      {row.nodes.map((description, descIndex) => {
                        return (
                          <td key={`description-${descIndex}`}>
                            {renderSlateNodes(description.nodes)}
                          </td>
                        );
                      })}
                    </tr>
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      );
    }

    if (node?.type === "heading-1") {
      return <h1>{renderSlateNodes(node?.nodes)}</h1>;
    }
    if (node?.type === "heading-2") {
      return <h2 className="text-white">{renderSlateNodes(node?.nodes)}</h2>;
    }
    if (node?.type === "heading-3") {
      return <h3 className="text-white">{renderSlateNodes(node?.nodes)}</h3>;
    }
    if (node?.type === "heading-4") {
      return <h4 className="text-white">{renderSlateNodes(node?.nodes)}</h4>;
    }
    if (node?.type === "paragraph") {
      return (
        <p className="text-white-shade">{renderSlateNodes(node?.nodes)}</p>
      );
    }
  };

  const calculateLinesOfCodeEditor = (txt) => {
    const count = txt ? (txt.match(/\n/g) || []).length + 1 : 4;

    return count;
  };

  return (
    <div className="slate-render">
      {nodes.map((node, i) => {
        return (
          <React.Fragment key={i + 1}>{renderSlateNode(node)}</React.Fragment>
        );
      })}
    </div>
  );
};

export default ContentRender;
