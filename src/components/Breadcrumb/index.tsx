import React, { Fragment, ReactNode } from "react";
import classNames from "classnames";

type ItemType = {
  title: ReactNode;
  className?: string;
};

export interface BreadcrumbProps {
  items: ItemType[];
  separator?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator }) => {
  return (
    <nav className="breadcrumb">
      <ol>
        {items.map((item, index) => (
          <Fragment key={index}>
            <li className="breadcrumb-item">
              <span>{item.title}</span>
            </li>
            {index < items.length - 1 && (
              <li className="breadcrumb-separator ">
                <span>{separator}</span>
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.defaultProps = {
  separator: "/",
};

export default Breadcrumb;
