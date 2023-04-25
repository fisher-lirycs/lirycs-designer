import React from "react";
import classNames from "classnames";
import Image, { ImageProps } from "../../Image";

export interface FigureImageProps extends ImageProps {
  className?: string;
}

export const FigureImage: React.FC<FigureImageProps> = ({
  className,
  ...rest
}) => {
  const classes = classNames("figure-img", className);
  return <Image fluid className={classes} {...rest} />;
};
