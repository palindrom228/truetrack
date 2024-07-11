/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {StatusBar} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {KeyboardProvider} from "react-native-keyboard-controller";
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";

import {RootNavigator} from "./src/core/navigation";

import {store} from "~core/store";
import {StyleService, useStyles, useTheme} from "~core/story-book/styles";

function App(): React.JSX.Element {
  const styles = useStyles(styleCallback);
  const theme = useTheme();

  return (
    <>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={theme.colors.background}
      />

      <GestureHandlerRootView style={styles.container}>
        <KeyboardProvider>
          <Provider store={store}>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </Provider>
        </KeyboardProvider>
      </GestureHandlerRootView>
    </>
  );
}

const styleCallback = StyleService.create(_ => ({
  container: {flex: 1},
}));

export default App;
