import { useRouter } from "next/router";
import React from "react";

const DropdownMenuItems = ({
  logo,
  level,
  chaptersCount,
  title,
  link,
  handleDropdown,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
    handleDropdown();
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      onKeyPress={() => {}}
      tabIndex={-1}
      className="dropdown-menu__item"
    >
      <img
        src={logo?.length !== 0 ? logo : "/images/noimage.png"}
        alt="Course"
        title="Course"
        className="mr-4x"
      />
      <div>
        <h5>{title}</h5>
        <span className="fs-tiny">
          {chaptersCount} chapters &nbsp;•&nbsp; Level:
          {level?.title}
        </span>
      </div>
    </div>
  );
};

export default DropdownMenuItems;
