import React from "react";
import {View} from "react-native";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";

import {TabItem} from "./TabItem";

import {Icons} from "~core/story-book/icons";
import {StyleService, useStyles} from "~core/story-book/styles";

const TapBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const styles = useStyles(styledCallback);

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.title ?? route.name;
        const icon = options.tabBarIcon ?? Icons.Calendar.filled;
        const isFocused = state.index === index;
        return (
          <TabItem
            key={route.key}
            keyNavigation={route.key}
            icon={icon}
            isFocused={isFocused}
            name={route.name}
            label={label}
            navigation={navigation}
          />
        );
      })}
    </View>
  );
};

const styledCallback = StyleService.create(themedStyles => ({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    backgroundColor: themedStyles.colors.background,
  },
}));

export {TapBar};
