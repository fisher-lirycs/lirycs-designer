import React from "react";
import classNames from "classnames";
import { Theme } from "../../constants/Type";
import { Icons, IconTypes } from "../../constants/Icon";

export interface IconProps {
  readonly name: IconTypes;
  readonly width?: number | string;
  readonly height?: number | string;
  readonly theme?: Theme;
  readonly className?: string;
}

type SvgProps = {
  readonly svg: React.FC<React.SVGProps<SVGAElement>>;
  readonly width?: number | string;
  readonly height?: number | string;
  readonly theme?: Theme;
  readonly className?: string;
};

const IconSvg: React.FC<SvgProps> = ({
  svg: Svg,
  width,
  height,
  theme,
  className,
}) => {
  const classes = classNames("li", className, {
    [`icon-${theme}`]: theme,
  });
  return <Svg width={width} height={height} className={classes} />;
};

export const Icon: React.FC<IconProps> = ({
  name,
  width,
  height,
  theme,
  className,
}) => {
  return (
    <IconSvg
      svg={Icons[name] as React.FC<React.SVGProps<SVGAElement>>}
      width={width}
      height={height}
      className={className}
      theme={theme}
    />
  );
};

Icon.defaultProps = {
  width: "1em",
  height: "1em",
};
export default Icon;
