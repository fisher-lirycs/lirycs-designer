import React, { ReactNode, createContext, useState } from "react";
import classNames from "classnames";
import { AccordionItemProps } from "./Item";
import { AccordionItem } from "./Item";

export interface AccordionProps {
  defaultActiveKey?: string | string[];
  alwaysOpen?: boolean;
  flush?: boolean;
  onSelect?: (eventKey: string) => void;
  className?: string;
  children?: ReactNode;
}

export interface IAccordionContext {
  activeKeys: string[];
  onSelect?: (eventKey: string) => void;
}

export const AccordionContext = createContext<IAccordionContext>({
  activeKeys: [],
});

const Accordion: React.FC<AccordionProps> = ({
  defaultActiveKey,
  alwaysOpen,
  flush,
  onSelect,
  className,
  children,
}) => {
  const [activeKeys, setActiveKeys] = useState<string[]>(
    defaultActiveKey
      ? typeof defaultActiveKey === "string"
        ? [defaultActiveKey]
        : defaultActiveKey
      : []
  );

  const handleClick = (eventKey: string) => {
    let newActiveKeys;
    if (activeKeys.includes(eventKey)) {
      newActiveKeys = activeKeys.filter((activeKey) => activeKey !== eventKey);
    } else {
      newActiveKeys = [...activeKeys];
      if (alwaysOpen) {
        newActiveKeys.push(eventKey);
      } else {
        newActiveKeys = [eventKey];
      }
    }
    setActiveKeys(newActiveKeys);
    onSelect && onSelect(eventKey);
  };

  const passedContext: IAccordionContext = {
    activeKeys: activeKeys,
    onSelect: handleClick,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childeElement =
        child as React.FunctionComponentElement<AccordionItemProps>;
      const { displayName } = childeElement.type;
      if (displayName === "AccordionItem") {
        return childeElement;
      } else {
        console.warn(
          "Warining: Accordion has a child which is not an AccordionItem"
        );
      }
    });
  };

  const classes = classNames("accordion", className, {
    [`accordion-flush`]: flush,
  });

  return (
    <div className={classes}>
      <AccordionContext.Provider value={passedContext}>
        {renderChildren()}
      </AccordionContext.Provider>
    </div>
  );
};

export type AccordionComponent = React.FC<AccordionProps> & {
  Item: React.FC<AccordionItemProps>;
};
const TransAccordion = Accordion as AccordionComponent;
TransAccordion.Item = AccordionItem;

export default TransAccordion;
