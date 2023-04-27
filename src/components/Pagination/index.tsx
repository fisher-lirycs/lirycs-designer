import React, { useState, useCallback } from "react";
import classNames from "classnames";
import { PaginationItem } from "./Item";

export interface PaginationProps {
  allPages: number;
  defaultActivePage?: number;
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

  return (
    <ul className={classes}>
      {new Array<number>(allPages).map((number, index) => (
        <PaginationItem
          key={number}
          active={activeNumber}
          number={number}
          onClick={handleClick}
        />
      ))}
    </ul>
  );
};

Pagination.defaultProps = {
  size: "regular",
  defaultActivePage: 1,
};

export default Pagination;
