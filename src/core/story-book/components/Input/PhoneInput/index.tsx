import React from "react";
import {NativeSyntheticEvent, TextInputKeyPressEventData} from "react-native";
import {useMaskedInputProps} from "react-native-mask-input";

import {Input, InputI} from "../index";

interface TelegramInputI extends InputI {}

const Backspace = "Backspace";

const PhoneInput: React.FC<TelegramInputI> = props => {
  const maskedInputProps = useMaskedInputProps({
    value: props.value,
    mask: [
      "+",
      "7",
      " ",
      "(",
      /\d/,
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
    ],
  });
  const onChangeText = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (!props.onChangeText) {
      return;
    }
    const func = props.onChangeText;
    const key = e.nativeEvent.key;
    const str = props.value ?? "";
    if (key === Backspace) {
      const len = str.length > 1 ? str.length : 2;
      let pos = len - 1;
      if (pos === 1) {
        pos = 0;
      }
      props.onChangeText(str.substring(0, pos));
    }
    if (Number.isInteger(Number(key)) && str.length < 10) {
      func(str + key);
    }
  };
  return (
    <Input
      {...props}
      keyboardType="numeric"
      value={maskedInputProps.value}
      onKeyPress={onChangeText}
    />
  );
};

export {PhoneInput};
