import React from "react";
import {ColorValue} from "react-native";
import Svg, {Path} from "react-native-svg";

import {IconI} from "..";

import {useTheme} from "~core/story-book/styles";

interface SpinnerIconI extends IconI {
  colorSecondary?: ColorValue;
}

export const SpinnerIcon: React.FC<SpinnerIconI> = props => {
  const theme = useTheme();
  const size = props.size ?? 20;
  const color = props.color ?? theme.colors.white;
  const colorSecondary = props.colorSecondary ?? theme.colors.grey1;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        clipRule="evenodd"
        d="M10.052 18a8 8 0 100-16 8 8 0 000 16z"
        stroke={colorSecondary}
        strokeOpacity={0.49}
        strokeWidth={3}
      />
      <Path
        d="M18.052 10a8 8 0 10-8 8"
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
      />
    </Svg>
  );
};
