import React from "react";
import classNames from "classnames";

export interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  className,
  children,
}) => {
  const classes = classNames("card-header", className);
  return <div className={classes}>{children}</div>;
};
