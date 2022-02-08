const handleScroll = (divId) => {
  const divElement = document.getElementById(`${divId}`);

  divElement.scrollIntoView({ behavior: "smooth" });
};

export default handleScroll;
