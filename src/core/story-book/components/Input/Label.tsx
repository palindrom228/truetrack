import React from "react";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import {AnimatedText} from "../Text";

import {StyleService, useStyles} from "~core/story-book/styles";

interface LabelI {
  focused: SharedValue<number>;
  value: string;
}
const Label: React.FC<LabelI> = props => {
  const themedStyles = useStyles(styledCallback);
  const labelTextAnimatedStyles = useAnimatedStyle(() => ({
    fontSize: interpolate(props.focused.value, [0, 1], [16, 12]),
    lineHeight: interpolate(props.focused.value, [0, 1], [24, 16]),
  }));
  const labelAnimatedStyles = useAnimatedStyle(() => ({
    paddingVertical: interpolate(props.focused.value, [0, 1], [12, 0]),
    top: interpolate(props.focused.value, [0, 1], [16, 8]),
  }));
  const labelStyles = [themedStyles.label, labelAnimatedStyles];
  const labelTextStyles = [themedStyles.labelText, labelTextAnimatedStyles];
  return (
    <>
      <Animated.View style={labelStyles}>
        <AnimatedText style={labelTextStyles}>{props.value}</AnimatedText>
      </Animated.View>
      <Animated.View>
        <AnimatedText style={themedStyles.labelPlaceText} />
      </Animated.View>
    </>
  );
};

const styledCallback = StyleService.create(themedStyles => ({
  labelText: {
    color: themedStyles.colors.grey3,
  },
  labelPlaceText: {
    fontSize: 12,
    lineHeight: 16,
  },
  label: {
    position: "absolute",
    justifyContent: "center",
  },
}));

export {Label};
