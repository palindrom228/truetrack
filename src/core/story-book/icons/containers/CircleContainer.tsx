import React, {ReactNode} from "react";
import {ColorValue, View} from "react-native";

import {IconI} from "..";

import {StyleService, useStyles, useTheme} from "~core/story-book/styles";

export interface CircleContainerI extends IconI {
  containerSize?: number;
  containerColor?: ColorValue;
  children?: ReactNode;
}

const CircleContainer: React.FC<CircleContainerI> = props => {
  const theme = useTheme();
  const size = props.containerSize ?? 80;
  const color = props.containerColor ?? theme.colors.background;
  const styles = useStyles(stylesGetter);
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
        },
        styles.container,
      ]}>
      {props.children}
    </View>
  );
};

const stylesGetter = StyleService.create(_ => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const mapToIconI = (props: CircleContainerI): IconI => {
  return {color: props.color, size: props.size};
};

export {CircleContainer};
