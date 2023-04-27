import React from "react";
import classNames from "classnames";

export interface OffcanvasBodyProps {
  className?: string;
  children: React.ReactNode;
}

export const OffcanvasBody: React.FC<OffcanvasBodyProps> = ({
  className,
  children,
}) => {
  const classes = classNames("offcanvas-body", className);
  return <div className={classes}>{children}</div>;
};
