import React from "react";
import classNames from "classnames";

export interface PaginationPrevProps {
  active: number;
  mark?: string;
  onClick: (pageNumber: number) => void;
  className?: string;
}

export const PaginationPrev: React.FC<PaginationPrevProps> = ({
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
        onClick={() => onClick(active - 1)}
        disabled={active === 1}
      >
        <span aria-hidden="true">{mark}</span>
        <span className="visually-hidden">Prev</span>
      </button>
    </li>
  );
};

PaginationPrev.defaultProps = {
  mark: "‹",
};
