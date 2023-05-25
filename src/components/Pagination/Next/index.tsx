import React from "react";
import classNames from "classnames";

export interface PaginationNextProps {
  active: number;
  allPages: number;
  mark?: string;
  onClick: (pageNumber: number) => void;
  className?: string;
}

export const PaginationNext: React.FC<PaginationNextProps> = ({
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
        onClick={() => onClick(active + 1)}
        disabled={active === allPages}
      >
        <span aria-hidden="true">{mark}</span>
        <span className="visually-hidden">Next</span>
      </button>
    </li>
  );
};

PaginationNext.defaultProps = {
  mark: "›",
};
