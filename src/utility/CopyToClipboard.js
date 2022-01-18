const copyToClipboard = (entryText, LearnData) => {
  navigator.clipboard.writeText(entryText);
  window.analytics.track("Share Link Copied", {
    learning_path: LearnData[entryText.slice(-1) - 1].title,
  });
};

export default copyToClipboard;
