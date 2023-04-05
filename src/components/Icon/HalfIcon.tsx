import React from "react";
import classNames from "classnames";
import { Theme } from "../../constants/Type";
import { HalfIConType } from "../../constants/Icon";
import { ReactComponent as BatteryHalf } from "../../assets/Icons/half/battery-half.svg";
import { ReactComponent as BookHalf } from "../../assets/Icons/half/book-half.svg";
import { ReactComponent as CircleHalf } from "../../assets/Icons/half/circle-half.svg";
import { ReactComponent as DiamondHalf } from "../../assets/Icons/half/diamond-half.svg";
import { ReactComponent as DropletHalf } from "../../assets/Icons/half/droplet-half.svg";
import { ReactComponent as HeartHalf } from "../../assets/Icons/half/heart-half.svg";
import { ReactComponent as HeptagonHalf } from "../../assets/Icons/half/heptagon-half.svg";
import { ReactComponent as HexagonHalf } from "../../assets/Icons/half/hexagon-half.svg";
import { ReactComponent as LayersHalf } from "../../assets/Icons/half/layers-half.svg";
import { ReactComponent as OctagonHalf } from "../../assets/Icons/half/octagon-half.svg";
import { ReactComponent as PentagonHalf } from "../../assets/Icons/half/pentagon-half.svg";
import { ReactComponent as SquareHalf } from "../../assets/Icons/half/square-half.svg";
import { ReactComponent as StarHalf } from "../../assets/Icons/half/star-half.svg";
import { ReactComponent as ThermometerHalf } from "../../assets/Icons/half/thermometer-half.svg";
import { ReactComponent as TriangleHalf } from "../../assets/Icons/half/triangle-half.svg";

export interface HalfIconProps {
  name: HalfIConType;
  width?: number | string;
  height?: number | string;
  theme?: Theme;
  className?: string;
}

export const HalfIcon: React.FC<HalfIconProps> = ({
  name,
  width,
  height,
  theme,
  className,
}) => {
  const classes = classNames("li", className, {
    [`icon-${theme}`]: theme,
  });
  switch (name) {
    case "BatteryHalf":
      return <BatteryHalf width={width} height={height} className={classes} />;
    case "BookHalf":
      return <BookHalf width={width} height={height} className={classes} />;
    case "CircleHalf":
      return <CircleHalf width={width} height={height} className={classes} />;
    case "DiamondHalf":
      return <DiamondHalf width={width} height={height} className={classes} />;
    case "DropletHalf":
      return <DropletHalf width={width} height={height} className={classes} />;
    case "HeartHalf":
      return <HeartHalf width={width} height={height} className={classes} />;
    case "HeptagonHalf":
      return <HeptagonHalf width={width} height={height} className={classes} />;
    case "HexagonHalf":
      return <HexagonHalf width={width} height={height} className={classes} />;
    case "LayersHalf":
      return <LayersHalf width={width} height={height} className={classes} />;
    case "OctagonHalf":
      return <OctagonHalf width={width} height={height} className={classes} />;
    case "PentagonHalf":
      return <PentagonHalf width={width} height={height} className={classes} />;
    case "SquareHalf":
      return <SquareHalf width={width} height={height} className={classes} />;
    case "StarHalf":
      return <StarHalf width={width} height={height} className={classes} />;
    case "ThermometerHalf":
      return (
        <ThermometerHalf width={width} height={height} className={classes} />
      );
    case "TriangleHalf":
      return <TriangleHalf width={width} height={height} className={classes} />;
    default:
      return <BatteryHalf width={width} height={height} className={classes} />;
  }
};

HalfIcon.defaultProps = {
  name: "BatteryHalf",
  width: "1em",
  height: "1em",
};

export default HalfIcon;
