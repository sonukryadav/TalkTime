import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  chatList: {
    flex: 1,
  },
  messageSent: {
    alignSelf: "flex-end",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  messageRecieved: {
    alignSelf: "flex-start",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  messageContainer: {
    backgroundColor: "#FFC93C",
    padding: 5,
    marginVertical: 5,
  },
  message: {},
  time: {
    fontSize: 12,
    color: "grey",
  },
  chatInputContainer: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  chatInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 10,
    padding: 10,
    borderColor: "silver",
  },
  sendButton: {
    backgroundColor: "#44cefc",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingHorizontal: 13,
    borderRadius: 50,
  },
});
