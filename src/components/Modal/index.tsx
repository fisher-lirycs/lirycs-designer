import React, { createContext, useCallback, useEffect } from "react";
import classNames from "classnames";
import Transition from "react-transition-group/Transition";
import { ModalDialog, ModalDialogProps } from "./Dialog";
import { ModalHeader, ModalHeaderProps } from "./Header";
import { ModalBody, ModalBodyProps } from "./Body";
import { ModalFooter, ModalFooterProps } from "./Footer";
import Fade from "../Fade";

export interface ModalProps {
  animation?: boolean;
  staticBackdrop?: boolean;
  backdropClassName?: string;
  centered?: boolean;
  contentClassName?: string;
  dialogClassName?: string;
  fullscreen?: boolean;
  scrollable?: boolean;
  show?: boolean;
  size?: "rg" | "sm" | "lg" | "xl";
  onHide?: () => void;
  children: React.ReactNode;
}

export interface IModalContext {
  onHide?: () => void;
}

export const ModalContext = createContext<IModalContext>({});

export const Modal: React.FC<ModalProps> = ({
  animation,
  staticBackdrop,
  backdropClassName,
  centered,
  contentClassName,
  dialogClassName,
  fullscreen,
  scrollable,
  show,
  size,
  onHide,
  children,
}) => {
  const backdropClasses = classNames("modal-backdrop", backdropClassName);
  const callBack = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.getElementsByClassName("modal-dialog").length > 0) {
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
      {animation ? (
        <>
          <Fade
            fadein={!!show}
            className={backdropClasses}
            unmountOnExit
            timeout={100}
          ></Fade>
          <ModalContext.Provider
            value={{
              onHide: onHide,
            }}
          >
            <Fade
              fadein={!!show}
              className={"modal"}
              unmountOnExit
              role="dialog"
              aria-modal="true"
              tabIndex={-1}
              timeout={100}
            >
              <ModalDialog
                centered={centered}
                contentClassName={contentClassName}
                fullscreen={fullscreen}
                scrollable={scrollable}
                size={size}
                className={dialogClassName}
              >
                {children}
              </ModalDialog>
            </Fade>
          </ModalContext.Provider>
        </>
      ) : (
        <Transition in={!!show} unmountOnExit timeout={0}>
          {(state) => {
            const backdropClasses = classNames(
              "modal-backdrop",
              backdropClassName,
              {
                [`show`]: state === "entered",
              }
            );
            const classes = classNames("modal", {
              [`show`]: state === "entered",
            });
            return (
              <>
                <div className={backdropClasses}></div>
                <div
                  className={classes}
                  role="dialog"
                  aria-modal="true"
                  tabIndex={-1}
                >
                  <ModalContext.Provider
                    value={{
                      onHide: onHide,
                    }}
                  >
                    <ModalDialog
                      centered={centered}
                      contentClassName={contentClassName}
                      fullscreen={fullscreen}
                      scrollable={scrollable}
                      size={size}
                      className={dialogClassName}
                    >
                      {children}
                    </ModalDialog>
                  </ModalContext.Provider>
                </div>
              </>
            );
          }}
        </Transition>
      )}
    </>
  );
};

Modal.defaultProps = {
  animation: true,
  size: "rg",
};

export type ModalComponent = React.FC<ModalProps> & {
  Dialog: React.FC<ModalDialogProps>;
  Header: React.FC<ModalHeaderProps>;
  Body: React.FC<ModalBodyProps>;
  Footer: React.FC<ModalFooterProps>;
};
const TransModal = Modal as ModalComponent;
TransModal.Dialog = ModalDialog;
TransModal.Header = ModalHeader;
TransModal.Body = ModalBody;
TransModal.Footer = ModalFooter;
export default TransModal;
