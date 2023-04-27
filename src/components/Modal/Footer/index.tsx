import React from "react";
import classNames from "classnames";

export interface ModalFooterProps {
  className?: string;
  children: React.ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  className,
  children,
}) => {
  const classes = classNames("modal-footer", className);
  return <div className={classes}>{children}</div>;
};
