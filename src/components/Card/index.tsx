import React, { createContext } from "react";
import classNames from "classnames";
import { Theme } from "../../constants/Type";
import { CardHeader, CardHeaderProps } from "./Header";
import { CardBody, CardBodyProps } from "./Body";
import { CardFooter, CardFooterProps } from "./Footer";
import { CardImage, CardImageProps } from "./Image";
import { CardLink, CardLinkProps } from "./Link";
import { CardText, CardTextProps } from "./Text";

export interface CardProps {
  bg?: Theme;
  border?: Theme;
  text?: Theme | "white" | "muted";
  overLay?: boolean;
  className?: string;
  children: React.ReactNode;
}

export interface ICardContext {
  overLay?: boolean;
}
export const CardContext = createContext<ICardContext>({});

export const Card: React.FC<CardProps> = ({
  bg,
  border,
  text,
  overLay,
  className,
  children,
}) => {
  const classes = classNames("card", className, {
    [`bg-${bg}`]: bg,
    [`text-${text}`]: text,
    [`border-${border}`]: border,
  });
  return (
    <div className={classes}>
      <CardContext.Provider value={{ overLay: overLay }}>
        {children}
      </CardContext.Provider>
    </div>
  );
};

export type CardComponent = React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>;
  Body: React.FC<CardBodyProps>;
  Footer: React.FC<CardFooterProps>;
  Image: React.FC<CardImageProps>;
  Link: React.FC<CardLinkProps>;
  Text: React.FC<CardTextProps>;
};

const TransCard = Card as CardComponent;
TransCard.Header = CardHeader;
TransCard.Body = CardBody;
TransCard.Footer = CardFooter;
TransCard.Image = CardImage;
TransCard.Link = CardLink;
TransCard.Text = CardText;

export default TransCard;
