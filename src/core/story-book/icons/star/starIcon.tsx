import React from "react";
import {Path, Svg} from "react-native-svg";

import {IconI} from "..";

import {useTheme} from "~core/story-book/styles";

interface StarIconI extends IconI {}

const StarIcon: React.FC<StarIconI> = props => {
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
        d="M22 9.67a1 1 0 00-.86-.67l-5.69-.83L12.9 3a1 1 0 00-1.8 0L8.55 8.16 2.86 9a1 1 0 00-.81.68 1 1 0 00.25 1l4.13 4-1 5.68a1 1 0 001.47 1.08l5.1-2.67 5.1 2.67c.14.08.299.12.46.12a1 1 0 00.59-.19 1 1 0 00.4-1l-1-5.68 4.13-4A1 1 0 0022 9.67zm-6.15 4a1 1 0 00-.29.88l.72 4.2-3.76-2a1.06 1.06 0 00-.94 0l-3.76 2 .72-4.2a1 1 0 00-.29-.88l-3-3 4.21-.61a1 1 0 00.76-.55L12 5.7l1.88 3.82a1 1 0 00.76.55l4.21.61-3 2.99z"
        fill={color}
      />
    </Svg>
  );
};

export {StarIcon};
