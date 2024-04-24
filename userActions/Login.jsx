import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, TextInput, Text,Pressable } from 'react-native';
import axios from 'axios';
const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', {
                email: email,
                password: password,
            });
            if(response.status === 200) {
                console.log(response.data);
                navigation.navigate('Home')
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <View style={styles.login}>
            <View style={styles.container}>
                <Image
                    source={{
                        uri: "https://cdn.vectorstock.com/i/500p/52/68/purple-user-icon-in-the-circle-thin-line-vector-23745268.avif",
                    }}
                    style={styles.userImage}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={() => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={() => setPassword(password)}
                />
            </View>
            <Pressable>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </Pressable>

            <Pressable style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>LOGIN</Text>
            </Pressable>

            <View style={styles.container}>
                <Image
                    source={{
                        uri: "https://img.freepik.com/premium-vector/artificial-intelligence-circuit-line-style-machine-learning-design-smart-network-digital-technology-ai-vector-illustration_41981-2774.jpg",
                    }}
                    style={styles.aiImage}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    login:{
        width:'100vw',
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        // justifyContent:'center'
    },
    container: {
        display:'flex',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'start',
        width:'100%',
        paddingVertical:4,
        marginBottom:30
       },
       image :{
        marginTop: 100
      },
    inputView: {
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    // 'text': '#030508',
  // 'background': '#f1f4f9',
  // 'primary': '#587fbb',
  // 'secondary': '#ae9cd7',
  // 'accent': '#a77ac9',
    TextInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 100,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: 300,
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    loginBtn:
    {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#672e91",
        color:'white',
        
    },
    loginText:{
        color:'white'
    },
    userImage: {
        width: 200,
        height: 160,
        borderRadius: 10,
        marginTop:10,
        shadowOpacity:20,
        shadowColor:'gray'
      },
      aiImage:{
        width: 280,
        height: 200,
        borderRadius: 10,
        marginTop:10,
      }
});

export default Login;
