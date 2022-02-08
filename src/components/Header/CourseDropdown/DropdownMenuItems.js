import React from "react";
import { useRouter } from "next/router";

const DropdownMenuItems = ({
  logo,
  chaptersCount,
  title,
  link,
  handleDropdown,
  courseCount,
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
        src={logo?.length !== 0 && logo !== null ? logo : "/images/noimage.png"}
        alt="Course"
        title="Course"
        className="mr-4x"
      />
      <div>
        <h5>{title}</h5>
        <span className="fs-tiny">
          {chaptersCount !== undefined ? `${chaptersCount} chapters` : ""}
          {courseCount !== undefined ? `${courseCount} courses` : ""}
        </span>
      </div>
    </div>
  );
};

export default DropdownMenuItems;
