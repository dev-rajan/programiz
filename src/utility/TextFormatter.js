const getSummaryText = (obj, key) => {
  let summaryText = "";

  if (key in obj) return obj[key];
  for (const n of Object.values(obj)
    .filter(Boolean)
    .filter((v) => typeof v === "object" && v.type !== "heading-1")) {
    const textValue = getSummaryText(n, key);

    if (textValue) summaryText += textValue;
  }

  return summaryText;
};

export default getSummaryText;
