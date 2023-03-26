import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  chatList: {},
  messageSent: {
    alignSelf: "flex-end",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#44cefc",
  },
  messageRecieved: {
    alignSelf: "flex-start",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#fcd872",
  },
  messageContainer: {
    padding: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginHorizontal: 15,
    position: "relative",
    maxWidth: WIDTH - 150,
  },
  message: {
    fontSize: 15,
  },
  triangle: {},
  leftTriangle: {
    position: "absolute",
    left: -10,
    top: 0,
    borderRightWidth: 12,
    borderRightColor: "#fcd872",
    borderBottomWidth: 12,
    borderBottomColor: "transparent",
  },
  rightTriangle: {
    position: "absolute",
    right: -10,
    top: 0,
    borderLeftWidth: 12,
    borderLeftColor: "#44cefc",
    borderBottomWidth: 12,
    borderBottomColor: "transparent",
  },
  time: {
    fontSize: 12,
    color: "grey",
  },
  chatInputContainer: {
    padding: 10,
    flexDirection: "row",
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
    backgroundColor: "white",
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
