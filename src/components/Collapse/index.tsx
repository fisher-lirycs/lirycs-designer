import React, { ReactNode } from "react";
import classNames from "classnames";
import { Transition } from "react-transition-group";

export interface CollapseProps {
  collapsein: boolean;
  timeout: number;
  unmountOnExit?: boolean;
  className?: string;
  children: ReactNode;
}

export const Collapse: React.FC<CollapseProps> = ({
  collapsein,
  timeout,
  unmountOnExit,
  className,
  children,
}) => {
  return (
    <Transition in={collapsein} timeout={timeout} unmountOnExit={unmountOnExit}>
      {(state) => {
        const classes = classNames(className, {
          [`collapse`]: !state || state === "entered" || state === "exited",
          [`collapsing`]: state === "entering" || state === "exiting",
          [`show`]: state === "entered",
        });
        return <div className={classes}>{children}</div>;
      }}
    </Transition>
  );
};

Collapse.defaultProps = {
  collapsein: false,
  timeout: 300,
  unmountOnExit: false,
};

export default Collapse;
