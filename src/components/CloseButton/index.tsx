import React from "react";
import classNames from "classnames";

export interface CloseButtonProps {
  ariaLabel?: string;
  disabled?: boolean;
  variant?: "white";
  onClick?: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  ariaLabel,
  disabled,
  variant,
  onClick,
}) => {
  const classes = classNames("btn-close", {
    "btn-close-white": variant === "white",
  });
  return (
    <button
      type="button"
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
    ></button>
  );
};

CloseButton.defaultProps = {
  ariaLabel: "Close",
};
export default CloseButton;
