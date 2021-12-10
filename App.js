import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import TopBar from './components/TopBar';
import HomeScreen from './components/HomeScreen';
import BookScreen from './components/BookScreen';
import LoginScreen from './components/LoginScreen';
import UserScreen from './components/UserScreen';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false}} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="BookScreen" component={BookScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="UserScreen" component={UserScreen} options={{ headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({

  container : {
    backgroundColor: 'pink',
    height: '100%', 
    width: '100%', 
    flex: 1,
    display: 'flex', 
  },
  text : {
      color: 'blue',
      flex: 4,
      backgroundColor: 'purple',
  },

});
