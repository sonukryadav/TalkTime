import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigation";

import { MenuProvider } from "react-native-popup-menu";
import { AuthContextProvider } from "./contextHelper/authContext";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#44cefc" barStyle="dark-content" />
      <AuthContextProvider>
        <MenuProvider>
          <StackNavigator />
        </MenuProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}
