import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { Feather } from "@expo/vector-icons";
import firestore from "@react-native-firebase/firestore";

import { styles } from "./Style";

export default function SelectContact({ navigation }) {
  const [search, setSearch] = useState("");
  const [isloading, setLoading] = useState(true);
  const [searchUser, setSearchUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("Search any contact");

  const handleSearch = async () => {
    let response = await firestore().collection("Users").doc(search).get();
    if (response.exists) {
      setSearchUser(response.data());
      setLoading(false);
    } else {
      setLoading(true);
      setErrorMessage("Sorry no users found matching the given contact");
    }
  };

  const navigate = () => {
    navigation.replace("ChatRoom", { searchUser });
    setSearch("");
    setSearchUser({});
    setErrorMessage("Search any contact");
    setLoading(true);
  };

  return (
    <View style={styles.main}>
      <View style={styles.searchInputContainer}>
        <TextInput
          value={search}
          inputMode="decimal"
          onChangeText={setSearch}
          placeholder="Enter contact number"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleSearch}>
          <Feather name="user-plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {isloading ? (
          <Text>{errorMessage}</Text>
        ) : (
          <View style={styles.foundContainer}>
            <Text>{searchUser?.name}</Text>
            <TouchableOpacity style={styles.button} onPress={navigate}>
              <Text style={styles.buttonText}>Chat</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
