import React from "react";
import classNames from "classnames";
import { ListGroupItem, ListGroupItemProps } from "./Item";

export interface ListGroupProps {
  numbered?: boolean;
  flush?: boolean;
  classNam?: string;
  children: React.ReactNode;
}

export const ListGroup: React.FC<ListGroupProps> = ({
  numbered,
  flush,
  classNam,
  children,
}) => {
  const classes = classNames("list-group", classNam, {
    [`list-group-flush`]: flush,
    [`list-group-numbered`]: numbered,
  });
  return (
    <>
      <div className={classes}>{children}</div>
    </>
  );
};

export type ListGroupComponent = React.FC<ListGroupProps> & {
  Item: React.FC<ListGroupItemProps>;
};
const TransDropdown = ListGroup as ListGroupComponent;
TransDropdown.Item = ListGroupItem;
export default TransDropdown;
