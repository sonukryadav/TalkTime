import React, { useState } from 'react';
import { Button, Overlay, Icon } from '@rneui/themed';
import { Text, StyleSheet, TextInput, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { overlay2Fun, profileUpdate } from "../ReduxToolkitS/ProfileSettingSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Overlay2 = () => {

    const {
    firstName,
    lastName,
    profilePicture,
    mobileNumber,
    userAccountName,
    bio,
    email,
    password,
    overly1,
    overly2 } = useSelector((state) => state.profile);
    const [inp, setInp] = useState({
        mobile1: mobileNumber,
        firstname1: firstName,
        lastname1:lastName,
        bio1: bio,
        email1: email,
        oldPassword1: "",
        newPassword1: "",
        confirmPassword1: "",
    });

    const ins = (name, value) => {
        setInp({ ...inp, [name]: value });
    }

    // const { overly2 } = useSelector((state) => state.profile);
    const dt = useSelector((state) => state.profile);
    const { theme } = useSelector((state) => state.theme);
    const dispatch = useDispatch();
  const navigation = useNavigation();

  const storeData = async (value) => {
    try {
      let dd = JSON.stringify(value);
      await AsyncStorage.setItem("profile", dd);
      // console.log(dd)
    } catch (e) {
      console.log(e)
    }
  };


    const toggleOverlay = () => {

        if (password !== inp.oldPassword1) {
            Alert.alert("Provide the correct old password.")
            return;
        }
        if (inp.newPassword1 !== inp.confirmPassword1) {
            Alert.alert("Password did not match \n New password and confirm password should be same.")
            return;
        }

        const initialState = {
            firstName: inp.firstname1,
            lastName: inp.lastname1,
            profilePicture: profilePicture,
            mobileNumber: inp.mobile1,
            userAccountName: userAccountName,
            bio: inp.bio1,
            email: inp.email1,
            password: inp.newPassword1,
            overly1: false,
            overly2: false,
        };
        dispatch(overlay2Fun());
      dispatch(profileUpdate(initialState));
      storeData(initialState);
        // console.log(inp)
    };

  const toggleOverlay1 = () => {
    dispatch(overlay2Fun());
  }

    return (
      <View style={styles.v0}>
        <Overlay
          isVisible={overly2}
          onBackdropPress={toggleOverlay1}
          overlayStyle={styles.l}
        >
          <ScrollView contentContainerStyle={styles.sc1}>
            <View style={styles.container}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Mobile Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your mobile number"
                  value={inp.mobile1}
                  onChangeText={(text) => ins("mobile1", text)}
                  keyboardType="phone-pad"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>First name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your first name"
                  value={inp.firstname1}
                  onChangeText={(text) => ins("firstname1", text)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your last name"
                  value={inp.lastname1}
                  onChangeText={(text) => ins("lastname1", text)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Bio</Text>
                <TextInput
                  style={[styles.input, styles.bioInput]}
                  placeholder="Tell us about yourself"
                  value={inp.bio1}
                  onChangeText={(text) => ins("bio1", text)}
                  multiline={true}
                  numberOfLines={3}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email address"
                  value={inp.email1}
                  onChangeText={(text) => ins("email1", text)}
                  keyboardType="email-address"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Old Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your old password"
                  value={inp.oldPassword1}
                  onChangeText={(text) => ins("oldPassword1", text)}
                  secureTextEntry={true}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>New Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your new password"
                  value={inp.newPassword1}
                  onChangeText={(text) => ins("newPassword1", text)}
                  secureTextEntry={true}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm your new password"
                  value={inp.confirmPassword1}
                  onChangeText={(text) => ins("confirmPassword1", text)}
                  secureTextEntry={true}
                />
              </View>
            </View>
          </ScrollView>
          <View>
            <TouchableOpacity onPress={toggleOverlay}>
              <Text style={styles.t7}>Update</Text>
            </TouchableOpacity>
          </View>
        </Overlay>
      </View>
    );
};

const styles = StyleSheet.create({
  v0: {
    flex: 0,
    margin: 50,
    height: 100,
    flexDirection: "row",
  },
  sc1: {
    // flex: 1,
    marginVertical: 20,
    justifyContent: "center",
  },
  l: {
    height: "80%",
    width: "80%",
    borderWidth:3,
  },
  container: {
    flex: 0,
    padding: 20,
    width: "90%",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  bioInput: {
    height: 80,
  },
  t7: {
    fontSize: 22,
    backgroundColor: "rgb(51, 153, 255)",
    paddingVertical: 8,
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "white",
    fontWeight: 700,
    letterSpacing: 1,
    textAlign: "center",
  },
});

export default Overlay2;