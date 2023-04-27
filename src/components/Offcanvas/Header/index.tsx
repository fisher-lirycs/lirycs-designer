import React, { useCallback, useContext } from "react";
import classNames from "classnames";
import CloseButton from "../../CloseButton";
import { OffcanvasContext } from "..";

export interface OffcanvasHeaderProps {
  title: string;
  closeButton?: boolean;
  closeLabel?: string;
  variant?: "white";
  onHide?: () => void;
  className?: string;
  titleClassName?: string;
}

export const OffcanvasHeader: React.FC<OffcanvasHeaderProps> = ({
  title,
  closeButton,
  closeLabel,
  variant,
  onHide,
  className,
  titleClassName,
}) => {
  const classes = classNames("offcanvas-header", className);
  const titleClasses = classNames("offcanvas-title", titleClassName);
  const context = useContext(OffcanvasContext);
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

OffcanvasHeader.defaultProps = {
  closeButton: true,
  closeLabel: "Close",
};
