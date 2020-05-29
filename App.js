import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import BrainsOut from "./src/screens/BrainsOut";
import BrainTeasers from "./src/screens/BrainTeasers";
import MentalMaths from "./src/screens/MentalMaths";
import TipsnTricks from "./src/screens/TipsnTricks";
import MathsOptions from "./src/screens/MathsOptions";
import PlayMaths from "./src/screens/PlayMaths";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Index"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#495057",
            // backgroundColor: "#69687f",
          },
          headerTintColor: "#FCFFFF",
          headerTitleStyle: {
            // fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
          component={IndexScreen}
        />
        <Stack.Screen name="BrainsOut" component={BrainsOut} />
        <Stack.Screen name="BrainTeasers" component={BrainTeasers} />
        <Stack.Screen
          name="MentalMaths"
          options={{ headerShown: false }}
          component={MentalMaths}
        />
        <Stack.Screen
          name="MathsOptions"
          options={{ headerShown: false }}
          component={MathsOptions}
        />
        <Stack.Screen name="TipsnTricks" component={TipsnTricks} />
        <Stack.Screen
          name="PlayMaths"
          // options={{
          //   title: "Mental Maths",
          // }}
          options={({ route }) => ({
            title: "Mental Maths",
            // headerStyle: { backgroundColor: route.params.backgroundColor },
            // headerTintColor: "red",
          })}
          component={PlayMaths}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
