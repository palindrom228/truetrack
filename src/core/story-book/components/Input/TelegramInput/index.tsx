import React from "react";

import {Input, InputI} from "../index";

interface TelegramInputI extends InputI {}

const specialSymbol = "@";

const TelegramInput: React.FC<TelegramInputI> = props => {
  const maskedValue = props.value ? specialSymbol + props.value ?? "" : "";
  const onChangeText = (value: string) => {
    if (!props.onChangeText) {
      return;
    }
    props.onChangeText(
      value
        .split("")
        .filter(symbol => symbol !== specialSymbol)
        .join(""),
    );
  };
  return <Input {...props} onChangeText={onChangeText} value={maskedValue} />;
};

export {TelegramInput};
