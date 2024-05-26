// App.js
import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ImageBackground,
  Pressable,
  Text,
} from "react-native";
import Card from "../components/Card";
import { theme } from "../core/theme";

const DATA = [
  {
    id: "2",
    title: "AI train",
    image: require("../../assets/diffAi.png"),
  },
  {
    id: "3",
    title: "AI bot",
    image: require("../../assets/bot.jpeg"),
    color: "#efefef",
  },
  {
    id: "4",
    title: "Writing AI",
    image: require("../../assets/essayAi.png"),
    color: "#0d051a",
    textcolor: "#f5f5f5",
  },
  {
    id: "5",
    title: "chatgpt",
    image: require("../../assets/genAi.jpeg"),
    color: "#4a91e3",
    textcolor: "#f5f5f5",
  },
  {
    id: "6",
    title: "IMAGE GENERATOR",
    image: require("../../assets/imgGen.jpeg"),
    color: "#000000",
    textcolor: "#f5f5f5",
  },
  {
    id: "7",
    title: "Analytics",
    image: require("../../assets/Ai.jpeg"),
    color: "#325281",
    textcolor: "#f5f5f5",
  },
  // Add more items as needed
];

const Home = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Card
      image={item.image}
      title={item.title}
      color={item.color}
      text={item.textcolor}
    />
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.ai}
        source={require("../../assets/allAi.jpeg")}
        imageStyle={{ borderBottomRightRadius: 100 }}
      >
        <View style={styles.arrow}>
          <Pressable
            style={styles.signupBack}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.image}>↩</Text>
          </Pressable>
        </View>
        <Text
          style={{
            color: "#fafafa",
            textAlign: "center",
            fontSize: 20,
            marginBottom: 20,
            fontFamily:'monospace'
          }}
        >
          Welcome to AllAI-homie
        </Text>
      </ImageBackground>
      <Text style={styles.headerText}>Explore a tonne of AI awesome tools</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 5,
  },
  ai: {
    width: "100%",
    height: 250, // Set the height to avoid overlap
    borderBottomRightRadius: 100,
  },
  signupBack: {
    height: 24,
    width: 24,
    marginBottom: 20,
  },
  arrow: {
    padding: 20,
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign:'center',
    color: theme.colors.primary,
    marginBottom: 8,
    paddingVertical: 8,
  },
  image: {
    fontSize: 24,
    color: "#fff",
  },
});

export default Home;
