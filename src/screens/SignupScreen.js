import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign up for List App"
        errorMessage={state.errorMessage}
        submitButtonText="Sign up"
        onSubmit={signup}
      />
      <NavLink routeName="Signin" text="Have an account? Sign in!" />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
});

export default SignupScreen;
