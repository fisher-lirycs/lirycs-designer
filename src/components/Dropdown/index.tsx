import React, { createContext, useState } from "react";
import classNames from "classnames";
import { Theme } from "../../constants/Type";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import { DropdownItem, DropdownItemProps } from "./Item";
import {
  useFloating,
  useClick,
  useDismiss,
  useInteractions,
  autoUpdate,
  offset,
  flip,
} from "@floating-ui/react";
import { DropdownDivider } from "./Divider";

export interface DropdownProps {
  as?: "ButtonGroup";
  title: string;
  theme?: Theme;
  id: string;
  drop?:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "top-start"
    | "top-end"
    | "right-start"
    | "right-end"
    | "bottom-start"
    | "bottom-end"
    | "left-start"
    | "left-end";
  autoClose?: "yes" | "outside" | "inside" | "no";
  split?: boolean;
  size?: "normal" | "small" | "large";
  darkMenu?: boolean;
  isNav?: boolean;
  children: React.ReactNode;
}

type DropdownMainProps = DropdownProps & {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface IDropdownContext {
  activeKey: string | null | undefined;
  onSelect?: (eventKey: string) => void;
  autoClose?: "yes" | "outside" | "inside" | "no";
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DropdownContext = createContext<IDropdownContext>({
  activeKey: null,
});

const DropdownMain: React.FC<DropdownMainProps> = ({
  as,
  title,
  theme,
  id,
  drop,
  autoClose,
  split,
  size,
  darkMenu,
  isOpen,
  isNav,
  setIsOpen,
  children,
}) => {
  const { x, y, strategy, refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: drop,
    middleware: [flip(), offset(2)],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);

  const dismiss = useDismiss(context, {
    outsidePress: autoClose === "yes" || autoClose === "outside",
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  const toggleClasses = classNames("btn", "dropdown-toggle", {
    [`btn-${theme}`]: theme,
    [`btn-lg`]: size === "large",
    [`btn-sm`]: size === "small",
    [`show`]: isOpen,
    [`nav-btn`]: isNav,
  });

  const menuClasses = classNames("dropdown-menu", {
    [`show`]: isOpen,
    [`dropdown-menu-dark`]: darkMenu,
  });

  const [activeKey, setActiveKey] = useState<string>();
  const handleClick = (eventKey: string) => {
    setActiveKey(eventKey);
  };

  const passedContext: IDropdownContext = {
    activeKey: activeKey,
    onSelect: handleClick,
    autoClose: autoClose,
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };

  return (
    <>
      {split ? (
        <>
          <Button theme={theme} size={size}>
            {title}
          </Button>
          <button
            id={id}
            aria-expanded={isOpen}
            className={toggleClasses}
            ref={refs.setReference}
            {...getReferenceProps()}
          ></button>
        </>
      ) : (
        <button
          id={id}
          aria-expanded={isOpen}
          className={toggleClasses}
          ref={refs.setReference}
          {...getReferenceProps()}
        >
          {title}
        </button>
      )}

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
    </>
  );
};
export const Dropdown: React.FC<DropdownProps> = ({
  split,
  as,
  isNav,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = classNames("dropdown", {
    [`nav-item`]: isNav,
    [`show`]: isOpen,
    [`btn-group`]: as === "ButtonGroup",
  });

  return (
    <>
      {split ? (
        <ButtonGroup className={classes} size={rest.size}>
          <DropdownMain
            {...rest}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            split
            isNav={isNav}
          />
        </ButtonGroup>
      ) : (
        <div className={classes}>
          <DropdownMain
            {...rest}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isNav={isNav}
          />
        </div>
      )}
    </>
  );
};

Dropdown.defaultProps = {
  theme: "primary",
  drop: "bottom-start",
  size: "normal",
  autoClose: "yes",
};

export type DropdownComponent = React.FC<DropdownProps> & {
  Item: React.FC<DropdownItemProps>;
  Divider: React.FC;
};
const TransDropdown = Dropdown as DropdownComponent;
TransDropdown.Item = DropdownItem;
TransDropdown.Divider = DropdownDivider;

export default TransDropdown;
