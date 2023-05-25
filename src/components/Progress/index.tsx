import React from "react";
import classNames from "classnames";
import { Theme } from "../../constants/Type";

export interface ProgressProps {
  animated?: boolean;
  isChild?: boolean;
  label?: string;
  max?: number;
  min?: number;
  now?: number;
  striped?: boolean;
  theme?: Theme;
  visuallyHidden?: boolean;
  children?: React.ReactNode;
}

export const Progress: React.FC<ProgressProps> = ({
  animated,
  isChild,
  label,
  max,
  min,
  now,
  striped,
  theme,
  visuallyHidden,
  children,
}) => {
  const classes = classNames("progress-bar", {
    [`bg-${theme}`]: theme,
    [`progress-bar-animated`]: animated,
    [`progress-bar-striped`]: striped,
  });

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      const childeElement =
        child as React.FunctionComponentElement<ProgressProps>;
      const { displayName } = childeElement.type;
      if (displayName === "Progress") {
        return React.cloneElement(childeElement, { isChild: true });
      } else {
        console.warn("Warining: Progress has a child which is not an Progress");
      }
    });
  };
  return (
    <>
      {isChild ? (
        <div
          role="progressbar"
          className={classes}
          aria-valuenow={now}
          aria-valuemin={min}
          aria-valuemax={max}
          style={{ width: now + "%" }}
        >
          {label && (
            <span className={(visuallyHidden && "visually-hidden") || ""}>
              {label}
            </span>
          )}
        </div>
      ) : (
        <div className="progress">
          {children ? (
            renderChildren()
          ) : (
            <div
              role="progressbar"
              className={classes}
              aria-valuenow={now}
              aria-valuemin={min}
              aria-valuemax={max}
              style={{ width: now + "%" }}
            >
              {label && (
                <span className={(visuallyHidden && "visually-hidden") || ""}>
                  {label}
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

Progress.defaultProps = {
  animated: false,
  isChild: false,
  max: 100,
  min: 0,
  striped: false,
  visuallyHidden: false,
};
Progress.displayName = "Progress";
export default Progress;
