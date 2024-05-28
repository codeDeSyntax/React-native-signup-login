import React from 'react'
// import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {  CardStyleInterpolators } from '@react-navigation/stack';
// import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
} from './src/screens'
import Home from './src/screens/Home'
import { UserProvider } from './src/core/useContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator()

export default function App() {
  return (
    
    <GestureHandlerRootView style={{flex:1}}>
        <UserProvider>
        <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </UserProvider>
    </GestureHandlerRootView>
    
  )
}
