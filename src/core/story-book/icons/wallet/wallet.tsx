import React from "react";
import {Path, Svg} from "react-native-svg";

import {IconI} from "..";

import {useTheme} from "~core/story-book/styles";

interface WalletIconI extends IconI {}

const WalletIcon: React.FC<WalletIconI> = props => {
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
        d="M7 15h3a1 1 0 000-2H7a1 1 0 000 2zM19 5H5a3 3 0 00-3 3v9a3 3 0 003 3h14a3 3 0 003-3V8a3 3 0 00-3-3zm1 12a1 1 0 01-1 1H5a1 1 0 01-1-1v-6h16v6zm0-8H4V8a1 1 0 011-1h14a1 1 0 011 1v1z"
        fill={color}
      />
    </Svg>
  );
};

export {WalletIcon};
