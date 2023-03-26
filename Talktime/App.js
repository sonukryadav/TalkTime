import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";
import StackNavigator from "./navigation/StackNavigation";
import { MenuProvider } from "react-native-popup-menu";

import store from "./components/ReduxToolkitS/Store";
import AppS from "./AppS";

import { AuthContextProvider } from "./contextHelper/authContext";

export default function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <MenuProvider>
          <AppS />
          android.os.Bundle;
        </MenuProvider>
      </AuthContextProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});
