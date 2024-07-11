import React from "react";
import {Text, View} from "react-native";
import {useRoute} from "@react-navigation/native";

const EmptyScreen: React.FC = () => {
  const route = useRoute();
  return (
    <View>
      <Text>{route.name}</Text>
    </View>
  );
};

export {EmptyScreen};
