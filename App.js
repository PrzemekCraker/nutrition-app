import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import ShoppingList from "./src/screens/ShoppingList.js";
import AddProduct from "./src/screens/AddProduct.js";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import EmptyScreen from "./src/screens/EmptyScreen";
import YelpScreen from "./src/screens/YelpScreen";
import ResultShowScreen from "./src/screens/ResultsShowScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";

const ProductFlow = createStackNavigator({
  Products: ShoppingList,
  AddProduct: AddProduct,
});

const RestFlow = createStackNavigator({
  SearchRest: YelpScreen,
  ResultsShow: ResultShowScreen,
});

RestFlow.navigationOptions = {
  title: "Restaurants",
  tabBarIcon: <MaterialIcons name="restaurant" size={20} color="black" />,
};

ProductFlow.navigationOptions = {
  title: "Products",
  tabBarIcon: <Entypo name="shopping-cart" size={20} color="black" />,
};

const switchNavigator = createSwitchNavigator({
  Blank: EmptyScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    ProductFlow,
    RestFlow,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
