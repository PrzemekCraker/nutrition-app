import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ShoppingList from "./src/screens/ShoppingList.js";
import AddProduct from "./src/screens/AddProduct.js";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import EmptyScreen from "./src/screens/EmptyScreen";
import NutritionScreen from "./src/screens/NutritionScreen";
import ProductsScreen from "./src/screens/ProductsScreen";
import YelpScreen from "./src/screens/YelpScreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import AddProductScreen from "./src/screens/AddProductScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";

const ProductFlow = createStackNavigator({
  Products: ShoppingList,
  Add: AddProduct,
});

ProductFlow.navigationOptions = {
  title: "Products",
  tabBarIcon: <MaterialCommunityIcons name="food" size={20} color="black" />,
};

const switchNavigator = createSwitchNavigator({
  Blank: EmptyScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    ProductFlow,
    Add: AddProduct,
    Yelp: YelpScreen,
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
