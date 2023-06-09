import React, { ReactNode, useContext } from "react";
import classNames from "classnames";
import { DropdownContext } from "..";

export interface DropdownItemProps {
  eventKey: string;
  disabled?: boolean;
  onclick?: () => void;
  children: ReactNode;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  eventKey,
  disabled,
  onclick,
  children,
}) => {
  const context = useContext(DropdownContext);
  const classes = classNames("dropdown-item", {
    [`active`]: eventKey === context.activeKey,
  });

  const handleClick = () => {
    context.onSelect && context.onSelect(eventKey);
    onclick && onclick();
    if (context.autoClose === "yes" || context.autoClose === "inside") {
      context.setIsOpen && context.setIsOpen(!context.isOpen);
    }
  };
  return (
    <button className={classes} disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  );
};

DropdownItem.displayName = "AccordionItem";
