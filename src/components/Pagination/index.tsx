import React, { useState, useCallback, useEffect } from "react";
import classNames from "classnames";
import { PaginationItem } from "./Item";
import { PaginationFist } from "./First";
import { PaginationLast } from "./Last";
import { PaginationPrev } from "./Prev";
import { PaginationNext } from "./Next";

export interface PaginationProps {
  allPages: number;
  defaultActivePage?: number;
  displyPageCount?: number;
  hasPrevAndNextBtn?: boolean;
  hasFirstAndLastBtn?: boolean;
  size?: "small" | "lagger" | "regular";
  onSelect?: (pageNumber: number) => void;
  className?: string;
  children: React.ReactNode;
}

export const Pagination: React.FC<PaginationProps> = ({
  allPages,
  defaultActivePage,
  displyPageCount,
  hasPrevAndNextBtn,
  hasFirstAndLastBtn,
  size,
  onSelect,
  className,
  children,
}) => {
  const classes = classNames("pagination", className, {
    [`pagination-lg`]: size === "lagger",
    [`pagination-sm`]: size === "small",
  });

  const [activeNumber, setActiveNumber] = useState(defaultActivePage || 1);
  const handleClick = useCallback(
    (pageNumber: number) => {
      setActiveNumber(pageNumber);
      onSelect && onSelect(pageNumber);
    },
    [onSelect]
  );

  const [displayPages, setDisplayPages] = useState<Array<number>>();
  useEffect(() => {
    const viewCount = displyPageCount as number;
    let pages: Array<number> = [];
    if (allPages <= viewCount) {
      for (let index = 1; index <= allPages; index++) {
        pages.push(index);
      }
    } else {
      const halfDisplayPageNumber = Math.floor(viewCount / 2);
      if (activeNumber - halfDisplayPageNumber <= 0) {
        for (let index = 1; index <= viewCount; index++) {
          pages.push(index);
        }
      } else if (allPages - activeNumber <= halfDisplayPageNumber) {
        for (let index = allPages - viewCount + 1; index <= allPages; index++) {
          pages.push(index);
        }
      } else {
        for (
          let index = activeNumber - halfDisplayPageNumber;
          index <= activeNumber + halfDisplayPageNumber;
          index++
        ) {
          pages.push(index);
        }
      }
    }
    setDisplayPages(pages);
  }, [allPages, displyPageCount, activeNumber]);

  return (
    <>
      {displayPages && (
        <ul className={classes}>
          {hasFirstAndLastBtn && (
            <PaginationFist active={activeNumber} onClick={handleClick} />
          )}
          {hasPrevAndNextBtn && (
            <PaginationPrev active={activeNumber} onClick={handleClick} />
          )}
          {displayPages.map((pageNumber) => (
            <PaginationItem
              key={pageNumber}
              active={activeNumber}
              number={pageNumber}
              onClick={handleClick}
            />
          ))}
          {hasPrevAndNextBtn && (
            <PaginationNext
              active={activeNumber}
              allPages={allPages}
              onClick={handleClick}
            />
          )}
          {hasFirstAndLastBtn && (
            <PaginationLast
              active={activeNumber}
              allPages={allPages}
              onClick={handleClick}
            />
          )}
        </ul>
      )}
    </>
  );
};

Pagination.defaultProps = {
  size: "regular",
  defaultActivePage: 1,
  displyPageCount: 5,
};

export default Pagination;
