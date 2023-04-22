import React, { useContext } from "react";
import classNames from "classnames";
import { Transition } from "react-transition-group";
import { CarouselContext, TDirection } from "..";

interface TransitionItemProps {
  index: number;
  activeIndex: number;
  direction: TDirection;
  timeout?: number;
  children: React.ReactNode;
}

const TransitionItem: React.FC<TransitionItemProps> = ({
  index,
  activeIndex,
  direction,
  timeout,
  children,
}) => {
  return (
    <Transition in={index === activeIndex} timeout={timeout as number}>
      {(state) => {
        const classes = classNames(
          {
            [`carousel-item-next`]:
              state === "entering" && direction === "next",
            [`carousel-item-prev`]:
              state === "entering" && direction === "prev",
            [`active`]: state === "entered" || state === "exiting",
            [`carousel-item-start`]:
              (state === "entering" || state === "exiting") &&
              direction === "next",
            [`carousel-item-end`]:
              (state === "entering" || state === "exiting") &&
              direction === "prev",
          },
          "carousel-item"
        );
        return (
          <div className={classes}>
            <div>{children}</div>
          </div>
        );
      }}
    </Transition>
  );
};

export interface CarouselItemProps {
  index?: number;
  children: React.ReactNode;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
  index,
  children,
}) => {
  const context = useContext(CarouselContext);

  if (context.slide || context.fade) {
    return (
      <TransitionItem
        index={index as number}
        activeIndex={context.activeIndex}
        direction={context.direction}
        timeout={400}
      >
        {children}
      </TransitionItem>
    );
  } else {
    const classes = classNames("carousel-item", {
      [`active`]: index === context.activeIndex,
    });
    return <div className={classes}>{children}</div>;
  }
};

CarouselItem.displayName = "CarouselItem";
