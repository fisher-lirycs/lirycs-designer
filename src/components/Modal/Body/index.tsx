import React from "react";
import classNames from "classnames";

export interface ModalBodyProps {
  className?: string;
  children: React.ReactNode;
}

export const ModalBody: React.FC<ModalBodyProps> = ({
  className,
  children,
}) => {
  const classes = classNames("modal-body", className);
  return <div className={classes}>{children}</div>;
};
