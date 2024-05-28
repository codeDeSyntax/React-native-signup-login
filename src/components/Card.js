// components/Card.js
import React from "react";
import { Text, StyleSheet, View, Image} from "react-native";
import { theme } from "../core/theme";

const Card = ({ image, title, }) => {
  return (
    <View
      style={styles.imageBack}
    >
      <Image source={image} style={styles.image} />
      <Text style={{ padding: 10, fontSize: 16, fontWeight: "medium", color:theme.colors.primary, fontFamily:'monospace',textAlign:'center' }}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    imageBack:{
        flex: 1,
        margin: 10,
        borderRadius:8,
        borderColor:'gray',
        backgroundColor:'#fafafa',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:6,
        // borderWidth:1,
        height:100,
        width:60

    },
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
    width: '40%',
    height: '50%',
    borderRadius:100
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Card;
