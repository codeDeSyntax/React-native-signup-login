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


export default function RegisterScreen({ navigation })
 {
 
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    // if (emailError || passwordError || nameError) {
    //   return;
    // }
    navigation.navigate("LoginScreen");
  };

  return (
    <Background>
      <View style={styles.container}>
        <ImageBackground
          style={styles.ai}
          source={require("../../assets/Ai.jpeg")}
          imageStyle={{borderBottomRightRadius:100}}
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
         <Pressable 
            onPress={onSignUpPressed}
            style={styles.signup}
            title="Sign up">Sign up</Pressable>
          <View style={styles.row}>
            <Text>I already have an account!</Text>
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
   
    
  },
  ai: {
    width: "100%",
    height: 250, // Set the height to avoid overlap
    borderBottomRightRadius:100,
  },
  signupBack: {
    height: 24,
    width: 24,
    marginBottom: 20,
  },
  signup:{
    width:300,
    height:20,
    padding:18,
    backgroundColor:theme.colors.primary,
    marginTop:10,
    color:theme.colors.background,
    borderRadius:8,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  image: {
   fontSize:30,
   color:theme.colors.background
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.text,
    marginBottom: 8,
    paddingVertical:8
  },
  arrow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal:20,
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
