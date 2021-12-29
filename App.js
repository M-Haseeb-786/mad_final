import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Details from './screens/Details'; 
import Design from './screens/Design'; 
import firebase from '@react-native-firebase/firestore';
import file from "../Books.txt";

export default function App() {

  firestore()
  .collection('Books')
  .get()
  .then(querySnapshot =>
    {
      console.log('Total Books ', querySnapshot.size);
      // if(documentSnapshot.exists)
      // {
      //   console.log('User data: ', documentSnapshot.data());
      // }
      querySnapshot.forEach(documentSnapshot =>
      {
        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
      });

    }
    );

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BookDetail" component={Details} />
        <text> Go to Design Screen</text>
        <Stack.Screen name="Design" component={Design} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
