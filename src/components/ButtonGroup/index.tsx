import React from "react";
import classNames from "classnames";

export interface ButtomGroupProps {
  role?: string;
  size?: "normal" | "small" | "large";
  vertical?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const ButtonGroup: React.FC<ButtomGroupProps> = ({
  role,
  size,
  vertical,
  className,
  children,
}) => {
  const classes = classNames(className, {
    [`btn-group`]: !vertical,
    [`btn-group-vertical`]: vertical,
    [`btn-group-lg`]: size === "large",
    [`btn-group-sm`]: size === "small",
  });
  return (
    <div role={role} className={classes}>
      {children}
    </div>
  );
};

ButtonGroup.defaultProps = {
  role: "group",
  size: "normal",
};

export default ButtonGroup;
