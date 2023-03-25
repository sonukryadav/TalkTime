import {
  View,
  Text,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";

import firestore, { firebase } from "@react-native-firebase/firestore";
import { Feather, EvilIcons } from "@expo/vector-icons";

import AuthContext from "../../contextHelper/authContext";

const Background_light = require("../../resources/images/chat-background-light.jpg");

import { styles } from "./Style";

export default function ChatRoom({ navigation, route }) {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");

  const { getUser } = useContext(AuthContext);
  const sender = getUser();

  const { reciever, conversationId } = route.params;

  const onResult = (querySnapshot) => {
    if (querySnapshot.docs.length > 0) {
      setChats(
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
    console.error(error);
  };

  function headerRight() {
    return (
      <View>
        <TouchableOpacity style={styles.contactImageButton}>
          <EvilIcons name="user" size={40} color="black" />
        </TouchableOpacity>
      </View>
    );
  }

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: reciever.name,
      headerRight: headerRight,
      headerStyle: {
        backgroundColor: "#44cefc",
      },
    });
  }, []);

  useEffect(() => {
    const subscriber = firestore()
      .collection("Messages")
      .where("conversationId", "==", conversationId)
      .orderBy("timestamp", "desc")
      .onSnapshot(onResult, onError);
    return () => subscriber();
  }, []);

  const sendMessage = async () => {
    try {
      if (message != "") {
        await firestore().collection("Messages").add({
          conversationId,
          senderId: sender.id,
          recieverId: reciever.id,
          message,
          timestamp: firebase.firestore.Timestamp.now(),
        });

        await firestore()
          .collection("Conversations")
          .doc(conversationId)
          .set({
            participants: [sender.id, reciever.id],
            latestMessage: message,
            latestMessageTime: firebase.firestore.Timestamp.now(),
          });

        setMessage("");
      }
    } catch (error) {}
  };

  const renderItem = ({ item }) => {
    let time = item.timestamp.toDate().toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });

    let isSender = item.senderId == sender.id;
    return (
      <View
        style={[
          styles.messageContainer,
          isSender ? styles.messageSent : styles.messageRecieved,
        ]}
      >
        <View style={isSender ? styles.rightTriangle : styles.leftTriangle} />
        <Text style={styles.message}>{item.message}</Text>
        <Text
          style={[
            styles.time,
            isSender ? { alignSelf: "flex-end" } : { alignSelf: "flex-start" },
          ]}
        >
          {time}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <ImageBackground source={Background_light} style={styles.imageBackground}>
        <FlatList
          data={chats}
          renderItem={renderItem}
          inverted={true}
          keyExtractor={({ id }) => id}
          style={styles.chatList}
        />
        <View style={styles.chatInputContainer}>
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Send a message"
            style={styles.chatInput}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Feather name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
