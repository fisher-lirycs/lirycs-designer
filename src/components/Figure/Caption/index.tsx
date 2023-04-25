import React from "react";
import classNames from "classnames";

export interface FigureCaptionProps {
  className?: string;
  children: React.ReactNode;
}

export const FigureCaption: React.FC<FigureCaptionProps> = ({
  className,
  children,
}) => {
  const classes = classNames("figure-caption", className);
  return <figcaption className={classes}>{children}</figcaption>;
};
