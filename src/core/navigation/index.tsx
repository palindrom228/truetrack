import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {ParamListBase, RouteProp} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import {AuthStack} from "../../auth/screens/navigation";

import {TabsNavigation} from "./tabs";

import {useAuthViewModel} from "~auth/repositories/store/hook";
import {AppDispatch, initStore} from "~core/store";

interface RootStackParams extends ParamListBase {
  [RootNavigation.Screens.Auth]: RootNavigation.Auth.Params;
  [RootNavigation.Screens.BottomTabs]: RootNavigation.BottomTabs.Params;
}

export namespace RootNavigation {
  export enum Screens {
    Auth = "AuthNavigation",
    BottomTabs = "BottomTabs",
  }

  export namespace Auth {
    export type Params = {};
    export type navigation = NativeStackNavigationProp<
      RootStackParams,
      Screens.Auth
    >;
    export type route = RouteProp<RootStackParams, Screens.Auth>;
  }

  export namespace BottomTabs {
    export type Params = {};
    export type navigation = NativeStackNavigationProp<
      RootStackParams,
      Screens.BottomTabs
    >;
    export type route = RouteProp<RootStackParams, Screens.BottomTabs>;
  }
}
const RootStack = createNativeStackNavigator<RootStackParams>();

const RootNavigator = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {isAuthenticated} = useAuthViewModel();
  useEffect(() => {
    dispatch(initStore());
  }, []);
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isAuthenticated ? (
        <RootStack.Screen
          name={RootNavigation.Screens.BottomTabs}
          component={TabsNavigation}
        />
      ) : (
        <RootStack.Screen
          name={RootNavigation.Screens.Auth}
          component={AuthStack}
        />
      )}
    </RootStack.Navigator>
  );
};

export {RootNavigator};
