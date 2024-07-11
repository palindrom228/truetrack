import React from "react";
import {TouchableOpacity, View} from "react-native";
import {BottomTabNavigationEventMap} from "@react-navigation/bottom-tabs";
import {NavigationHelpers, ParamListBase} from "@react-navigation/native";

import {Divider, Text} from "~core/story-book/components";
import {ThemedFontFamily} from "~core/story-book/components/Text";
import {IconI} from "~core/story-book/icons";
import {StyleService, useStyles, useTheme} from "~core/story-book/styles";
interface TabItemI {
  icon: (props: IconI) => JSX.Element;
  isFocused: boolean;
  name: string;
  label: string;
  keyNavigation: string;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}
const TabItem: React.FC<TabItemI> = props => {
  const Icon = props.icon;
  const navigation = props.navigation;
  const styles = useStyles(styledCallback);
  const theme = useTheme();
  const onPress = () => {
    const event = navigation.emit({
      type: "tabPress",
      target: props.keyNavigation,
      canPreventDefault: true,
    });

    if (!props.isFocused && !event.defaultPrevented) {
      navigation.navigate(props.name);
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: "tabLongPress",
      target: props.keyNavigation,
    });
  };

  const color = props.isFocused ? theme.colors.lime : theme.colors.grey3;

  const textStyles = [styles.textStyle, {color: color}];

  return (
    <TouchableOpacity
      key={props.name}
      accessibilityRole="button"
      accessibilityState={props.isFocused ? {selected: true} : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.continer}>
      <View style={styles.iconsContainer}>{<Icon color={color} />}</View>
      <Divider height={4} />
      <Text style={textStyles}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styledCallback = StyleService.create(_ => ({
  continer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
  },
  textStyle: {
    fontFamily: ThemedFontFamily.Lexend.SemiBold,
    fontSize: 9,
    lineHeight: 11,
  },
  iconsContainer: {},
}));

export {TabItem};
