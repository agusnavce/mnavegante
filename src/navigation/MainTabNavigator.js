import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import InformationScreen from "../screens/InformationScreen";
import NearMeScreen from "../screens/NearMeScreen";
import SearchScreen from "../screens/SearchScreen";
import BlindAudioGuideScreen from "../screens/BlindAudioGuideScreen";

const InformationStack = createStackNavigator({
  Information: InformationScreen
});

InformationStack.navigationOptions = {
  tabBarLabel: "Información",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const NearMeStack = createStackNavigator({
  NearMe: NearMeScreen
});

NearMeStack.navigationOptions = {
  tabBarLabel: "Cerca de mi",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"ios-radio"} />
  )
};

const BlindAudioGuideStack = createStackNavigator({
  BlindAudioGuide: BlindAudioGuideScreen
});

BlindAudioGuideStack.navigationOptions = {
  tabBarLabel: "Audioguia",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-mic"} />
};

const SearchStack = createStackNavigator({
  Search: SearchScreen
});

SearchStack.navigationOptions = {
  tabBarLabel: "Buscar",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-search"} />
  )
};

export default createBottomTabNavigator(
  {
    NearMeStack,
    BlindAudioGuideStack,
    SearchStack,
    InformationStack
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      lazyLoad: true,
      style: {
        backgroundColor: "rgba(22, 22, 22, 0.3)",
        borderTopWidth: 1,
        borderTopColor: "#353535",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0
      }
    }
  }
);
