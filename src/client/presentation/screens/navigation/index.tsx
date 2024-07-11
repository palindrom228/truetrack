import React from "react";
import {ParamListBase, RouteProp} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import {AddClient as AddClientScreen} from "../AddClient/index";

import {ClientsScreen} from "~client/presentation/screens";
import {EmptyScreen} from "~core/navigation/utils";

interface ClientStackParams extends ParamListBase {
  [ClientNavigation.Screens.Main]: ClientNavigation.Main.Params;
}

export namespace ClientNavigation {
  export enum Screens {
    Main = "ClientMainScreen",
    AddClient = "ClientAddScreen",
    EditScreen = "ClientEditScreen",
  }

  export namespace Main {
    export type Params = {};
    export type navigation = NativeStackNavigationProp<
      ClientStackParams,
      Screens.Main
    >;
    export type route = RouteProp<ClientStackParams, Screens.Main>;
  }

  export namespace AddClient {
    export type Params = {};
    export type navigation = NativeStackNavigationProp<
      ClientStackParams,
      Screens.Main
    >;
    export type route = RouteProp<ClientStackParams, Screens.AddClient>;
  }

  export namespace EditScreen {
    export type Params = {};
    export type navigation = NativeStackNavigationProp<
      ClientStackParams,
      Screens.EditScreen
    >;
    export type route = RouteProp<ClientStackParams, Screens.EditScreen>;
  }
}

const Stack = createNativeStackNavigator<ClientStackParams>();

const ClientStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ClientNavigation.Screens.Main}
        component={ClientsScreen}
      />
      <Stack.Screen
        name={ClientNavigation.Screens.AddClient}
        component={AddClientScreen}
      />
      <Stack.Screen
        name={ClientNavigation.Screens.EditScreen}
        component={EmptyScreen}
      />
    </Stack.Navigator>
  );
};

export {ClientStack};
