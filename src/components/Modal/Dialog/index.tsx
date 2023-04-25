import React from "react";
import classNames from "classnames";

export interface ModalDialogProps {
  centered?: boolean;
  contentClassName?: string;
  fullscreen?: boolean;
  scrollable?: boolean;
  size?: "rg" | "sm" | "lg" | "xl";
  className?: string;
  children: React.ReactNode;
}

export const ModalDialog: React.FC<ModalDialogProps> = ({
  centered,
  contentClassName,
  fullscreen,
  scrollable,
  size,
  className,
  children,
}) => {
  const classes = classNames("modal-dialog", className, {
    [`modal-dialog-centered`]: centered,
    [`modal-${size}`]: size,
    [`modal-fullscreen`]: fullscreen,
  });
  const contentClasses = classNames("modal-content", contentClassName);
  return (
    <>
      <div className={classes}>
        <div className={contentClasses}>{children}</div>
      </div>
    </>
  );
};
