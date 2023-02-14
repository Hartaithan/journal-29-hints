import { CSSProperties, FC } from "react";
import { IIconProps } from "../models/IconModel";

interface IArrowIconProps extends IIconProps {
  style: CSSProperties;
}

const ArrowIcon: FC<IArrowIconProps> = (props) => {
  const { height, width, fill = "#FFFFFF", style } = props;
  return (
    <svg
      id="arrow"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={style}
    >
      <path
        d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z"
        fill={fill}
      />
      <path d="M0-.75h48v48h-48z" fill="none" />
    </svg>
  );
};

export default ArrowIcon;
