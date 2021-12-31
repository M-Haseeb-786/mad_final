import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Design from "./screens/Design";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BookDetail" component={Details} />
        <Stack.Screen name="Design" component={Design} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
