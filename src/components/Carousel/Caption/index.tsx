import React from "react";
import classNames from "classnames";

export interface CarouselCaptionProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export const CarouselCaption: React.FC<CarouselCaptionProps> = ({
  title,
  className,
  children,
}) => {
  const classes = classNames("carousel-caption", className);
  return (
    <div className={classes}>
      {title && <h3>{title}</h3>}
      <p>{children}</p>
    </div>
  );
};
