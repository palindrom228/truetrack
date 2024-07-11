import React from "react";
import {Platform, Text as RNText, TextProps, View} from "react-native";
import Animated from "react-native-reanimated";

import {StyleService, useStyles} from "../../styles";

interface TextI extends TextProps {
  category?: TextCategory;
  animated?: boolean;
}

const Text: React.FC<TextI> = props => {
  const category = props.category ?? TextCategoryEnum.b1;
  const memoziedStyles = useStyles(styles)[category];
  const composedStyles = [memoziedStyles, props.style];
  return <RNText {...props} style={composedStyles} />;
};

const AnimatedText: React.FC<TextI> = props => {
  const category = props.category ?? TextCategoryEnum.b5;
  const memoziedStyles = useStyles(styles)[category];
  const composedStyles = [memoziedStyles, props.style];
  return <Animated.Text {...props} style={composedStyles} />;
};

enum TextCategoryEnum {
  t1 = "t1",
  t2 = "t2",
  t3 = "t3",
  h1 = "h1",
  h2 = "h2",
  b1 = "b1",
  b2 = "b2",
  b3 = "b3",
  b4 = "b4",
  b5 = "b5",
  b6 = "b6",
  b7 = "b7",
  b8 = "b8",
}

type TextCategory = `${TextCategoryEnum}`;

const ios = {
  Lexend: {
    Black: "Lexend-Black",
    Bold: "Lexend-Bold",
    ExtraBold: "Lexend-ExtraBold",
    ExtraLight: "Lexend-ExtraLight",
    Medium: "Lexend-Medium",
    Light: "Lexend-Light",
    Regular: "Lexend-Regular",
    SemiBold: "Lexend-SemiBold",
    Thin: "Lexend-Thin",
  },
  Inter: {
    Black: "Inter-Black",
    Bold: "Inter-Bold",
    ExtraBold: "Inter-ExtraBold",
    ExtraLight: "Inter-ExtraLight",
    Medium: "Inter-Medium",
    Light: "Inter-Light",
    Regular: "Inter-Regular",
    SemiBold: "Inter-SemiBold",
    Thin: "Inter-Thin",
  },
};
const android = {
  Lexend: {
    Black: "Lexend-Black",
    Bold: "Lexend-Bold",
    ExtraBold: "Lexend-ExtraBold",
    ExtraLight: "Lexend-ExtraLight",
    Medium: "Lexend-Medium",
    Light: "Lexend-Light",
    Regular: "Lexend-Regular",
    SemiBold: "Lexend-SemiBold",
    Thin: "Lexend-Thin",
  },
  Inter: {
    Black: "Inter-Black",
    Bold: "Inter-Bold",
    ExtraBold: "Inter-ExtraBold",
    ExtraLight: "Inter-ExtraLight",
    Medium: "Inter-Medium",
    Light: "Inter-Light",
    Regular: "Inter-Regular",
    SemiBold: "Inter-SemiBold",
    Thin: "Inter-Thin",
  },
};

function lineHeight(multiplier: number, fontSize: number) {
  const value = Math.floor(fontSize + fontSize * multiplier);
  return value;
}

export const ThemedFontFamily = Platform.OS === "ios" ? ios : android;

const styles = StyleService.create(themedStyles => ({
  t1: {
    fontFamily: ThemedFontFamily.Lexend.Black,
    fontSize: 42,
    lineHeight: lineHeight(0.9, 42),
    color: themedStyles.colors.black,
  },
  t2: {
    fontFamily: ThemedFontFamily.Lexend.Black,
    fontSize: 42,

    color: themedStyles.colors.black,
  },
  t3: {
    fontFamily: ThemedFontFamily.Lexend.Black,
    fontSize: 42,

    color: themedStyles.colors.black,
  },
  h1: {
    fontFamily: ThemedFontFamily.Lexend.Black,
    fontSize: 42,
    color: themedStyles.colors.black,
  },
  h2: {
    fontFamily: ThemedFontFamily.Lexend.Bold,
    fontSize: 16,
    lineHeight: 24,
    color: themedStyles.colors.black,
  },
  b1: {
    fontFamily: ThemedFontFamily.Lexend.Black,
    fontSize: 42,

    color: themedStyles.colors.black,
  },
  b2: {
    fontFamily: ThemedFontFamily.Lexend.Black,
    fontSize: 42,

    color: themedStyles.colors.black,
  },
  b3: {
    fontFamily: ThemedFontFamily.Lexend.SemiBold,
    fontSize: 13,
    lineHeight: 16,
    color: themedStyles.colors.black,
  },
  b4: {
    fontFamily: ThemedFontFamily.Lexend.Black,
    fontSize: 42,

    color: themedStyles.colors.black,
  },
  b5: {
    fontFamily: ThemedFontFamily.Inter.Regular,
    fontSize: 16,
    lineHeight: 24,
    color: themedStyles.colors.black,
  },
  b6: {
    fontFamily: ThemedFontFamily.Inter.Bold,
    fontSize: 16,
    lineHeight: 24,
    color: themedStyles.colors.black,
  },
  b7: {
    fontFamily: ThemedFontFamily.Inter.Bold,
    fontSize: 16,
    lineHeight: 24,
    color: themedStyles.colors.black,
  },
  b8: {
    fontFamily: ThemedFontFamily.Inter.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: themedStyles.colors.black,
  },
}));

const arr = (() => {
  const array = [];
  let keys = Object.values(TextCategoryEnum);
  for (let key of keys) {
    array.push(
      <Text category={key} children={key.toUpperCase() + " Some Text"} />,
    );
  }
  return array;
})();

const TextForStoryBook = () => {
  return (
    <View>
      {arr.map((it, index) => (
        <View key={"Text" + index} style={{padding: 16}}>
          {it}
        </View>
      ))}
    </View>
  );
};
export {Text, AnimatedText, TextForStoryBook};
