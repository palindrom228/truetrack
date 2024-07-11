import React from "react";
import {View} from "react-native";

interface DividerI {
  height?: number;
  width?: number;
}

const Divider: React.FC<DividerI> = props => {
  const height = props.height ? {height: props.height} : undefined;
  const width = props.width ? {width: props.width} : undefined;
  return <View style={[width, height]} />;
};

export {Divider};
