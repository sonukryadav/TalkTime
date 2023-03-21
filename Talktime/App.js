import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppS from './AppS';

export default function App() {
  return (
    <>
      <AppS />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
});
