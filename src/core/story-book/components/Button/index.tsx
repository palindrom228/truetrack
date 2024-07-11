import React, {ReactNode} from "react";
import {ImageStyle, TextStyle, ViewStyle} from "react-native";
import {TouchableWithoutFeedback} from "react-native-gesture-handler";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import LoadingSpinner from "../Spinner/Spinner";
import {AnimatedText} from "../Text";

import {StyleService, useStyles} from "~core/story-book/styles";

export enum ButtonStatusVariant {
  primary = "primary",
  secondary = "secondary",
}

export enum SizeVariants {
  XL = "XL",
  L = "L",
  // M = "M",
  // S = "S",
}

type SiseVariant = `${SizeVariants}`;

type ButtonVariant = `${ButtonStatusVariant}`;

interface ButtonI {
  variant?: ButtonVariant;
  disabled?: boolean;
  onPress?: () => void;
  containerStyles?: ViewStyle;
  textStyles?: TextStyle;
  loading?: boolean;
  style?: ViewStyle | TextStyle | ImageStyle;
  useDefaultDisabledStyles?: boolean;
  size?: SiseVariant;
  children?: string | ReactNode;
}

const Button: React.FC<ButtonI> = props => {
  const pressed = useSharedValue(0);
  const variant = props.variant ?? "secondary";
  const size = props.size ?? "L";
  const sizesStyles = useStyles(styledSizes[size]);
  const styles = useStyles(styledVariants[variant]);
  const disabled = props.disabled ?? false;
  const animatedContainerStyles = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      pressed.value,
      [0, 1],
      [styles.default.backgroundColor, styles.pressed.backgroundColor],
    ),
  }));
  const animatedTextStyles = useAnimatedStyle(() => ({
    color: interpolateColor(
      pressed.value,
      [0, 1],
      [styles.textDefault.color, styles.textPressed.color],
    ),
  }));
  const containerStyle = [
    styles.default,
    sizesStyles.default,
    props.style,
    props.containerStyles,
    animatedContainerStyles,

    disabled && !props.loading && styles.disabled,
  ];
  const textStyles = [
    styles.textDefault,
    props.textStyles,
    animatedTextStyles,

    disabled && !props.loading && styles.textDisabled,
  ];
  const pressIn = () => {
    pressed.value = withTiming(1, {duration: 100});
  };
  const pressOut = () => {
    pressed.value = withTiming(0, {duration: 100});
  };
  const render = () => {
    return typeof props.children === "string" ? (
      <AnimatedText category={"h2"} style={textStyles}>
        {props.children}
      </AnimatedText>
    ) : (
      props.children
    );
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        props.onPress?.();
      }}
      disabled={disabled}
      onPressIn={pressIn}
      onPressOut={pressOut}>
      <Animated.View style={containerStyle}>
        {props.loading ? <LoadingSpinner /> : render()}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styledSizes = {
  [SizeVariants.XL]: StyleService.create(_ => ({
    default: {
      paddingHorizontal: 16,
      paddingVertical: 16,
    },
  })),
  [SizeVariants.L]: StyleService.create(_ => ({
    default: {
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
  })),
};

const styledVariants = {
  [ButtonStatusVariant.primary]: StyleService.create(themedStyles => ({
    pressed: {
      backgroundColor: themedStyles.colors.grey1,
    },
    default: {
      backgroundColor: themedStyles.colors.black,
      borderRadius: 24,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    disabled: {
      backgroundColor: themedStyles.colors.grey1,
    },
    textPressed: {
      color: themedStyles.colors.grey3,
    },
    textDefault: {
      color: themedStyles.colors.limeLight,
    },
    textDisabled: {
      color: themedStyles.colors.grey3,
    },
  })),
  [ButtonStatusVariant.secondary]: StyleService.create(themedStyles => ({
    pressed: {
      backgroundColor: themedStyles.colors.grey3,
    },
    default: {
      backgroundColor: themedStyles.colors.grey1,
      borderRadius: 24,

      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    disabled: {},
    textPressed: {
      color: themedStyles.colors.grey3,
    },
    textDefault: {
      color: themedStyles.colors.grey3,
    },
    textDisabled: {},
  })),
};

export {Button};
