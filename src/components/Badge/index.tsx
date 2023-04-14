import React from "react";
import classNames from "classnames";
import { Theme } from "../../constants/Type";

export interface BadgeProps {
  bg?: Theme;
  pill?: boolean;
  text?: Theme;
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  bg,
  pill,
  text,
  className,
  children,
}) => {
  const classes = classNames("badge", className, {
    [`bg-${bg}`]: bg,
    [`text-${text}`]: text,
    [`rounded-pill`]: pill,
  });
  return <span className={classes}>{children}</span>;
};

Badge.defaultProps = {
  bg: "primary",
};
export default Badge;
