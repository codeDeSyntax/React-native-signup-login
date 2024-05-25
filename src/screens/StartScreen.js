import React from "react";
import { ImageBackground, StyleSheet, View, Text, Pressable,Image, } from "react-native";
import { theme } from "../core/theme";

export default function Background({navigation}) {
  return (
    <ImageBackground
      source={require("../assets/dot.png")}
      // resizeMode="repeat"
      style={styles.container}
    >
      <Image source={require("../assets/startImgg.png")} style={styles.startImg}/>

      <Text style={styles.headerText}>Welcome to our Homepage</Text>
      <Text style={styles.descriptionText}>Login or signup to explore more features on this app</Text>

    <Pressable style={styles.signupBtn} onPress={(e) => {
      e.preventDefault();
      navigation.navigate('RegisterScreen')
    }}>
      Sign up
    </Pressable>
    <Pressable style={styles.loginBtn}>
      Login
    </Pressable>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    backgroundColor:theme.colors.background,
    alignSelf: "center",
    alignItems: "center",

    // justifyContent: "center",
  },
  startImg:{
    height:350,
    width:400,
  
  },
  headerText:{
    fontSize:20,
    fontWeight:'bold',
    color:theme.colors.secondary
  },

  descriptionText:{
    fontSize:15,
    textAlign:'center',
    marginBottom:10,
  },
  
  signupBtn:{
    width:300,
    height:20,
    padding:18,
    borderWidth:1,
    borderColor:theme.colors.primary,
    marginTop:10,
    borderRadius:8,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  loginBtn:{
    width:300,
    height:20,
    backgroundColor:theme.colors.primary,
    color:theme.colors.background,
    borderRadius:8,
    padding:20,
    marginTop:10,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },


});
