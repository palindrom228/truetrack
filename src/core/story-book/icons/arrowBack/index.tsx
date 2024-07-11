import React from "react";
import {Path, Svg} from "react-native-svg";

import {IconI} from "..";

import {useTheme} from "~core/story-book/styles";

interface ArrowBackIconI extends IconI {}

const ArrowBackIcon: React.FC<ArrowBackIconI> = props => {
  const theme = useTheme();
  const size = props.size ?? 24;
  const color = props.color ?? theme.colors.black;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19 12H5M12 19l-7-7 7-7"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {ArrowBackIcon};
