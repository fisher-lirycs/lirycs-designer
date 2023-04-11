import React, { Fragment, ReactNode } from "react";

type ItemType = {
  title: ReactNode;
  href?: string;
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
              <span>
                {item.href ? (
                  <a href={item.href} className="breadcrumb-link">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </span>
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
