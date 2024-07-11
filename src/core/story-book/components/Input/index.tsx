import React, {ReactNode, useEffect, useRef, useState} from "react";
import {TextInput, TextInputProps, TextStyle, ViewStyle} from "react-native";
import Animated, {useSharedValue, withTiming} from "react-native-reanimated";

import {StyleService, useStyles, useTheme} from "../../styles";
import {AnimationConfig} from "../animationConfig/animationConfig";
import {AnimatedText} from "../Text";

import {Label} from "./Label";
import {Underline} from "./UnderLine";

export interface InputI extends TextInputProps {
  value?: string;
  onChangeText?: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  style?: ViewStyle | TextStyle;
  textStyle?: TextStyle;
  status?: InputStatus;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

enum InputStatusEnum {
  error = "error",
}

type InputStatus = `${InputStatusEnum}`;

const Input: React.FC<InputI> = props => {
  const themedStyles = useStyles(stylesCallback);
  const ref = useRef<TextInput>(null);
  const [focused, setFocused] = useState(false);
  const [canBlur, setCanBlur] = useState(true);
  const focusedSharedValue = useSharedValue(0);
  const unFocusedShardValue = useSharedValue(1);
  const setFocus = () => {
    if (props.disabled) {
      return;
    }
    setCanBlur(false);
    setTimeout(() => {
      setCanBlur(true);
    }, 300);
    setFocused(true);
    focusedSharedValue.value = withTiming(
      1,
      AnimationConfig.defaultTimingConfig,
    );
  };

  useEffect(() => {
    if (props.disabled) {
      ref.current?.blur();
    }
  }, [props.disabled]);

  const setBlur = () => {
    if (!canBlur) {
      ref.current?.focus();
      return;
    }
    setFocused(false);
    focusedSharedValue.value = withTiming(
      0,
      AnimationConfig.defaultTimingConfig,
    );
  };

  const theme = useTheme();

  const placeholder = props.placeholder ?? "";

  const containerStyles = [props.style];

  const bottomColor = focused ? theme.colors.lime : theme.colors.grey2;

  const onPressView = () => {
    ref.current?.focus();
  };

  return (
    <Animated.View
      style={containerStyles}
      focusable={true}
      onTouchStart={onPressView}>
      <Label
        value={placeholder}
        focused={props.value?.length ? unFocusedShardValue : focusedSharedValue}
      />
      <TextInput
        {...props}
        style={themedStyles.realInput}
        caretHidden
        underlineColorAndroid="rgba(0,0,0,0)"
        onFocus={setFocus}
        onBlur={setBlur}
        ref={ref}
      />
      <Animated.View style={themedStyles.contentContainer}>
        <Animated.View style={themedStyles.leftContainer}>
          {props.leftIcon}
          <Animated.View style={themedStyles.textContainer}>
            <AnimatedText category="b5" style={props.textStyle}>
              {" "}
              {props.value}
            </AnimatedText>
          </Animated.View>
        </Animated.View>
        <Animated.View style={themedStyles.rightContainer}>
          {props.rightIcon}
        </Animated.View>
      </Animated.View>
      <Underline
        color={props.status === "error" ? theme.colors.red : bottomColor}
      />
    </Animated.View>
  );
};

const stylesCallback = StyleService.create(_ => ({
  realInput: {
    display: "none",
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    justifyContent: "center",
  },
  contentContainer: {
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 12,
  },
  focusedPlaceholderText: {},
}));

export {Input};
