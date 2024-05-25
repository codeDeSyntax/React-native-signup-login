import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  Button,
  TextInput,
  Text,
  ImageBackground,
} from "react-native";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";
import Background from "../components/Background";
import DividerWithIcons from "../components/SocialMedia";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };

  return (
    <Background>
      <View style={styles.container}>
        <ImageBackground
          style={styles.ai}
          source={require("../assets/Ai.jpeg")}
        >
          <View style={styles.arrow}>
            <Pressable
              style={styles.signupBack}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.image}
                source={require("../assets/back.png")}
              />
            </Pressable>
          </View>
        </ImageBackground>

        <View style={styles.bluePart}>
          <Text style={styles.headerText}>Welcome Back Home</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor={theme.colors.text}
            value={name.value}
            onChangeText={(text) => setName({ value: text, error: "" })}
          />
          {name.error ? (
            <Text style={styles.errorText}>{name.error}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={theme.colors.text}
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: "" })}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          {email.error ? (
            <Text style={styles.errorText}>{email.error}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={theme.colors.text}
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: "" })}
            secureTextEntry
          />
          {password.error ? (
            <Text style={styles.errorText}>{password.error}</Text>
          ) : null}
          <Button
            onPress={onSignUpPressed}
            style={{ marginTop: 24 }}
            title="Sign up"
          />

          <View style={styles.row}>
            <Text>I already have an account!</Text>
          </View>
          <View style={styles.row}>
            <Pressable onPress={() => navigation.replace("LoginScreen")}>
              <Text style={styles.link}>Log in</Text>
            </Pressable>
          </View>
        </View>
        <DividerWithIcons />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    backgroundColor: theme.colors.background,
    alignSelf: "center",
    alignItems: "center",
  },
  bluePart: {
    width: "100%",
    padding: 20,
    // height:'60%',
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    marginTop: -20, // Adjust the top margin to avoid overlap
  },
  ai: {
    width: "100%",
    height: 200, // Set the height to avoid overlap
  },
  signupBack: {
    height: 24,
    width: 24,
    marginBottom: 20,
  },
  image: {
    height: 24,
    width: 24,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.text,
    marginBottom: 8,
  },
  arrow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    // backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
