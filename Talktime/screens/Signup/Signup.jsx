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

import { CustomButton } from "../../components";

import { styles } from "./Style";

const background_image =
  "https://firebasestorage.googleapis.com/v0/b/mymasai-school.appspot.com/o/project_files%2Fev2-image%2Fbackground3.jpg?alt=media&token=ab4e22d7-656a-48a7-9ecd-a4f2c73fa58e";

export default function Signup({ navigation }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      if (name && phoneNumber && password) {
        let duplicateCheck = await firestore()
          .collection("Contacts")
          .doc(phoneNumber)
          .get();

        if (duplicateCheck.exists) {
          Alert.alert("Error", "This phone number is already registered");
          return;
        }

        await firestore().collection("Users").add({
          name,
          phoneNumber,
          password,
        });

        await firestore().collection("Contacts").doc(phoneNumber).set({
          dummy: null,
        });

        Alert.alert(
          "Success",
          "You have successfully registered into Talktime",
          [
            {
              text: "OK",
              onPress: () => navigation.navigate("Login"),
            },
          ]
        );
      } else {
        Alert.alert("Error", "Please fill all the details");
      }
    } catch (error) {
      Alert.alert("Error", "Somethign went wrong");
      console.log("Error in handle Signup");
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
          <Text style={styles.header}>Please Register yourself below</Text>
          <TextInput
            value={name}
            placeholder="Enter name"
            onChangeText={setName}
            style={styles.inputOutline}
          />
          <TextInput
            value={phoneNumber}
            inputMode="numeric"
            placeholder="Enter mobile number"
            onChangeText={setPhoneNumber}
            style={styles.inputOutline}
          />

          <TextInput
            value={password}
            placeholder="Enter your password"
            onChangeText={setPassword}
            style={styles.inputOutline}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <CustomButton title="Signup" onPress={handleSignup} />
            <CustomButton
              title="Login"
              onPress={() => {
                navigation.navigate("Login");
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
