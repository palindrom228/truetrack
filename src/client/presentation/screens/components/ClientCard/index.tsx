import React from "react";
import {View} from "react-native";

import {Text} from "~core/story-book/components";
import {StyleService, useStyles} from "~core/story-book/styles";

interface ClientCardI {
  name: string;
}

const ClientCard: React.FC<ClientCardI> = React.memo(props => {
  const styles = useStyles(styledCallback);
  return (
    <View style={styles.container}>
      <Text category="b5">{props.name}</Text>
    </View>
  );
});

const styledCallback = StyleService.create(themedStyles => ({
  container: {
    borderRadius: 12,
    borderWidth: 1.5,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderColor: themedStyles.colors.grey2,
  },
}));

export {ClientCard};
