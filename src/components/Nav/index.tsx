import React, { createContext, useState, useCallback } from "react";
import classNames from "classnames";
import { NavItem, NavItemProps } from "./Item";

export interface NavProps {
  defaultActiveKey?: string;
  align?: "left" | "center" | "right";
  vertical?: boolean;
  fill?: boolean;
  justify?: boolean;
  navbar?: boolean;
  navbarScroll?: boolean;
  onSelect?: (eventKey: string) => void;
  role?: string;
  type?: "normal" | "tabs" | "pills";
  className?: string;
  children: React.ReactNode;
}

export interface INavContext {
  activeKey: string;
  onSelect?: (eventKey: string) => void;
}

export const NavContext = createContext<INavContext>({
  activeKey: "",
});

export const Nav: React.FC<NavProps> = ({
  defaultActiveKey,
  align,
  vertical,
  fill,
  justify,
  navbar,
  navbarScroll,
  onSelect,
  role,
  type,
  className,
  children,
}) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey || "");
  const classes = classNames("nav", className, {
    [`justify-content-center`]: align === "center",
    [`justify-content-end`]: align === "right",
    [`flex-column`]: vertical,
    [`nav-tabs`]: type === "tabs",
    [`nav-pills`]: type === "pills",
    [`nav-fill`]: fill,
    [`nav-justified`]: justify,
  });
  const handleClick = useCallback(
    (eventKey: string) => {
      setActiveKey(eventKey);
      onSelect && onSelect(eventKey);
    },
    [setActiveKey, onSelect]
  );
  return (
    <div className={classes}>
      <NavContext.Provider
        value={{
          activeKey: activeKey,
          onSelect: handleClick,
        }}
      >
        {children}
      </NavContext.Provider>
    </div>
  );
};

Nav.defaultProps = {
  align: "left",
};

export type NavComponent = React.FC<NavProps> & {
  Item: React.FC<NavItemProps>;
};
const TransNav = Nav as NavComponent;
TransNav.Item = NavItem;
export default TransNav;
