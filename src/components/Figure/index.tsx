import React from "react";
import classNames from "classnames";
import { FigureImage, FigureImageProps } from "./Image";
import { FigureCaption, FigureCaptionProps } from "./Caption";

export interface FigureProps {
  className?: string;
  children: React.ReactNode;
}

export const Figure: React.FC<FigureProps> = ({ className, children }) => {
  const classes = classNames(className);
  return <figure className={classes}>{children}</figure>;
};

export type FigureComponent = React.FC<FigureProps> & {
  Image: React.FC<FigureImageProps>;
  Caption: React.FC<FigureCaptionProps>;
};
const TransFigure = Figure as FigureComponent;
TransFigure.Image = FigureImage;
TransFigure.Caption = FigureCaption;

export default TransFigure;
