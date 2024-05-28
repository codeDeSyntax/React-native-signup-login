// App.js
import  { useState,useContext } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ImageBackground,
  Pressable,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import Card from "../components/Card";
import { theme } from "../core/theme";
import { UserContext } from "../core/useContext";

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
  const [searchQuery, setSearchQuery] = useState("");
  const { username } = useContext(UserContext);

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
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.userContainer}>
          <Text style={styles.username}>{username}</Text>
        </View>
        <ImageBackground
          style={styles.ai}
          source={require("../../assets/allAi.jpeg")}
          imageStyle={{ borderBottomRightRadius: 100 }}
        >
          <Text style={styles.welcomeText}>
            Welcome to AllAI-homie
          </Text>
        </ImageBackground>
        <Text style={styles.headerText}>Explore a tonne of AI awesome tools</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search AI tools..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatList}
        />
      </ScrollView>
      <Pressable
        style={styles.signupBack}
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        <Text style={styles.image}>↩</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  userContainer: {
    padding: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  username: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  ai: {
    width: "100%",
    height: 250,
    borderBottomRightRadius: 100,
    marginBottom: 20,
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
  },
  signupBack: {
    position: "absolute",
    top: 20,
    left: 20,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 15,
    zIndex: 1,
  },
  welcomeText: {
    color: "#fafafa",
    textAlign: "center",
    fontSize: 22,
    marginBottom: 20,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
    color: theme.colors.primary,
    marginBottom: 15,
  },
  searchBar: {
    height: 40,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  image: {
    fontSize: 24,
    color: "#fff",
  },
  
});

export default Home;
