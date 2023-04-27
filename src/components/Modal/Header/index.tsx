import React, { useCallback, useContext } from "react";
import classNames from "classnames";
import CloseButton from "../../CloseButton";
import { ModalContext } from "..";

export interface ModalHeaderProps {
  title: string;
  closeButton?: boolean;
  closeLabel?: string;
  variant?: "white";
  onHide?: () => void;
  className?: string;
  titleClassName?: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  closeButton,
  closeLabel,
  variant,
  onHide,
  className,
  titleClassName,
}) => {
  const classes = classNames("modal-header", className);
  const titleClasses = classNames("modal-title", titleClassName);
  const context = useContext(ModalContext);
  const handleHide = useCallback(() => {
    onHide && onHide();
    context.onHide && context.onHide();
  }, [onHide, context]);

  return (
    <div className={classes}>
      <div className={titleClasses}>{title}</div>
      {closeButton && (
        <CloseButton
          ariaLabel={closeLabel}
          variant={variant}
          onClick={handleHide}
        />
      )}
    </div>
  );
};

ModalHeader.defaultProps = {
  closeButton: true,
  closeLabel: "Close",
};
