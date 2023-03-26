import { View, Text } from "react-native";
import React, { useContext } from "react";
import { CustomButton } from "../../components";
import AuthContext from "../../contextHelper/authContext";

export default function Home() {
  const { logoutUser } = useContext(AuthContext);
  return (
    <View>
      <Text>Home</Text>
      <CustomButton title="Log out" onPress={logoutUser} />
    </View>
  );
}
