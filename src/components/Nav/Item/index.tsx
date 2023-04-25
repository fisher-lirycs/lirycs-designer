import React, { useContext } from "react";
import classNames from "classnames";
import { NavContext } from "..";

export interface NavItemProps {
  disabled?: boolean;
  eventKey: string;
  className?: string;
  children?: React.ReactNode;
}

export const NavItem: React.FC<NavItemProps> = ({
  disabled,
  eventKey,
  className,
  children,
}) => {
  const context = useContext(NavContext);
  const classes = classNames("nav-item", className);

  const btnclasses = classNames("nav-btn", {
    [`active`]: context.activeKey === eventKey,
    [`disabled`]: disabled,
  });

  return (
    <div className={classes}>
      <button
        className={btnclasses}
        disabled={disabled}
        onClick={() => {
          context.onSelect && context.onSelect(eventKey);
        }}
      >
        {children}
      </button>
    </div>
  );
};
