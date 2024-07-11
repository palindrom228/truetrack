import React from "react";
import {Path, Svg} from "react-native-svg";

import {IconI} from "..";

import {useTheme} from "~core/story-book/styles";

interface PaperAirPlaneI extends IconI {}

const PaperAirPlaneIcon: React.FC<PaperAirPlaneI> = props => {
  const theme = useTheme();
  const size = props.size ?? 24;
  const color = props.color ?? theme.colors.grey4;
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
        d="M18.571 2.503a.698.698 0 00-.367-.225.703.703 0 00-.405.022L3.73 7.224a.704.704 0 00-.053 1.308l6.087 2.705 2.705 6.087a.704.704 0 001.307-.054l4.92-14.056a.704.704 0 00-.124-.711zM15.36 4.645L5.87 7.966l4.27 1.898 5.22-5.219zm-4.224 6.215l5.219-5.22-3.322 9.49-1.897-4.27z"
        fill={color}
      />
    </Svg>
  );
};

export {PaperAirPlaneIcon};
