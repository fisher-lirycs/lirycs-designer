import React, { ReactNode, useRef, MutableRefObject } from "react";
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
  const nodeRef: MutableRefObject<any> = useRef(null);
  return (
    <Transition
      in={collapsein}
      nodeRef={nodeRef}
      timeout={timeout}
      unmountOnExit={unmountOnExit}
      onEntering={() => {
        const currentElement = nodeRef.current as HTMLElement;
        const height =
          (currentElement &&
            (currentElement.children[0] as HTMLElement).offsetHeight) ||
          0;
        currentElement.style.height = height + "px";
      }}
      onEntered={() => {
        const currentElement = nodeRef.current as HTMLElement;
        currentElement.style.height = "";
      }}
      onExiting={() => {
        const currentElement = nodeRef.current as HTMLElement;
        const height =
          (currentElement &&
            (currentElement.children[0] as HTMLElement).offsetHeight) ||
          0;
        currentElement.style.height = height + "px";
        currentElement.classList.add("collapsing");
        setTimeout(() => {
          currentElement.style.height = "";
        }, 0);
      }}
    >
      {(state) => {
        const classes = classNames(className, {
          [`collapse`]: !state || state === "entered" || state === "exited",
          [`collapsing`]: state === "entering",
          [`show`]: state === "entered",
        });

        return (
          <div ref={nodeRef} className={classes}>
            <div>{children}</div>
          </div>
        );
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
