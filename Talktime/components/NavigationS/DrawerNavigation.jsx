import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Switch } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { MaterialIcons, AntDesign, Ionicons, FontAwesome, Entypo, FontAwesome5, MaterialCommunityIcons} from "react-native-vector-icons";
import Calls from "../ScreenS/Calls";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import { toggle1 } from "../ReduxToolkitS/ThemeSlice";
import { AsyncSet, AsyncGet, AsyncDelete } from "../AsyncStorageS/AsyncStorage";


//  group, contacts, (3- call, location), bookmark, (3- settings), add-user, progress-question


const Drawer = createDrawerNavigator();

var On;

const DItem = ({ IconG, IconN, labelT, navigateTo }) => {
    const navigation = useNavigation();

    On = useSelector((state) => state.theme.theme);
    const styles = On ? lightTheme : darkTheme;

    return (
        <DrawerItem
            icon={({ focused, color, size }) => (
                <IconG color={"grey"} size={size} name={ IconN } />
            )}
            label={() => <Text style={styles.drawerText}>{ labelT }</Text>}
            onPress={() => navigation.navigate(`${navigateTo}`)}
        />
    );
}



function CustomDrawerContent(props) {
    const { navigation } = props;
    const { theme } = useSelector((state) => state.theme);
    const { profilePicture, firstName, lastName, mobileNumber} = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    On = theme;
    const styles = On ? lightTheme : darkTheme;

    const onToggle = async() => {
        dispatch(toggle1());
        await AsyncSet("theme", !theme);
    };

    return (
        <DrawerContentScrollView {...props} style={ styles.drawerContScroll}>

            <View style={styles.view1}>
                <View>
                    {profilePicture ?
                        <TouchableOpacity onPress={()=>navigation.navigate("settings")}>
                        <Image
                            source={{ uri: profilePicture }}
                            style={ styles.profileImage }
                        /></TouchableOpacity>:
                        <View style={styles.v7}>
                            <TouchableOpacity onPress={()=>navigation.navigate("settings")}>
                                <MaterialCommunityIcons name="camera-plus" size={55} color={"white"} />
                            </TouchableOpacity>
                        </View>
                        }
                    <Text style={styles.userName}> { firstName}</Text>
                    <Text style={styles.userNumber}> { mobileNumber}</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.toggle1}>
                        {/* <Text style={styles.toggle2}>Change Theme</Text> */}
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => onToggle()}
                            value={theme}
                            disabled={false}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {/* <DrawerItemList {...props} /> */}
            <DItem IconG={MaterialIcons} IconN={"group"} labelT={"New Group"} navigateTo={"newGroup"} />
            <DItem IconG={ FontAwesome} IconN={"address-book"} labelT={"Contacts"} navigateTo={"contacts"} />
            <DItem IconG={ Ionicons} IconN={"call"} labelT={"Calls"} navigateTo={"calls"} />
            <DItem IconG={ Ionicons} IconN={"location"} labelT={"People Nearby"} navigateTo={"peopleNearby"} />
            <DItem IconG={ FontAwesome} IconN={"bookmark"} labelT={"Saved Messages"} navigateTo={"savedMessages"} />
            <DItem IconG={Ionicons} IconN={"settings"} labelT={"Settings"} navigateTo={"settings"} />
            <View style={{borderBottomWidth:1, borderColor:"grey", opacity:0.5, marginVertical:10}}></View>
            <DItem IconG={ Entypo} IconN={"add-user"} labelT={"Invite Friends"} navigateTo={"inviteFriends"} />
            <DItem IconG={ AntDesign} IconN={"questioncircle"} labelT={"TalkTime Features"} navigateTo={"talktimeFeatures"} />
        </DrawerContentScrollView>
    );
}



const DrawerNavigation = ({ navigation }) => {

    const { theme } = useSelector((state) => state.theme);
    On = theme;
    const styles = On ? lightTheme : darkTheme;

    return (
        <>
            <Drawer.Navigator
                screenOptions={{
                drawerPosition: "left",
                drawerType: "front",
                headerStyle: {
                    backgroundColor: theme ? 'white' : 'black'
                },
                    headerTintColor: theme ? "black" : "white",
                }}
                defaultStatus={"closed"}
                drawerContent={(props) => (<CustomDrawerContent {...props} />)}
            >
                <Drawer.Screen name="home" component={Calls} options={{
                    headerTitle: "Talktime",
                    headerRight: () => (
                        <TouchableOpacity onPress={()=>navigation.navigate("search")}>
                            <FontAwesome5 name="search" size={25} color={On ? "black" : "white"} marginRight={10} />
                        </TouchableOpacity>
                    )
                }} />
            </Drawer.Navigator>
        </>
    );
}

export default DrawerNavigation;


const lightTheme = StyleSheet.create({
    drawerContScroll: {
        backgroundColor:"white"
    },
    view1: {
        flex: 1,
        borderWidth: 2,
        flexDirection: "row",
        justifyContent:"space-between",
        padding: 15,
        backgroundColor:"rgb(0, 153, 255)"
    },
    toggle1: {
    },
    toggle2: {
        color:"white"
    },
    profileImage:{
        width: 80,
        height:80,
        borderRadius: 100,
        borderWidth: 2,
        borderColor:"white"
    },
    userName: {
        fontWeight: 700,
        margin: 5,
        color:"white"
    },
    userNumber: {
        color: "white",
        fontSize:11
    },
    drawerText: {
        fontWeight: 600,
        fontSize: 14,
        color:"black"
    },
    v7: {
        backgroundColor: "rgb(51, 153, 255)",
        padding: 10,
        borderRadius: 50,
        borderWidth: 3,
        borderColor:"black"
    }
});


const darkTheme = StyleSheet.create({
    drawerContScroll: {
        backgroundColor:"rgb(51, 51, 51)"
    },
    view1: {
        flex: 1,
        borderWidth: 2,
        flexDirection: "row",
        justifyContent:"space-between",
        padding: 15,
        backgroundColor:"black"
    },
    toggle1: {
    },
    toggle2: {
        color:"white"
    },
    profileImage:{
        width: 80,
        height:80,
        borderRadius: 100,
        borderWidth: 2,
        borderColor:"white"
    },
    userName: {
        fontWeight: 700,
        margin: 5,
        color:"white"
    },
    userNumber: {
        color: "white",
        fontSize:11
    },
    drawerText: {
        fontWeight: 600,
        fontSize: 14,
        color:"white"
    },
    v7: {
        backgroundColor: "rgb(51, 153, 255)",
        padding: 10,
        borderRadius: 50,
        borderWidth: 3,
        borderColor:"white"
    }
});
