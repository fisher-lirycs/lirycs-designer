import React from "react";
import classNames from "classnames";
import { BreakPoint, Theme } from "../../constants/Type";

export interface NavbarProps {
  bg?: Theme;
  collapseOnSelect?: boolean;
  expand?: boolean;
  expanded?: boolean | BreakPoint;
  fixed?: "top" | "bottom";
  onSelect?: () => void;
  onToggle?: () => void;
  role?: string;
  sticky?: "top";
  variant?: "light" | "dark";
  children: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({
  bg,
  collapseOnSelect,
  expand,
  expanded,
  fixed,
  onSelect,
  onToggle,
  role,
  sticky,
  variant,
  children,
}) => {
  const classes = classNames("navbar", {
    [`bg-${bg}`]: bg,
    [`navbar-${variant}`]: variant,
    [`navbar-expand`]: expand && typeof expand === "boolean",
    [`navbar-expand-${expand}`]: expand && typeof expand !== "boolean",
  });
  return (
    <nav className={classes}>
      <div className="container">{children}</div>
    </nav>
  );
};

Navbar.defaultProps = {
  collapseOnSelect: false,
  expand: true,
  role: "navigation",
  variant: "light",
};
