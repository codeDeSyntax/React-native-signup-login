
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  const registerData = {
    username: username,
    email: email,
    password: password,
    gender: gender,
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/register',
        registerData
      );
      console.log('Response:', response.data);
      if (response.status === 201) {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.log('Error:', error.response.data); // Log the error response from the server
      if (error.response.data.message === 'User already exists') {
        setErrorModalVisible(true);
      }
    }
  };

  const inputs = [
    { id: 1, placeholder: 'Username', value: username, func: setUsername },
    { id: 2, placeholder: 'Email', value: email, func: setEmail },
    { id: 3, placeholder: 'Password', value: password, func: setPassword },
    { id: 4, placeholder: 'gender', value: gender, func: setGender },
  ];

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Signup up for a seamless experience</Text>

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              'https://cdn.vectorstock.com/i/1000x1000/98/13/isometric-mobile-user-login-security-transfer-vector-47559813.webp',
          }}
          style={styles.registerImage}
        />
      </View>
     <View style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
     <Text style={styles.title}>Sign up / </Text>
     <Text style={{fontSize:20,textDecoration:'underline',color:'#672e91'}} onPress={() => navigation.navigate('Login')}>Go to login </Text>
     </View>
      {/* social media icons */}
      <View style={styles.social}>
        <View>
          <Icon name="google" size={30} color="red" style={styles.icon} />
        </View>

        <View>
          <Icon name="facebook" size={30} color="blue" style={styles.icon} />
        </View>

        <View>
          <Icon name="twitter" size={30} color="black" style={styles.icon} />
        </View>
      </View>
      <View style={styles.Or}>
        <View style={styles.line} />
        <Text style={styles.text}>OR</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.form}>
        {inputs.map((eachInput) => (
          <TextInput
            key={eachInput.id}
            style={styles.input}
            placeholder={eachInput.placeholder}
            value={eachInput.value}
            onChangeText={eachInput.func}
          />
        ))}
        <Pressable style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={errorModalVisible}
        onRequestClose={() => {
          setErrorModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Email already taken</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setErrorModalVisible(false)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f1f4f9',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: '#030508',
    paddingVertical: 20,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerImage: {
    width: 380,
    height: 230,
    borderRadius: 10,
  },
  form: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 300,
  },
  button: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#672e91',
   

 marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  icon: {
    padding: 4,
    backgroundColor: 'white',
    borderRadius: 100,
    width: 40,
    height: 40,
    justifyContent: 'center',
    textAlign: 'center',
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '84%',
    paddingHorizontal: 20,
    backgroundColor: '',
    borderRadius: 50,
    marginTop: 10,
  },
  Or: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    width: '100%',
    gap: 4,
  },
  line: {
    borderWidth: 1,
    borderColor: '#a77ac9',
    width: '30%',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
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
  buttonClose: {
    backgroundColor: '#672e91',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Register;


