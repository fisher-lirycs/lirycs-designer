import React from "react";
import classNames from "classnames";

export interface PaginationFirstProps {
  active: number;
  mark?: string;
  onClick: (pageNumber: number) => void;
  className?: string;
}

export const PaginationFist: React.FC<PaginationFirstProps> = ({
  active,
  mark,
  onClick,
  className,
}) => {
  const classes = classNames("page-item", className, {
    [`disabled`]: active === 1,
  });

  return (
    <li className={classes}>
      <button
        className="page-btn"
        onClick={() => onClick(1)}
        disabled={active === 1}
      >
        <span aria-hidden="true">{mark}</span>
        <span className="visually-hidden">First</span>
      </button>
    </li>
  );
};

PaginationFist.defaultProps = {
  mark: "«",
};
