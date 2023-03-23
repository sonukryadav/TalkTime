import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image} from "react-native";
import { useSelector } from "react-redux";
import UserAvatar from "react-native-avatar-generator";


let On;

const SingleContact = ({ item }) => {
    const { theme } = useSelector((state) => state.theme);
    On = theme;
    const styles = On ? lightTheme : darkTheme;

    const { firstName, lastName, name, phoneNumbers, image} = item;
    const number = phoneNumbers[0].number;
    const imageUri = image?.uri;


    return (
        <TouchableOpacity>
            <View style={styles.v1}>
                <View style={styles.v2}>
                    {imageUri ?
                        <Image source={{ uri: imageUri }} style={styles.profilepic} />
                        : <UserAvatar
                        size={50}
                        fontWeight="bold"
                        color="black"
                        backgroundColor="lightblue"
                        firstName={firstName}
                        lastName={lastName}
                        />
                    }
                </View>
            <View style={styles.v3}>
                <Text style={styles.t1}>{name}</Text>
                <Text style={styles.t2}>{number}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
}

const Contacts = () => {
    const { theme } = useSelector((state) => state.theme);
    On = theme;
    const styles = On ? lightTheme : darkTheme;

    let { contacts } = useSelector((state) => state.contact);
    return (
        <View style={styles.v0}>
            <FlatList
                data={contacts}
                renderItem={(obj) => (<SingleContact {...obj} />)}
                keyExtractor={item=>item.lookupKey}
            />
        </View>
    )
}

export default Contacts;


const lightTheme = StyleSheet.create({
    v0: {
        flex: 1,
        backgroundColor: "white"
    },
    v1: {
        flex: 1,
        flexDirection: "row",
        margin: 8,
        alignItems: "center",
    },
    v2: {
        marginRight:20
    },
    v3: {
    },
    t1: {
        fontWeight: 800,
        fontSize: 16,
        color:"black",
    },
    t2: {
        fontSize: 12,
        color:"rgb(26, 26, 26)"
    },
    profilepic: {
        width: 50,
        height: 50,
        borderRadius:50
    }

});

const darkTheme = StyleSheet.create({
    v0: {
        flex: 1,
        backgroundColor: "rgb(38, 38, 38)"
    },
    v1: {
        flex: 1,
        flexDirection: "row",
        margin: 8,
        alignItems: "center",
    },
    v2: {
        marginRight:20
    },
    v3: {
    },
    t1: {
        fontWeight: 800,
        fontSize: 16,
        color:"white",
    },
    t2: {
        fontSize: 12,
        color:"rgb(153, 153, 153)"
    },
    profilepic: {
        width: 50,
        height: 50,
        borderRadius:50
    }

});
