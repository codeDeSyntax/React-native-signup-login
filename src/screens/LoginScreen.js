import React, { useState , useContext } from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Text,
  ImageBackground,
  Modal,
  Image,
  ActivityIndicator,
} from 'react-native';
import Background from '../components/Background';
import { theme } from '../core/theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import axios from 'axios';
import { UserContext } from '../core/useContext';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { setUsername } = useContext(UserContext);

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setErrorMessage(emailError || passwordError);
      setModalVisible(true);
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(true); // Start loading
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: email.value,
        password: password.value,
      });
      console.log(response.data)
      setUsername(response.data.user.username)
      if (response.status === 200) {
        setLoading(false); // Stop loading
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }
    } catch (error) {
      setLoading(false); 
      if (error.response) {
        if (error.response.status === 400) {
          setErrorMessage(error.response.data.message);
        } else if (error.response.status === 500) {
          setErrorMessage('something went wrong on our side');
        } else {
          setErrorMessage('An unknown error occurred');
        }
      } else {
        setErrorMessage('Network error');
      }
      setModalVisible(true);
      console.log({ message: 'error during login', error: error });
    }
  };

  return (
    <Background>
      <ImageBackground
        style={styles.ai}
        source={require('../../assets/Ai.jpeg')}
        imageStyle={{ borderBottomRightRadius: 100 }}
      >
        <View style={styles.arrow}>
          <Pressable
            style={styles.signupBack}
            onPress={() => navigation.navigate('LoginScreen')}
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
        
        <View style={styles.forgotPassword}>
          <Pressable onPress={() => navigation.navigate('ResetPasswordScreen')}>
            <Text style={styles.forgot}>Forgot your password?</Text>
          </Pressable>
        </View>
        <Pressable style={styles.button} onPress={onLoginPressed}>
          {loading ? (
            <ActivityIndicator color={theme.colors.background} />
          ) : (
            <Text style={styles.buttonText}>Log in</Text>
          )}
        </Pressable>
        <View style={styles.row}>
          <Text>You do not have an account yet?</Text>
          <Pressable onPress={() => navigation.replace('RegisterScreen')}>
            <Text style={styles.link}> Create!</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.aiHead}>
        <Image source={require('../../assets/aiConnect.png')} />
      </View>
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
              <Text style={styles.textStyle}>
                {
                  errorMessage === 'something went wrong on our side' ? 'Try again' : errorMessage ==='Invalid password' ? 'Try again': errorMessage === 'User not found'? 'Please try another email ' : ''
                }
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </Background>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    shadowColor: '#000',
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
    flex: 1,
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
    width: '100%',
    height: 300, // Set the height to avoid overlap
    borderBottomRightRadius: 100,
  },
  aiHold: {
    borderBottomRightRadius: 100,
  },
  aiHead: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  image: {
    fontSize: 30,
    color: theme.colors.background,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginForm: {
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'center',
    paddingVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContent: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
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
    textAlign: 'center',
  },
  buttonClose: {
    backgroundColor: theme.colors.primary,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
