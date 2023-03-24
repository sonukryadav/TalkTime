import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";

import firestore from "@react-native-firebase/firestore";

import { Ionicons, AntDesign } from "@expo/vector-icons";

import { styles } from "./Style";
import AuthContext from "../../contextHelper/authContext";

const background_image =
  "https://firebasestorage.googleapis.com/v0/b/mymasai-school.appspot.com/o/project_files%2Fev2-image%2Fbackground3.jpg?alt=media&token=ab4e22d7-656a-48a7-9ecd-a4f2c73fa58e";

export default function Login({ navigation }) {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { loginUser } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      if (number && password) {
        let response = await firestore().collection("Users").doc(number).get();

        let responseData = response.data();

        if (!responseData || responseData.password != password) {
          Alert.alert("Error", "Invalid credentials");
        }

        delete responseData.password;

        loginUser({ ...responseData, number });
      } else {
        Alert.alert("Error", "Please fill all the details");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
      console.log("Error in login handleLogin");
      console.log(error);
    }
  };

  return (
    <View style={styles.main}>
      <ImageBackground
        source={{ uri: background_image }}
        style={styles.background}
      >
        <View style={styles.centerAlign}>
          <Text style={styles.header}>
            Enter your mobile number and password to continue
          </Text>
          <TextInput
            value={number}
            inputMode="numeric"
            placeholder="Enter mobile number"
            onChangeText={setNumber}
            style={styles.inputOutline}
          />
          <View style={styles.inputPasswordContainer}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!passwordVisible}
              style={styles.inputPassword}
              placeholder="Enter your password"
            />
            <Ionicons
              name={passwordVisible ? "eye" : "eye-off"}
              size={24}
              color="black"
              onPress={() => {
                setPasswordVisible(!passwordVisible);
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.signupButtonText}>New here? Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.arrowButton} onPress={handleLogin}>
            <AntDesign name="arrowright" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
