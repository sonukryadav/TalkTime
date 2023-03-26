import React from "react";
import { View, Text, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Context from "../context/Context";
import { signUp, signIn } from "../firebase";
import { useState, useContext } from "react";
import DropDownPicker from "react-native-dropdown-picker";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("India"); // default country is India

  const {
    theme: { colors },
  } = useContext(Context);

  async function handlePress() {
    if (mode === "signUp") {
      await signUp(email, password);
    }
    if (mode === "signIn") {
      await signIn(email, password);
    }
  }

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <View
        style={{
          marginTop: 40,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/welcome-img.png")}
          style={{
            width: 300,
            height: 340,
            marginTop: 150,
            alignItems: "center",
          }}
          resizeMode="cover"
        />
        </View>
        <View style={{
          marginTop: 40,
          alignItems: "center",
          marginBottom:250,
        }} >
        <Text
          style={{
            color: colors.foreground,
            fontSize: 24,
            marginTop: 40,
            fontWeight: "bold",
          }}
        >
          Welcome to TalkTime
        </Text>

        <Text
          style={{
            color: colors.graytext,
            fontSize: 12,
            marginTop: 20,
            textAlign: "center",
          }}
        >
          {" "}
          Read our Privacy Policy ! Tap "Agree and continue" to accept the Terms
          of Service.{" "}
        </Text>

        <TextInput
          placeholder="Phone Number"
          value={email}
          onChangeText={setEmail}
          style={{
            borderBottomColor: colors.primary,
            borderBottomWidth: 2,
            width: 200,
            marginTop: 20,
          }}
          keyboardType="numeric" // added this prop to accept only numeric input
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{
            borderBottomColor: colors.primary,
            borderBottomWidth: 2,
            width: 200,
            marginTop: 20,
          }}
        />
        <DropDownPicker
          items={[
            { label: "India (+91)", value: "India" },
            { label: "USA (+1)", value: "USA" },
            { label: "UK (+44)", value: "UK" },
            // add more countries with their phone number extensions
          ]}
          defaultValue={country}
          onChangeItem={(item) => setCountry(item.value)}
          containerStyle={{ height: 40, width: 200 }}
          style={{ backgroundColor: colors.white, marginTop: 20 }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: colors.white }}
        />
      </View>
    </View>
  );
}
