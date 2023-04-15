import React from "react";
import classNames from "classnames";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fluid?: boolean;
  rounded?: boolean;
  roundedCircle?: boolean;
  thumbnail?: boolean;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  fluid,
  rounded,
  roundedCircle,
  thumbnail,
  ...rest
}) => {
  const classes = classNames({
    [`img-fluid`]: fluid,
    [`rounded`]: rounded,
    [`rounded-circle`]: roundedCircle,
    [`img-thumbnail`]: thumbnail,
  });
  return <img src={src} alt={alt} className={classes} {...rest} />;
};

Image.defaultProps = {
  fluid: true,
};

export default Image;
