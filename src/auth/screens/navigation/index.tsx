import React from "react";
import {ParamListBase, RouteProp} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import {MainAuthScreen} from "../MainAuthScreen";
import {SignupScreen} from "../Signup";

interface AuthNavigationParams extends ParamListBase {
  [AuthNavigation.Screens.Main]: AuthNavigation.Main.Params;
  [AuthNavigation.Screens.SignUp]: AuthNavigation.SignUp.Params;
}

export namespace AuthNavigation {
  export enum Screens {
    Main = "AuthMainScreen",
    SignUp = "SignUpScreen",
  }

  export namespace Main {
    export type Params = {};
    export type navigation = NativeStackNavigationProp<
      AuthNavigationParams,
      Screens.Main
    >;
    export type route = RouteProp<AuthNavigationParams, Screens.Main>;
  }
  export namespace SignUp {
    export type Params = {};
    export type navigation = NativeStackNavigationProp<
      AuthNavigationParams,
      Screens.SignUp
    >;
    export type route = RouteProp<AuthNavigationParams, Screens.SignUp>;
  }
}

const AuthStackNavigator = createNativeStackNavigator<AuthNavigationParams>();

const AuthStack = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <AuthStackNavigator.Screen
        name={AuthNavigation.Screens.SignUp}
        component={SignupScreen}
      />
      <AuthStackNavigator.Screen
        name={AuthNavigation.Screens.Main}
        component={MainAuthScreen}
      />
    </AuthStackNavigator.Navigator>
  );
};

export {AuthStack};
