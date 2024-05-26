// components/Card.js
import React from "react";
import { Text, Image, StyleSheet, ImageBackground } from "react-native";
import { theme } from "../core/theme";

const Card = ({ image, title, color,text }) => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        margin: 10,
        backgroundColor: color,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      }}
    >
      <Image source={image} style={styles.image} />
      <Text style={{ padding: 10, fontSize: 16, fontWeight: "medium", color:text, fontFamily:'monospace',textAlign:'center' }}>
        {title}
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 70,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Card;
