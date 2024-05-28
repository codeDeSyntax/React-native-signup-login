import React from "react";
import { ImageBackground, StyleSheet, Text, Pressable, Image } from "react-native";
import { theme } from "../core/theme";

export default function Background({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/aiHand.jpeg")}
      style={styles.container}
    >
      <Image source={require("../../assets/startImgg.png")} style={styles.startImg} />

      <Text style={styles.headerText}>Welcome to our Homepage</Text>
      <Text style={styles.descriptionText}>
        Login or signup to explore more features on this app
      </Text>

      <Pressable
        style={styles.signupBtn}
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        <Text style={styles.btnText}>Sign up</Text>
      </Pressable>
      <Pressable style={styles.loginBtn}>
        <Text style={styles.btnText}>Login</Text>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    height: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  startImg: {
    height: 350,
    width: 400,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.background,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 20,
    color: theme.colors.background,
  },
  signupBtn: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: theme.colors.background,
    marginTop: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    width: 300,
    height: 50,
    backgroundColor: theme.colors.primary,
    marginTop: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 18,
    color: theme.colors.background,
  },
});
