import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppS from './AppS';
import Context1 from "./components/ContextS/Context";

export default function App() {
  return (
    <>
      <Context1>
        <AppS />
        <StatusBar style="auto" />
      </Context1>
    </>
  );
}

const styles = StyleSheet.create({
});
