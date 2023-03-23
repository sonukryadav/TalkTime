import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  background: {
    flex: 1,
    padding: 10,
  },
  centerAlign: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  inputOutline: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    fontSize: 16,
    marginVertical: 5,
  },
  inputPasswordContainer: {
    flexDirection: "row",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginVertical: 5,
  },
  inputPassword: {
    flexGrow: 1,
    fontSize: 16,
  },
  arrowButton: {
    backgroundColor: "#44cefc",
    padding: 10,
    borderRadius: 50,
    alignSelf: "flex-end",
  },
  signupButton: {
    marginVertical: 5,
  },
  signupButtonText: {
    color: "grey",
    fontWeight: "bold",
  },
});
