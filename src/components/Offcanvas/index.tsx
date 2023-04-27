import React, { createContext, useCallback, useEffect } from "react";
import classNames from "classnames";
import { OffcanvasHeader, OffcanvasHeaderProps } from "./Header";
import { OffcanvasBody, OffcanvasBodyProps } from "./Body";
import Fade from "../Fade";

export interface OffcanvasProps {
  staticBackdrop?: boolean;
  backdropClassName?: string;
  scrollable?: boolean;
  show?: boolean;
  placement?: "start" | "end" | "top" | "bottom";
  onHide?: () => void;
  className?: string;
  children: React.ReactNode;
}

export interface IOffcanvasContext {
  onHide?: () => void;
}

export const OffcanvasContext = createContext<IOffcanvasContext>({});

export const Offcanvas: React.FC<OffcanvasProps> = ({
  staticBackdrop,
  backdropClassName,
  scrollable,
  show,
  placement,
  onHide,
  className,
  children,
}) => {
  const backdropClasses = classNames("offcanvas-backdrop", backdropClassName);
  const classes = classNames("offcanvas", className, {
    [`offcanvas-${placement}`]: placement,
  });
  const callBack = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("offcanvas-backdrop")) {
        !staticBackdrop && onHide && onHide();
      }
    },
    [onHide, staticBackdrop]
  );

  useEffect(() => {
    if (show) {
      window.addEventListener("click", callBack, true);
    } else {
      window.removeEventListener("click", callBack, true);
    }
    return () => window.removeEventListener("click", callBack, true);
  }, [show, callBack]);

  return (
    <>
      <Fade
        fadein={!!show}
        className={backdropClasses}
        unmountOnExit
        timeout={100}
      ></Fade>
      <OffcanvasContext.Provider
        value={{
          onHide: onHide,
        }}
      >
        <Fade
          fadein={!!show}
          className={classes}
          unmountOnExit
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          timeout={100}
        >
          {children}
        </Fade>
      </OffcanvasContext.Provider>
    </>
  );
};

Offcanvas.defaultProps = {
  placement: "start",
};

export type OffcanvasComponent = React.FC<OffcanvasProps> & {
  Header: React.FC<OffcanvasHeaderProps>;
  Body: React.FC<OffcanvasBodyProps>;
};
const TransOffcanvas = Offcanvas as OffcanvasComponent;
TransOffcanvas.Header = OffcanvasHeader;
TransOffcanvas.Body = OffcanvasBody;
export default TransOffcanvas;
