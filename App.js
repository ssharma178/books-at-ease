import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import TopBar from './components/TopBar';
import HomeScreen from './components/HomeScreen';
import BookScreen from './components/BookScreen';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC5XPWEhXuea5RufYb-pLSkzdPIOp42Lqs",
//   authDomain: "books-at-ease.firebaseapp.com",
//   projectId: "books-at-ease",
//   storageBucket: "books-at-ease.appspot.com",
//   messagingSenderId: "35799797743",
//   appId: "1:35799797743:web:7dad271759c36ca172701a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

export default function App() {

  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="BookScreen" component={BookScreen} options={{ headerShown: false }}/>
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
