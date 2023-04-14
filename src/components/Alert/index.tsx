import React, { ReactNode, useState } from "react";
import classNames from "classnames";
import Fade from "../Fade";
import { Theme } from "../../constants/Type";
import CloseButton from "../CloseButton";

export interface AlertProps {
  theme?: Theme;
  header?: string;
  dismissible?: boolean;
  closeVariant?: "white";
  children: ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  theme,
  header,
  dismissible,
  closeVariant,
  children,
}) => {
  const [open, setOpen] = useState(true);
  const classes = classNames("alert", {
    [`alert-${theme}`]: theme,
    [`alert-dismissible`]: dismissible,
  });
  return (
    <Fade fadein={open} timeout={300} className={classes}>
      <>
        {dismissible && (
          <CloseButton
            ariaLabel="Close alert"
            variant={closeVariant}
            onClick={() => setOpen(!open)}
          />
        )}
        {header && <div className="alert-heading h4">{header}</div>}
        {children}
      </>
    </Fade>
  );
};

Alert.defaultProps = {
  theme: "primary",
};

export default Alert;
