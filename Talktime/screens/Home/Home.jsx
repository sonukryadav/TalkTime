import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

import AuthContext from "../../contextHelper/authContext";

import { Feather } from "@expo/vector-icons";

import { styles } from "./Style";

export default function Home({ navigation }) {
  const { getUser } = useContext(AuthContext);
  const currentUser = getUser();

  return (
    <View style={styles.main}>
      {currentUser?.chat_contacts?.length > 0 ? (
        <Text>show list of contacts</Text>
      ) : (
        <View style={styles.fallback}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={styles.welcomeText}>
              Welcome, Looks like this is your first time here
            </Text>
            <Text style={styles.welcomeText}>
              Press the add button below to message a contact
            </Text>
          </View>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate("SelectContact")}
          >
            <Feather name="plus" size={30} color="black" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
