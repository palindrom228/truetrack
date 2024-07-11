import {useMemo} from "react";
import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from "react-native";

import {LightTheme} from "./LightTheme";

export interface ThemedStylesI {
  colors: {
    red: string;
    lime: string;
    limeLight: string;
    milkyLime: string;
    white: string;
    background: string;
    grey1: string;
    grey2: string;
    grey3: string;
    grey4: string;
    black: string;
  };
}

enum Themes {
  Light,
}

export class StyleService {
  constructor(private theme: Themes = Themes.Light) {}

  get themedStyles(): ThemedStylesI {
    switch (this.theme) {
      case Themes.Light:
        return new LightTheme();
      default:
        return new LightTheme();
    }
  }
  setTheme(theme: Themes) {
    this.theme = theme;
  }

  getStyles<T extends NamedStyles<T> | NamedStyles<any>>(
    callback: StyledCallbackInner<T>,
  ): T {
    const themedStyles = callback(this.themedStyles);
    return StyleSheet.create(themedStyles);
  }
  static create<T extends NamedStyles<T> | NamedStyles<any>>(
    callback: StyledCallbackInner<T>,
  ) {
    return callback;
  }
}
export const styleService = new StyleService();

export type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

type StyledCallbackInner<T extends NamedStyles<T>> = (
  themedStyles: ThemedStylesI,
) => T;

export type StyledCallback = <T>(themedStyles: ThemedStylesI) => NamedStyles<T>;

export function useStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  callback: StyledCallbackInner<T>,
): T {
  const styles = useMemo(() => styleService.getStyles(callback), [callback]);
  return styles;
}

export function useTheme() {
  return styleService.themedStyles;
}
