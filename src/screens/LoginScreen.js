import React, { useState } from 'react'
import { Pressable, StyleSheet, View, TextInput, Text,ImageBackground,Image } from 'react-native'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    })
  }

  return (
    <Background>
      {/* <BackButton goBack={navigation.goBack} /> */}
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
        <Text style={styles.headerText}>Log in</Text>
     <View style={styles.loginForm}>
     <TextInput
        style={styles.input}
        placeholder="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      {email.error ? <Text style={styles.errorText}>{email.error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        secureTextEntry
      />
      {password.error ? <Text style={styles.errorText}>{password.error}</Text> : null}
      <View style={styles.forgotPassword}>
        <Pressable onPress={() => navigation.navigate('ResetPasswordScreen')}>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </Pressable>
      </View>
      <Pressable style={styles.button} onPress={onLoginPressed}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>
      <View style={styles.row}>
        <Text>You do not have an account yet?</Text>
        <Pressable onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}> Create!</Text>
        </Pressable>
      </View>
     </View>
    <View style={styles.aiHead}>
    <Image source={require('../../assets/aiConnect.png')}/>
    </View>
    </Background>
  )
}

const styles = StyleSheet.create({
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    flex:1,
    justifyContent: 'center',
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  ai: {
    width: "100%",
    height: 300, // Set the height to avoid overlap
    borderBottomRightRadius:100,
  },
  aiHold:{
    borderBottomRightRadius:100,
  },
  aiHead:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  arrow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal:20,
  },
  image:{
    fontSize:30,
   color:theme.colors.background
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginForm:{
    padding:20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.text,
    textAlign:'center',
    paddingVertical:8
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})
