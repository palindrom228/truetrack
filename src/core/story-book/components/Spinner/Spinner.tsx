import React, {useEffect, useRef} from "react";
import {Animated} from "react-native";

import {SpinnerIcon} from "~core/story-book/icons/spinner/SpinnerIcon";

const LoadingSpinner = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 800, // Adjust the duration as needed
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View style={{transform: [{rotate: spin}]}}>
      <SpinnerIcon />
    </Animated.View>
  );
};

export default LoadingSpinner;
