import React from "react";
import classNames from "classnames";
import { Theme } from "../../constants/Type";

export interface SpinnerProps {
  animation?: "border" | "grow";
  role?: string;
  size?: "regular" | "small";
  theme?: Theme;
  children?: React.ReactNode;
}

export const Spinner: React.FC<SpinnerProps> = ({
  animation,
  role,
  size,
  theme,
  children,
}) => {
  const classes = classNames({
    [`spinner-${animation}`]: animation,
    [`text-${theme}`]: theme,
    [`spinner-border-sm`]: animation === "border" && size === "small",
    [`spinner-grow-sm`]: animation === "grow" && size === "small",
  });
  return (
    <span role={role} className={classes}>
      {children}
    </span>
  );
};

Spinner.defaultProps = {
  animation: "border",
  size: "regular",
};
export default Spinner;
