import React, {ReactNode} from "react";
import {RefreshControl, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import {StyleService, useStyles} from "~core/story-book/styles";

interface Props {
  children: ReactNode[] | ReactNode;
  loading?: boolean;
  onRefresh?: CallbackType | AsyncCallback;
}

type CallbackType = () => void;
type AsyncCallback = () => Promise<void>;
const ScreenContainer: React.FC<Props> = props => {
  const styles = useStyles(styleCallback);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps={"handled"}
        keyboardDismissMode="none"
        refreshControl={
          <RefreshControl
            onRefresh={props.onRefresh}
            refreshing={props.loading ?? false}
          />
        }>
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styleCallback = StyleService.create(themedStyles => ({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: themedStyles.colors.background,
  },
  safeArea: {
    flex: 1,
  },
}));

export {ScreenContainer};
