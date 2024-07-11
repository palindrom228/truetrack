import React, {useEffect, useState} from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import {StyleService, useStyles, useTheme} from "~core/story-book/styles";

interface UnderlineI {
  color?: string;
}

const Underline: React.FC<UnderlineI> = props => {
  const theme = useTheme();
  const color = props.color ?? theme.colors.grey3;
  const themedStyles = useStyles(styledCallback);
  const sharedValue = useSharedValue(0);
  const [state, setState] = useState(-1);
  const [prevColor, setPrevColor] = useState(color);
  useEffect(() => {
    setState(prev => {
      sharedValue.value = withTiming(prev + 1, {duration: 300});
      return prev + 1;
    });

    setTimeout(() => {
      setPrevColor(color);
    }, 300);
  }, [color]);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        sharedValue.value,
        [state - 1, state],
        [prevColor, color],
      ),
    };
  }, [color, state]);
  return <Animated.View style={[themedStyles.container, animatedStyles]} />;
};

const styledCallback = StyleService.create(_ => ({
  container: {
    height: 1,
  },
}));

export {Underline};
