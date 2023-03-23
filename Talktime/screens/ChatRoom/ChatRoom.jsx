import { View, Text } from "react-native";
import React, { useContext } from "react";
import AuthContext from "../../contextHelper/authContext";

export default function ChatRoom({ navigation, route }) {
  const { getUser } = useContext(AuthContext);

  const sender = getUser();
  const reciever = route.params;

  return (
    <View>
      <Text>ChatRoom</Text>
    </View>
  );
}
