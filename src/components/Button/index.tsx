import React, { FC } from "react";
import classNames from "classnames";
import { Size, Theme } from "../../constants/Type";
import { IconTypes } from "../../constants/Icon";
import Icon from "../Icon";

export type ButtonProps = Partial<
  {
    type?: "normal" | "outline" | "dash";
    theme?: Theme;
    size?: Size;
    disabled?: boolean;
    block?: boolean;
    icon?: IconTypes;
    className?: string;
    children: React.ReactNode;
  } & Omit<React.ButtonHTMLAttributes<HTMLElement>, "type">
>;

export const Button: FC<ButtonProps> = ({
  type,
  theme,
  size,
  disabled,
  block,
  icon,
  className,
  children,
  ...rest
}) => {
  const classes = classNames("btn", className, {
    [`btn-${theme}`]: type === "normal",
    [`btn-outline-${theme}`]: type === "outline" || type === "dash",
    [`btn-dash`]: type === "dash",
    [`btn-lg`]: size === "large",
    [`btn-sm`]: size === "small",
    [`btn-block`]: block,
  });

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {icon && <Icon name={icon} />}
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "normal",
  theme: "primary",
};
export default Button;
