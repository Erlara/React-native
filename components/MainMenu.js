import { NavigationContainer } from "@react-navigation/native";
import { RegistrationScreen } from "../Screens/auth/RegistrationScreen";
import React from "react";
import { LoginScreen } from "../Screens/auth/LoginScreen";
import { Home } from "../Screens/main/Home";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

const MainStack = createStackNavigator();

export const MainMenu = () => {
  return (
    // <>
    //   <RegistrationScreen />
    // </>
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
