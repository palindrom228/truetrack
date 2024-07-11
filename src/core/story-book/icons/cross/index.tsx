import React from "react";
import {Path, Svg} from "react-native-svg";

import {IconI} from "..";

import {useTheme} from "~core/story-book/styles";

interface CrossIconCircleI extends IconI {}

const CrossIconCircle: React.FC<CrossIconCircleI> = props => {
  const theme = useTheme();
  const size = props.size ?? 24;
  const color = props.color ?? theme.colors.black;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 3.182a6.818 6.818 0 100 13.636 6.818 6.818 0 000-13.636zM1.667 10a8.333 8.333 0 1116.666 0 8.333 8.333 0 01-16.666 0zm11.142-2.808a.758.758 0 010 1.071L11.072 10l1.737 1.737a.758.758 0 01-1.072 1.072L10 11.072l-1.737 1.737a.757.757 0 11-1.071-1.072L8.929 10 7.192 8.263a.758.758 0 111.071-1.071L10 8.929l1.737-1.737a.758.758 0 011.072 0z"
        fill={color}
      />
    </Svg>
  );
};

export {CrossIconCircle};
