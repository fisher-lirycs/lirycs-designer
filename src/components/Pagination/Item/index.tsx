import React from "react";
import classNames from "classnames";

export interface PaginationItemProps {
  active: number;
  number: number;
  activeLabel?: string;
  disabled?: boolean;
  onClick: (pageNumber: number) => void;
  className?: string;
}

export const PaginationItem: React.FC<PaginationItemProps> = ({
  active,
  number,
  disabled,
  onClick,
  className,
}) => {
  const classes = classNames("page-item", className, {
    [`active`]: active === number,
  });

  return (
    <li className={classes}>
      {active === number ? (
        <span className="page-btn">
          {number}
          <span className="visually-hidden">(current)</span>
        </span>
      ) : (
        <button
          className="page-btn"
          onClick={() => onClick(number)}
          disabled={disabled}
        >
          {number}
        </button>
      )}
    </li>
  );
};
