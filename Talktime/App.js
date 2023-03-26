import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import { Provider } from "react-redux";
import { MenuProvider } from "react-native-popup-menu";

import store from "./components/ReduxToolkitS/Store";
import AppS from "./AppS";

import { AuthContextProvider } from "./contextHelper/authContext";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="#44cefc" barStyle="dark-content" />
        <AuthContextProvider>
          <MenuProvider>
            <AppS />
          </MenuProvider>
        </AuthContextProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
