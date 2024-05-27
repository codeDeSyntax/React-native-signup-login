import React, { useState } from "react";
import axios from "axios";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  TextInput,
  ImageBackground,
  Modal,
  ActivityIndicator,
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
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const signupData = {
    username: name.value,
    email: email.value,
    password: password.value,
  };

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (nameError || emailError || passwordError) {
      setErrorMessage(nameError || emailError || passwordError);
      setModalVisible(true);
      return;
    }
    setLoading(true); // Start loading
    try {
      const response = await axios.post('http://localhost:3000/signup', signupData);
      if (response.status === 201) {
        setLoading(false); // Stop loading
        navigation.navigate("LoginScreen");
      }
    } catch (error) {
      setLoading(false); // Stop loading
      if (error.response) {
        if (error.response.status === 400) {
          setErrorMessage(error.response.data.message);
        } else if (error.response.status === 500) {
          setErrorMessage("Internal server error");
        } else {
          setErrorMessage("An unknown error occurred");
        }
      } else {
        setErrorMessage("Network error");
      }
      setModalVisible(true);
      console.log({ message: 'error creating user', error: error });
    }
  };

  return (
    <Background>
      <View style={styles.container}>
        <ImageBackground
          style={styles.ai}
          source={require("../../assets/Ai.jpeg")}
          imageStyle={{ borderBottomRightRadius: 100 }}
        >
          <View style={styles.arrow}>
            <Pressable
              style={styles.signupBack}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.image}>↩</Text>
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
          <Pressable onPress={onSignUpPressed} style={styles.signup}>
            {loading ? (
              <ActivityIndicator color={theme.colors.background} />
            ) : (
              <Text style={styles.signupText}>Sign up</Text>
            )}
          </Pressable>
          <View style={styles.row}>
            <Text>I already have an account!</Text>
            <Pressable onPress={() => navigation.replace("LoginScreen")}>
              <Text style={styles.link}>Log in</Text>
            </Pressable>
          </View>
        </View>
        <DividerWithIcons />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>{errorMessage}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Ok</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
    flexDirection: "column",
    alignItems: "center",
  },
  ai: {
    width: "100%",
    height: 250,
    borderBottomRightRadius: 100,
  },
  signupBack: {
    height: 24,
    width: 24,
    marginBottom: 20,
  },
  signup: {
    width: 300,
    height: 20,
    padding: 18,
    backgroundColor: theme.colors.primary,
    marginTop: 10,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signupText: {
    color: theme.colors.background,
    fontWeight: "bold",
  },
  image: {
    fontSize: 30,
    color: theme.colors.background,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.text,
    marginBottom: 8,
    paddingVertical: 8,
  },
  arrow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalContent: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: theme.colors.primary,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
