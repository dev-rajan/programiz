import dynamic from "next/dynamic";

const AceEditor = dynamic(
  async () => {
    const reactAce = await import("react-ace");

    const ace = await import("ace-builds/src-noconflict/ace");

    ace.config.set(
      "basePath",
      "https://cdn.jsdelivr.net/npm/ace-builds@1.4.13/src-noconflict/"
    );

    import("ace-builds/webpack-resolver");

    return reactAce;
  },
  {
    ssr: false,
  }
);

const CodeEditor = (props) => {
  return <AceEditor {...props} />;
};

export default CodeEditor;
