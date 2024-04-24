import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './userActions/Login'; // Import Login component
import Register from './userActions/Register'; // Import Register component
import HomePage from './userActions/Home';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f1f4f9'}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Register" component={Register}  options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={HomePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
