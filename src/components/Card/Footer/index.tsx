import React from "react";
import classNames from "classnames";

export interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  className,
  children,
}) => {
  const classes = classNames("card-footer", className);
  return <div className={classes}>{children}</div>;
};
