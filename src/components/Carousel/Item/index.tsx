import React, { useContext } from "react";
import classNames from "classnames";
import { CarouselContext } from "..";

export interface CarouselItemProps {
  index?: number;
  children: React.ReactNode;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
  index,
  children,
}) => {
  const context = useContext(CarouselContext);
  const classes = classNames("carousel-item", {
    [`active`]: index === context.activeIndex,
  });
  return <div className={classes}>{children}</div>;
};

CarouselItem.displayName = "CarouselItem";
