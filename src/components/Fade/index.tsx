import React from "react";
import classNames from "classnames";
import { Transition } from "react-transition-group";

export interface FadeProps {
  fadein: boolean;
  timeout: number;
  unmountOnExit?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Fade: React.FC<FadeProps> = ({
  fadein,
  timeout,
  unmountOnExit,
  className,
  children,
}) => {
  return (
    <Transition in={fadein} timeout={timeout} unmountOnExit={unmountOnExit}>
      {(state) => {
        const classes = classNames("fade", className, {
          [`show`]: state === "entered",
        });
        return <div className={classes}>{children}</div>;
      }}
    </Transition>
  );
};

Fade.defaultProps = {
  timeout: 300,
};
export default Fade;
