import React from "react";
import classNames from "classnames";
import Image, { ImageProps } from "../../Image";

export interface CardImageProps extends ImageProps {
  direction?: "top" | "bottom";
  className?: string;
}

export const CardImage: React.FC<CardImageProps> = ({ className, ...rest }) => {
  const classes = classNames("card-img", className);
  return <Image fluid className={classes} {...rest} />;
};

CardImage.defaultProps = {
  direction: "top",
};
