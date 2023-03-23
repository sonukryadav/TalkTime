import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  searchInputContainer: {
    flexDirection: "row",
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
    marginRight: 10,
    borderColor: "grey",
  },
  addButton: {
    padding: 10,
    backgroundColor: "#44cefc",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundContainer: {},
  foundContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#44cefc",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
  },
});
