import React from "react";
import classNames from "classnames";

export interface TableProps {
  bordered?: boolean;
  borderless?: boolean;
  hover?: boolean;
  responsive?: boolean;
  size?: "regular" | "small";
  striped?: "row" | "columns";
  theme?: "normal" | "dark";
  children: React.ReactNode;
}

export const Tables: React.FC<TableProps> = ({
  bordered,
  borderless,
  hover,
  responsive,
  size,
  striped,
  theme,
  children,
}) => {
  const classes = classNames("table", {
    [`table-striped`]: striped === "row",
    [`table-striped-columns`]: striped === "columns",
    [`table-bordered`]: bordered,
    [`table-borderless`]: borderless,
    [`table-hover`]: hover,
    [`table-sm`]: size === "small",
    [`table-dark`]: theme === "dark",
    [`table-responsive`]: responsive,
  });
  return <table className={classes}>{children}</table>;
};

Tables.defaultProps = {
  size: "regular",
  theme: "normal",
};
export default Tables;
