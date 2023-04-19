import React, { useState, createContext } from "react";
import classNames from "classnames";
import { CarouselItem, CarouselItemProps } from "./Item";
import { CarouselCaption, CarouselCaptionProps } from "./Caption";

export interface CarouselProps {
  defaultIndex?: number;
  controls?: boolean;
  indicators?: boolean;
  fade?: boolean;
  interval?: number;
  nextIcon?: React.ReactNode;
  nextLabel?: string;
  onSelect?: (eventKey: number, event: Object | null) => void;
  onSlid?: (eventKey: number, direction: "left" | "right") => void;
  onSlide?: (eventKey: number, direction: "left" | "right") => void;
  pause?: boolean;
  prevIcon?: React.ReactNode;
  prevLabel?: string;
  slide?: boolean;
  touch?: boolean;
  dark?: boolean;
  wrap?: boolean;
  className?: string;
  children: React.ReactNode;
}

export interface ICarouselContext {
  itemCount: number;
  activeIndex: number;
  onSelect?: (eventKey: number, event: Object | null) => void;
}

export const CarouselContext = createContext<ICarouselContext>({
  itemCount: 0,
  activeIndex: 0,
});

export const Carousel: React.FC<CarouselProps> = ({
  defaultIndex,
  controls,
  indicators,
  fade,
  interval,
  nextIcon,
  nextLabel,
  onSelect,
  onSlid,
  onSlide,
  pause,
  prevIcon,
  prevLabel,
  slide,
  touch,
  dark,
  wrap,
  className,
  children,
}) => {
  const itemCount = React.Children.toArray(children).length;
  const classes = classNames("carousel", "slide", className);
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childeElement =
        child as React.FunctionComponentElement<CarouselItemProps>;
      const { displayName } = childeElement.type;
      if (displayName === "CarouselItem") {
        return React.cloneElement(childeElement, { index });
      } else {
        console.warn(
          "Warining: Carousel has a child which is not a CarouselItem"
        );
      }
    });
  };

  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const passedContext: ICarouselContext = {
    itemCount: itemCount,
    activeIndex: activeIndex as number,
  };

  const handlePrevClick = () => {
    if (activeIndex === 0) {
      setActiveIndex(itemCount - 1);
    } else {
      setActiveIndex((activeIndex as number) - 1);
    }
  };

  const handleNextClick = () => {
    if (activeIndex === itemCount - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((activeIndex as number) + 1);
    }
  };

  return (
    <div className={classes}>
      {indicators && (
        <div className="carousel-indicators">
          {React.Children.toArray(children).map((_, index) => {
            const indicatorClasses = classNames({
              [`active`]: index === activeIndex,
            });
            return (
              <button
                key={index}
                type="button"
                aria-label={`Slide ${index + 1}`}
                aria-current={index === activeIndex}
                className={indicatorClasses}
                data-lrc-target=""
                onClick={() => setActiveIndex(index)}
              ></button>
            );
          })}
        </div>
      )}
      <div className="carousel-inner">
        <CarouselContext.Provider value={passedContext}>
          {renderChildren()}
        </CarouselContext.Provider>
      </div>
      {controls && (
        <>
          <button className="carousel-control-prev" onClick={handlePrevClick}>
            {prevIcon}
            <span className="visually-hidden">{prevLabel}</span>
          </button>
          <button className="carousel-control-next" onClick={handleNextClick}>
            {nextIcon}
            <span className="visually-hidden">{nextLabel}</span>
          </button>
        </>
      )}
    </div>
  );
};

Carousel.defaultProps = {
  defaultIndex: 0,
  controls: true,
  fade: false,
  indicators: true,
  interval: 5000,
  nextIcon: <span aria-hidden="true" className="carousel-control-next-icon" />,
  nextLabel: "Next",
  prevIcon: <span aria-hidden="true" className="carousel-control-prev-icon" />,
  prevLabel: "Previous",
  slide: true,
  touch: true,
  wrap: true,
};

export type CarouselComponent = React.FC<CarouselProps> & {
  Item: React.FC<CarouselItemProps>;
  Caption: React.FC<CarouselCaptionProps>;
};
const TransCarousel = Carousel as CarouselComponent;
TransCarousel.Item = CarouselItem;
TransCarousel.Caption = CarouselCaption;

export default TransCarousel;
