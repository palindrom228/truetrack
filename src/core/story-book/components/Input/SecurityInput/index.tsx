import React, {useRef, useState} from "react";
import {TouchableOpacity} from "react-native";

import {Input, InputI} from "..";

import {Icons} from "~core/story-book/icons";

const symb = "•";
const showSymbolDuration = 600;

interface SecurityInputI extends InputI {}

const SecurityInput: React.FC<SecurityInputI> = props => {
  const [isShowingLastSymbol, setIsShowingLastSymbol] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [closed, setClosed] = useState(true);
  const setValue = (value: string) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    const isDeleting = (props.value?.length ?? 0) > value.length;
    if (props.onChangeText) {
      if (isDeleting) {
        const newStringEnd = (props.value?.length ?? 1) - 1;
        props.onChangeText(props.value?.substring(0, newStringEnd) ?? "");
      } else {
        const symbol = value?.at(value.length - 1) ?? "";
        props.onChangeText(props.value + symbol);
      }
    }
    if (!isDeleting) {
      setIsShowingLastSymbol(true);
      timer.current = setTimeout(
        () => setIsShowingLastSymbol(false),
        showSymbolDuration,
      );
    }
  };
  const mask = (() => {
    if (!closed) {
      return props.value;
    }
    const dots = props.value?.length ?? 0;
    if (isShowingLastSymbol) {
      const symbol = props.value?.at(props.value.length - 1) ?? "";
      if (dots === 0) {
        return "";
      }

      return symb.repeat(dots - 1) + symbol;
    } else {
      return symb.repeat(dots);
    }
  })();
  const onPressIcon = () => {
    setClosed(prev => !prev);
  };
  return (
    <Input
      {...props}
      value={mask}
      style={{lineHeight: 30}}
      onChangeText={setValue}
      rightIcon={
        <TouchableOpacity onPress={onPressIcon}>
          <Icons.ShowPassword.filled closed={closed} />
        </TouchableOpacity>
      }
    />
  );
};

export {SecurityInput};
