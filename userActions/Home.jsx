import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';

const HomePage = ({ navigation }) => {
  // Define some random content
  const randomContent = [
    'Welcome to your homepage!',
    'Hello there, user!',
    'Enjoy your stay!',
    'What brings you here today?',
    'Ready for some awesome content?',
  ];

  // Pick a random content from the array
  const randomIndex = Math.floor(Math.random() * randomContent.length);
  const randomText = randomContent[randomIndex];

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/236x/21/f4/50/21f450cb88d2068b934d1cd881fcadf7.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{randomText}</Text>
        <Button title="Logout" onPress={() => navigation.navigate('Login')} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple', // Semi-transparent background color
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cover the entire screen
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', // White text color
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Text shadow for better visibility
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default HomePage;
