import React from "react";
import {TouchableOpacity} from "react-native";

import {Icons} from "~core/story-book/icons";
import {StyleService, useStyles} from "~core/story-book/styles";

interface AddClientButtonI {
  onPress?: () => void;
}

const AddClientButton: React.FC<AddClientButtonI> = props => {
  const styles = useStyles(styleCallback);
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Icons.Plus.filled />
    </TouchableOpacity>
  );
};

const styleCallback = StyleService.create(themedStyles => ({
  container: {
    width: 72,
    height: 72,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themedStyles.colors.lime,
  },
}));

export {AddClientButton};
