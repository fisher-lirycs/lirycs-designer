import React from "react";
import classNames from "classnames";
import { ModalDialog } from "./Dialog";

export interface ModalProps {
  animation?: boolean;
  autoFocus?: boolean;
  backdrop?: "static" | "normal" | "no";
  backdropClassName?: string;
  centered?: boolean;
  contentClassName?: string;
  dialogClassName?: string;
  enforceFocus?: boolean;
  fullscreen?: boolean;
  scrollable?: boolean;
  show?: boolean;
  size?: "rg" | "sm" | "lg" | "xl";
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  animation,
  autoFocus,
  backdropClassName,
  centered,
  contentClassName,
  dialogClassName,
  enforceFocus,
  fullscreen,
  scrollable,
  show,
  size,
  children,
}) => {
  const classes = classNames("modal", backdropClassName, {
    [`fade`]: animation,
    [`show`]: show,
  });
  const backdropClasses = classNames("modal-backdrop", backdropClassName, {
    [`fade`]: animation,
    [`show`]: show,
  });
  return (
    <>
      <div className={backdropClasses}></div>
      <div role="dialog" aria-modal="true" className={classes} tabIndex={-1}>
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
      </div>
    </>
  );
};

Modal.defaultProps = {
  size: "rg",
};
