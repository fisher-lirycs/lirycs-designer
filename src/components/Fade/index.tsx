import React from "react";
import classNames from "classnames";
import { Transition } from "react-transition-group";

export interface FadeProps {
  fadein: boolean;
  timeout?: number;
  unmountOnExit?: boolean;
  className?: string;
  role?: string;
  tabIndex?: number;
  onEntered?: () => void;
  onExited?: () => void;
  children?: React.ReactNode;
}

export const Fade: React.FC<FadeProps> = ({
  fadein,
  timeout,
  unmountOnExit,
  className,
  role,
  tabIndex,
  onEntered,
  onExited,
  children,
}) => {
  return (
    <Transition
      in={fadein}
      timeout={timeout as number}
      unmountOnExit={unmountOnExit}
      onEntered={onEntered}
      onExited={onExited}
    >
      {(state) => {
        const classes = classNames("fade", className, {
          [`show`]: state === "entered",
        });
        return (
          <div className={classes} role={role} tabIndex={tabIndex}>
            {children}
          </div>
        );
      }}
    </Transition>
  );
};

Fade.defaultProps = {
  timeout: 300,
};
export default Fade;
