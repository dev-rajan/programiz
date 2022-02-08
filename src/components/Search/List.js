import { useRouter } from "next/router";
import React from "react";

const List = ({ contentInfo, linkTo }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${linkTo}/${contentInfo.slug}`);
  };

  return (
    <div onClick={onClick} className="search__item" role="presentation">
      <div className="search__link">
        <div className="d-flex align-items-start">
          <img
            src={
              contentInfo?.logo !== null && contentInfo?.logo.length !== 0
                ? contentInfo?.logo
                : "/images/noimage.png"
            }
            alt={contentInfo?.title}
            className="mr-5x search__img"
          />
          <div>
            <p className="search-title fs-article mb-1x">
              {contentInfo?.title}
            </p>
            <p className="search-desc fs-body14 color-text-caption mb-1x">
              Learn every essential data skill with this learning path and get a
              professional certificate at the end of the Course.
            </p>
            <span className="search-meta text-tiny text-medium color-text-caption">
              {contentInfo?.chaptersCount} Chapters &nbsp; •&nbsp; Level:
              {contentInfo?.level?.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
