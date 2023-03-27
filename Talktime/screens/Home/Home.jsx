import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import { Feather, EvilIcons } from "@expo/vector-icons";
import firestore from "@react-native-firebase/firestore";

import AuthContext from "../../contextHelper/authContext";

import { styles } from "./Style";

export default function Home({ navigation }) {
  const { getUser } = useContext(AuthContext);
  const currentUser = getUser();
  const [conversations, setConversations] = useState([]);

  const onSuccess = (querySnapshot) => {
    if (querySnapshot.docs.length > 0) {
      setConversations(
        querySnapshot.docs.map((e) => {
          return {
            ...e.data(),
            id: e.id,
          };
        })
      );
    }
  };

  const onError = (error) => {
    console.log(error);
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection("Conversations")
      .where("participants", "array-contains", currentUser.id)
      .orderBy("latestMessageTime", "desc")
      .onSnapshot(onSuccess, onError);

    return () => subscriber();
  }, []);
  
 

  const openChatRoom = async (recieverId) => {
    let snapshot = await firestore().collection("Users").doc(recieverId).get();
    let id = snapshot.id;
    let reciever = snapshot.data();
    reciever.id = id;

    let conversationId = [currentUser.id, recieverId].sort().join("_");

    navigation.navigate("ChatRoom", { reciever, conversationId });
  };

  const renderContacts = ({ item }) => {
    let time = item.latestMessageTime.toDate().toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });

    let recieverId = item.participants.filter((e) => e != currentUser.id)[0];

    return (
      <TouchableOpacity
        style={styles.contactContainer}
        onPress={() => openChatRoom(recieverId)}
      >
        <TouchableOpacity style={styles.contactImageButton}>
          <EvilIcons name="user" size={40} color="black" />
        </TouchableOpacity>
        <Text style={styles.contactText}>{item.latestMessage}</Text>
        <Text style={styles.time}>{time}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
      {conversations.length > 0 ? (
        <FlatList data={conversations} renderItem={renderContacts} />
      ) : (
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>
            Welcome, looks like you are new here
          </Text>
          <Text style={styles.welcomeText}>
            Press the add button below to message anyone
          </Text>
        </View>
      )}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("SelectContact")}
      >
        <Feather name="plus" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}
