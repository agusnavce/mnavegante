import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import WelcomeScreen from "../screens/WelcomeScreen";
import PaintingScreen from "../screens/PaintingScreen";

export default createAppContainer(
  createSwitchNavigator({
    Welcome: WelcomeScreen,
    Main: createStackNavigator({
      Main: { screen: MainTabNavigator, navigationOptions: { header: null } },
      Painting: PaintingScreen
    })
  })
);
