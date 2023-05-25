import React from "react";
import classNames from "classnames";

export interface PaginationLastProps {
  active: number;
  allPages: number;
  mark?: string;
  onClick: (pageNumber: number) => void;
  className?: string;
}

export const PaginationLast: React.FC<PaginationLastProps> = ({
  active,
  allPages,
  mark,
  onClick,
  className,
}) => {
  const classes = classNames("page-item", className, {
    [`disabled`]: active === allPages,
  });

  return (
    <li className={classes}>
      <button
        className="page-btn"
        onClick={() => onClick(allPages)}
        disabled={active === allPages}
      >
        <span aria-hidden="true">{mark}</span>
        <span className="visually-hidden">Last</span>
      </button>
    </li>
  );
};

PaginationLast.defaultProps = {
  mark: "»",
};
