import React, { useContext } from "react";
import classNames from "classnames";
import { CardContext } from "..";

export interface CardBodyProps {
  title?: string;
  titleClassName?: string;
  subTitle?: string;
  subTitleClassName?: string;
  overLay?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const CardBody: React.FC<CardBodyProps> = ({
  title,
  titleClassName,
  subTitle,
  subTitleClassName,
  overLay,
  className,
  children,
}) => {
  const context = useContext(CardContext);
  const classes = classNames("card-body", className, {
    [`card-img-overlay`]: context.overLay,
  });
  const titleClasses = classNames("card-title", titleClassName);
  const subTitleClasses = classNames("card-subtitle", subTitleClassName);
  return (
    <div className={classes}>
      {title && <div className={titleClasses}>{title}</div>}
      {subTitle && <div className={subTitleClasses}>{subTitle}</div>}
      {children}
    </div>
  );
};
