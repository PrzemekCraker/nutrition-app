import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView forceInset={{ top: "always" }}>
          <Text style={styles.logo}>Account Screen</Text>
          <Spacer>
            <TouchableOpacity style={styles.loginBtn} onPress={signout}>
              <Text style={styles.loginText}>Sign Out</Text>
            </TouchableOpacity>
          </Spacer>
          <Spacer></Spacer>
        </SafeAreaView>
      </View>
      <View>
        <Text style={styles.help}>
          For any questions or concerns please {"\n"} feel free to contact me on
          the{"\n"}
          <Button
            onPress={() =>
              Linking.openURL(
                "mailto:przemyslaw.dzienisiewicz@gmail.com?subject=SendMail&body=Description"
              )
            }
            title="przemyslaw.dzienisiewicz@gmail.com"
          />{" "}
          {"\n"}or by private message on my{"\n"}
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://github.com/PrzemekCraker")}
          >
            Github account
          </Text>
          .
        </Text>
      </View>
    </>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gears" size={20} />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  help: {
    textAlign: "center",
    marginTop: 50,
    color: "#222",
    fontSize: 18,
    marginBottom: 100,
    marginTop: 1,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 40,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 60,
    textAlign: "center",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 90,
    width: 275,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 30,
  },
  loginText: {
    color: "white",
    fontSize: 26,
  },
});

export default AccountScreen;
