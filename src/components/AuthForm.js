import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text style={styles.logo}>{headerText}</Text>
      </Spacer>
      <View style={styles.inputView}>
        <Input
          style={styles.inputText}
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <Spacer />
      <View style={styles.inputView}>
        <Input
          style={styles.inputText}
          secureTextEntry={true}
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
      </View>
      <Spacer>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => onSubmit({ email, password })}
        >
          <Text style={styles.loginText}>{submitButtonText}</Text>
        </TouchableOpacity>
      </Spacer>
    </>
  );
};
const styles = StyleSheet.create({
  logo: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
    marginBottom: 40,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 70,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    fontSize: 26,
  },
});

export default AuthForm;
