import { NavigationContainer } from "@react-navigation/native";
//import { RegistrationScreen } from "../Screens/RegistrationScreen";
import React from "react";
import { LoginScreen } from "../Screens/LoginScreen";
import "react-native-gesture-handler";

export const Main = () => {
  return (
    <NavigationContainer>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
    </NavigationContainer>
  );
};
