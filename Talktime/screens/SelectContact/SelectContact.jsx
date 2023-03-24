import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useContext, useState } from "react";

import { Feather } from "@expo/vector-icons";
import firestore from "@react-native-firebase/firestore";

import { styles } from "./Style";
import AuthContext from "../../contextHelper/authContext";

export default function SelectContact({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isloading, setLoading] = useState(true);
  const [searchUser, setSearchUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("Search any contact");

  const { getUser } = useContext(AuthContext);
  const currentUser = getUser();

  const handleSearch = async () => {
    try {
      let searchResponse = await firestore()
        .collection("Users")
        .where("phoneNumber", "==", phoneNumber)
        .get();

      let id = searchResponse.docs[0].id;
      let responseData = searchResponse.docs[0]?.data();

      if (responseData) {
        delete responseData.password;
        responseData.id = id;

        setSearchUser(responseData);
        setLoading(false);
      } else {
        setLoading(true);
        setErrorMessage("Sorry no users found matching the given contact");
      }
    } catch (error) {
      console.log("Error in SelectContact/handleSearch");
      console.log(error);
    }
  };

  const navigate = async () => {
    delete searchUser.password;

    let conversationId = [currentUser.id, searchUser.id].sort().join("_");

    navigation.replace("ChatRoom", { reciever: searchUser, conversationId });
    setPhoneNumber("");
    setSearchUser({});
    setErrorMessage("Search any contact");
    setLoading(true);
  };

  return (
    <View style={styles.main}>
      <View style={styles.searchInputContainer}>
        <TextInput
          value={phoneNumber}
          inputMode="decimal"
          onChangeText={setPhoneNumber}
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
