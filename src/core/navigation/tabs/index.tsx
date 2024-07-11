import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ParamListBase, RouteProp} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

import {ClientStack} from "../../../client/presentation/screens/navigation";
import {EmptyScreen} from "../utils";

import {TapBar} from "./Tabs";

import {Icons} from "~core/story-book/icons";

interface BottomTabsParamsList extends ParamListBase {
  [BottomTabsNavigation.Screens.Clients]: BottomTabsNavigation.Clients.Params;
  [BottomTabsNavigation.Screens.Calendar]: BottomTabsNavigation.Calendar.Params;
  [BottomTabsNavigation.Screens
    .Exercises]: BottomTabsNavigation.Exercises.Params;
  [BottomTabsNavigation.Screens.Payments]: BottomTabsNavigation.Payments.Params;
}

export namespace BottomTabsNavigation {
  export enum Screens {
    Clients = "ClientsStack",
    Calendar = "CalendarStack",
    Exercises = "ExercisesStack",
    Payments = "PaymentsStack",
  }

  export namespace Clients {
    export type Params = {};
    export type navigation = NativeStackNavigationProp<
      BottomTabsParamsList,
      Screens.Clients
    >;
    export type route = RouteProp<BottomTabsParamsList, Screens.Clients>;
  }

  export namespace Calendar {
    export type Params = {};
    export type navigation = NativeStackNavigationProp<
      BottomTabsParamsList,
      Screens.Calendar
    >;
    export type route = RouteProp<BottomTabsParamsList, Screens.Calendar>;
  }

  export namespace Exercises {
    export type Params = {};
    export type navigation = NativeStackNavigationProp<
      BottomTabsParamsList,
      Screens.Exercises
    >;
    export type route = RouteProp<BottomTabsParamsList, Screens.Exercises>;
  }
  export namespace Payments {
    export type Params = {};
    export type navigation = NativeStackNavigationProp<
      BottomTabsParamsList,
      Screens.Payments
    >;
    export type route = RouteProp<BottomTabsParamsList, Screens.Payments>;
  }
}

const TabsNavigator = createBottomTabNavigator<BottomTabsParamsList>();

const TabNavigatorOptions = {
  [BottomTabsNavigation.Screens.Clients]: {
    tabBarIcon: Icons.Clients.filled,
    title: "CLIENTS",
  },
  [BottomTabsNavigation.Screens.Calendar]: {
    tabBarIcon: Icons.Calendar.filled,
    title: "CALENDAR",
  },
  [BottomTabsNavigation.Screens.Exercises]: {
    tabBarIcon: Icons.Star.filled,
    title: "EXERCISES",
  },
  [BottomTabsNavigation.Screens.Payments]: {
    tabBarIcon: Icons.Wallet.filled,
    title: "PAYMENTS",
  },
};

const TabsNavigation = () => {
  return (
    <TabsNavigator.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <TapBar {...props} />}>
      <TabsNavigator.Screen
        name={BottomTabsNavigation.Screens.Clients}
        options={TabNavigatorOptions[BottomTabsNavigation.Screens.Clients]}
        component={ClientStack}
      />
      <TabsNavigator.Screen
        name={BottomTabsNavigation.Screens.Calendar}
        options={TabNavigatorOptions[BottomTabsNavigation.Screens.Calendar]}
        component={EmptyScreen}
      />
      <TabsNavigator.Screen
        name={BottomTabsNavigation.Screens.Exercises}
        options={TabNavigatorOptions[BottomTabsNavigation.Screens.Exercises]}
        component={EmptyScreen}
      />
      <TabsNavigator.Screen
        name={BottomTabsNavigation.Screens.Payments}
        options={TabNavigatorOptions[BottomTabsNavigation.Screens.Payments]}
        component={EmptyScreen}
      />
    </TabsNavigator.Navigator>
  );
};

export {TabsNavigation};
