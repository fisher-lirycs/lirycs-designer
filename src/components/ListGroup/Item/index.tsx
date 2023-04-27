import React from "react";
import classNames from "classnames";
import { Theme } from "../../../constants/Type";

export interface ListGroupItemProps {
  action?: boolean;
  active?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  theme?: Theme;
  className?: string;
  children: React.ReactNode;
}

export const ListGroupItem: React.FC<ListGroupItemProps> = ({
  action,
  active,
  disabled,
  href,
  onClick,
  theme,
  className,
  children,
}) => {
  const classes = classNames("list-group-item", className, {
    [`active`]: active,
    [`disabled`]: disabled,
    [`list-group-item-${theme}`]: theme,
    [`list-group-item-action`]: action,
  });

  let tabIndex: number | undefined;
  if (disabled) {
    tabIndex = -1;
  }

  return (
    <>
      {action ? (
        href ? (
          <a
            href={href}
            className={classes}
            tabIndex={tabIndex}
            aria-disabled={disabled}
          >
            {children}
          </a>
        ) : (
          <button
            type="button"
            className={classes}
            onClick={onClick}
            disabled={disabled}
            tabIndex={tabIndex}
            aria-disabled={disabled}
          >
            {children}
          </button>
        )
      ) : (
        <div className={classes} tabIndex={tabIndex} aria-disabled={disabled}>
          {children}
        </div>
      )}
    </>
  );
};
