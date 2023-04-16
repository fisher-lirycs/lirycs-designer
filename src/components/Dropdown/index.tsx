import React, { createContext, useState } from "react";
import classNames from "classnames";
import { Theme } from "../../constants/Type";
import { DropdownItem, DropdownItemProps } from "./Item";
import {
  useFloating,
  useClick,
  useDismiss,
  useInteractions,
  autoPlacement,
  autoUpdate,
  offset,
} from "@floating-ui/react";

export interface DropdownProps {
  title: string;
  theme?: Theme;
  id: string;
  align?: "start" | "end";
  drop?: "up" | "up-centered" | "start" | "end" | "down" | "down-centered";
  autoClose?: "yes" | "outside" | "inside" | "no";
  split?: boolean;
  children: React.ReactNode;
}

export interface IDropdownContext {
  activeKey: string | null | undefined;
  onSelect?: (eventKey: string) => void;
}
export const DropdownContext = createContext<IDropdownContext>({
  activeKey: null,
});

export const Dropdown: React.FC<DropdownProps> = ({
  title,
  theme,
  id,
  align,
  drop,
  autoClose,
  split,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { x, y, strategy, refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [autoPlacement(), offset(5)],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context, {
    enabled: true,
    toggle: true,
  });

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  const classes = classNames("dropdown", {
    [`show`]: isOpen,
  });

  const toggleClasses = classNames("btn", "dropdown-toggle", {
    [`btn-${theme}`]: theme,
    [`show`]: isOpen,
  });

  const menuClasses = classNames("dropdown-menu", {
    [`show`]: isOpen,
  });

  const [activeKey, setActiveKey] = useState<string>();
  const handleClick = (eventKey: string) => {
    setActiveKey(eventKey);
  };

  const passedContext: IDropdownContext = {
    activeKey: activeKey,
    onSelect: handleClick,
  };

  return (
    <div className={classes}>
      <button
        id={id}
        aria-expanded={isOpen}
        className={toggleClasses}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {title}
      </button>
      <DropdownContext.Provider value={passedContext}>
        {isOpen && (
          <div
            x-placement={drop}
            aria-labelledby={id}
            className={menuClasses}
            ref={refs.setFloating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            }}
            {...getFloatingProps()}
          >
            {children}
          </div>
        )}
      </DropdownContext.Provider>
    </div>
  );
};

Dropdown.defaultProps = {
  theme: "primary",
};

export type DropdownComponent = React.FC<DropdownProps> & {
  Item: React.FC<DropdownItemProps>;
};
const TransDropdown = Dropdown as DropdownComponent;
TransDropdown.Item = DropdownItem;

export default TransDropdown;
