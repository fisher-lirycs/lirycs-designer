import React from "react";
import classNames from "classnames";

export interface CardTextProps {
  className?: string;
  children: string;
}

export const CardText: React.FC<CardTextProps> = ({ className, children }) => {
  const classes = classNames("card-text", className);
  return <p className={classes}>{children}</p>;
};
