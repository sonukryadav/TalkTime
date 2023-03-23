import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigation";

import { Navbar } from "./components";
import { AuthContextProvider } from "./contextHelper/authContext";

export default function App() {
  return (
    <NavigationContainer>
      <Navbar />
      <AuthContextProvider>
        <StackNavigator />
      </AuthContextProvider>
    </NavigationContainer>
  );
}
