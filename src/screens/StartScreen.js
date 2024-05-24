import React from "react";
import { ImageBackground, StyleSheet, View, Text, Pressable,Image, } from "react-native";
import { theme } from "../core/theme";

export default function Background() {
  return (
    <ImageBackground
      source={require("../assets/dot.png")}
      // resizeMode="repeat"
      style={styles.container}
    >
      <Image source={require("../assets/startImgg.png")} style={styles.startImg}/>

      <Text style={styles.headerText}>Welcome to our Homepage</Text>
      <Text style={styles.descriptionText}>Login or signup to explore more features on this app</Text>
      
    <Pressable>
      Sign up
    </Pressable>
    <Pressable>
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

  },

  descriptionText:{
    fontSize:15,
    textAlign:'center'
  }
});
