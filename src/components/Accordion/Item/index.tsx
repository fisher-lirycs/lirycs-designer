import React, { ReactNode, useContext } from "react";
import Collapse from "../../Collapse";
import { AccordionContext } from "..";
import classNames from "classnames";

export interface AccordionItemProps {
  eventKey: string;
  header: string;
  children: ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  eventKey,
  header,
  children,
}) => {
  const context = useContext(AccordionContext);
  const headerButtonClasses = classNames("accordion-button", {
    [`collapsed`]: !context.activeKeys.includes(eventKey),
  });
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          type="button"
          aria-expanded={
            (context.activeKeys.includes(eventKey) && "true") || "false"
          }
          className={headerButtonClasses}
          onClick={() => context.onSelect && context.onSelect(eventKey)}
        >
          {header}
        </button>
      </h2>
      <Collapse
        collapsein={context.activeKeys.includes(eventKey)}
        timeout={300}
        className="accordion-collapse"
      >
        <div className="accordion-body">{children}</div>
      </Collapse>
    </div>
  );
};

AccordionItem.displayName = "AccordionItem";
