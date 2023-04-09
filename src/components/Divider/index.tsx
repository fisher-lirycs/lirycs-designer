import React from "react";
import classNames from "classnames";
import { Theme } from "../../constants/Type";

export interface DividerProps {
  type?: "horizontal" | "vertical";
  theme?: Theme | "default";
  dashed?: boolean;
  orientation?: "left" | "center" | "right";
  plain?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Divider: React.FC<DividerProps> = ({
  type,
  theme,
  dashed,
  orientation,
  plain,
  className,
  children,
}) => {
  const classes = classNames("divider", className, {
    [`divider-${type}`]: type,
    [`divider-dashed`]: dashed,
    [`divider-with-text`]: children,
    [`divider-plain`]: children && plain,
    [`divider-with-text-${orientation}`]: children && orientation,
    [`divider-dash-with-text`]: children && dashed,
    [`divider-${theme}`]: theme,
  });
  return (
    <div className={classes}>
      {children && <span className={"divider-inner-text"}>{children}</span>}
    </div>
  );
};

Divider.defaultProps = {
  type: "horizontal",
  theme: "default",
};

export default Divider;
