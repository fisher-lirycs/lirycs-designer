import React from "react";
import classNames from "classnames";

export interface CardLinkProps {
  href: string;
  className?: string;
  children: string;
}

export const CardLink: React.FC<CardLinkProps> = ({
  className,
  href,
  children,
}) => {
  const classes = classNames("card-link", className);
  return (
    <a className={classes} href={href}>
      {children}
    </a>
  );
};
