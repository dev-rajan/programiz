import { useContext } from "react";
import { CatalogContext } from "contextApi/CatalogContext";

const BackDrop = () => {
  const { showDropDown } = useContext(CatalogContext);

  return (
    <div
      className={`modal__backdrop modal__backdrop--dropdown d-none d-lg-block ${
        showDropDown ? "show" : ""
      }`}
    ></div>
  );
};

export default BackDrop;
