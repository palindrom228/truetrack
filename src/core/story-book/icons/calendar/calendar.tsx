import React from "react";
import {Path, Svg} from "react-native-svg";

import {IconI} from "..";

import {useTheme} from "~core/story-book/styles";

interface CalendarIconI extends IconI {}

const CalendarIcon: React.FC<CalendarIconI> = props => {
  const theme = useTheme();
  const size = props.size ?? 24;
  const color = props.color ?? theme.colors.limeLight;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M18.366 4.724H5.634a1.819 1.819 0 00-1.82 1.82v12.732c0 1.004.815 1.818 1.82 1.818h12.732a1.819 1.819 0 001.819-1.819V6.544a1.819 1.819 0 00-1.819-1.819zM3.815 10.181h16.37M15.637 2.906v3.637M8.362 2.906v3.637"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {CalendarIcon};
