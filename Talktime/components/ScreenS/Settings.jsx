import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import UserAvatar from "react-native-avatar-generator";
import { useSelector } from "react-redux";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import PtoAnim from './PtoAnim';

const Settings = () => {
    const { firstName, lastName, profilePicture, mobileNumber, userAccountName, bio, email, password } = useSelector((state) => state.profile);
    return (
        <ScrollView style={styles.v0}>
            <View style={styles.v1}>


                <View style={styles.v2}>
                    <View style={styles.v3}>
                        {profilePicture ?
                        <Image source={{ uri: profilePicture }} style={styles.profilepic} />
                        : <UserAvatar
                        size={80}
                        fontWeight="bold"
                        color="black"
                        backgroundColor="lightblue"
                        firstName={firstName}
                        lastName={lastName}
                        />
                    }
                    </View>
                    <View style={styles.v4}>
                        <Text style={styles.t1}>{ firstName +" "+ lastName}</Text>
                        <Text style={styles.t2}>{"Online"}</Text>
                    </View>
                </View>


                <View style={styles.v5}>
                    <View style={styles.v6}></View>
                    <View style={styles.v7}>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="camera-plus" size={40} color={"white"} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.v8}>
                    <View style={styles.v9}>
                        <Text style={styles.t3}>Account</Text>
                    </View>
                    <View style={styles.v10}>
                        <Text style={styles.t4}>{ mobileNumber }</Text>
                        <Text style={styles.t5}>Tap to change phone number</Text>
                    </View>
                    <View style={styles.v10}>
                        <Text style={styles.t4}>{userAccountName}</Text>
                        <Text style={styles.t5}>Username</Text>
                    </View>
                    <View style={styles.v10}>
                        <Text style={styles.t4}>{ bio }</Text>
                        <Text style={styles.t5}>Bio</Text>
                    </View>
                    <View style={styles.v10}>
                        <Text style={styles.t4}>{ email }</Text>
                        <Text style={styles.t5}>Email</Text>
                    </View>
                    <View style={styles.v11}>
                        <View>
                            <Text style={styles.t4}>{ password }</Text>
                            <Text style={styles.t5}>Password</Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text style={styles.t6}>Change</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
            {/* <PtoAnim /> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    v0: {
        flex:1,
        backgroundColor: "white",
        padding:10
    },
    v1: {
    },
    v2: {
        flex: 1,
        flexDirection: "row",
        alignItems:"center"
    },
    v3: {
        marginRight:30
    },
    v4: {
    },
    v5: {
        margin:25
    },
    v6: {
        borderBottomWidth: 1,
        borderColor:"rgb(77, 77, 77)"
    },
    v7: {
        position: "absolute",
        top: -30,
        right: 15,
        backgroundColor: "rgb(51, 153, 255)",
        padding: 10,
        borderRadius: 50,
        borderWidth: 3,
        borderColor:"black"
    },
    v8: {
    },
    v9: {
    },
    v10: {
        margin: 12,
        borderBottomWidth: 1,
        borderColor: "rgba(77, 77, 77,0.3)",
        paddingBottom:10
    },
    v11: {
        flex: 1,
        flexDirection: "row",
        justifyContent:"space-between",
        margin: 12,
        borderBottomWidth: 1,
        borderColor: "rgba(77, 77, 77,0.3)",
        paddingBottom:10
    },
    v12: {
    },
    v13: {
    },
    v14: {
    },
    v15: {
    },
    t1: {
        fontSize: 18,
        fontWeight: 700,
        letterSpacing: 2,
        color:"black"
    },
    t2: {
        fontSize: 12,
        color:"rgb(13, 13, 13)"
    },
    t3: {
        fontSize: 17,
        fontWeight: 700,
        color: "rgb(51, 153, 255)",
    },
    t4: {
        fontSize: 15,
        fontWeight:700
    },
    t5: {
        fontSize: 12,
        color:"rgba(77, 77, 77, 0.8)"
    },
    t6: {
        fontSize: 15,
        backgroundColor: "rgb(51, 153, 255)",
        paddingVertical: 8,
        borderRadius: 10,
        paddingHorizontal: 15,
        color: "white",
        fontWeight:700,
        letterSpacing:1
    },
    t7: {},
    t8: {},
    t9: {},

    profilepic: {
        width:80,
        height: 80,
        borderRadius:80
    }
});

export default Settings;
