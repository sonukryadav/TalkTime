import React, { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppS from './AppS';
import Context1 from "./components/ContextS/Context";
import store from "./components/ReduxToolkitS/Store";
import { Provider } from "react-redux";

export default function App() {

  return (
    <>
      <Provider store={store}>
        <Context1>
          <AppS />
          <StatusBar style="auto" />
        </Context1>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
});
