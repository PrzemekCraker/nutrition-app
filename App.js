import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
//import { createStackNavigator } from "react-navigation-stack";
//import { createBottomTabNavigator } from "react-navigation-tabs";

const App = createAppContainer(appNavigator);

export default () => {
  return (
    <App
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    />
  );
};
