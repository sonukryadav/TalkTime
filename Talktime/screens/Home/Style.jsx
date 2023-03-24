import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 17,
    color: "grey",
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: "#44cefc",
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 50,
    margin: 10,
    position: "absolute",
    bottom: 0,
    right: 5,
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "silver",
    padding: 10,
  },
  contactImageButton: {},
  contactText: {
    fontSize: 18,
    flex: 1,
  },
  time: {
    fontSize: 12,
    color: "grey",
    alignSelf: "flex-end",
  },
});
