import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
  Products: ProductsScreen,
  AddProduct: AddProductScreen,
  ProductDetail: ProductDetailScreen,
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
    Nutrition: NutritionScreen,
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
