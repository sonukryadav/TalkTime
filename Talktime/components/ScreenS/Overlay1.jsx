import React, { useState } from 'react';
import { Button, Overlay, Icon } from '@rneui/themed';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { overlay1Fun } from "../ReduxToolkitS/ProfileSettingSlice";
import { MaterialCommunityIcons, Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const Overlay1 = () => {
    const { overly1 } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const toggleOverlay = () => {
        dispatch(overlay1Fun());
    };

    const camera1 = () => {
        navigation.navigate("camera");
        dispatch(overlay1Fun());
    }

    const gallery1 = () => {
        dispatch(overlay1Fun());
    }

    return (
        <View>
            <Overlay isVisible={overly1} onBackdropPress={toggleOverlay}>
                <View style={ styles.v1}>
                    <Text style={styles.textPrimary}>
                        Choose to upload your profile picture:
                    </Text>
                    <View style={styles.v2}>
                        <View>
                            <View style={styles.v3}>
                            <TouchableOpacity onPress={()=>camera1()}>
                                <MaterialCommunityIcons name="camera-plus" size={70} color={"white"} />
                            </TouchableOpacity>
                            </View>
                            <Text style={styles.t1}>Camera</Text>
                        </View>
                        <View>
                            <View style={styles.v3}>
                            <TouchableOpacity onPress={()=>gallery1()}>
                                <Ionicons name="md-images" size={70} color={"white"} />
                            </TouchableOpacity>
                            </View>
                            <Text style={styles.t1}>Gallery</Text>
                        </View>
                    </View>
                    <Button
                        icon={
                            <Icon
                                name="wrench"
                                type="font-awesome"
                                color="white"
                                size={25}
                                iconStyle={{ marginRight: 10 }}
                            />
                        }
                        title="Start Building"
                        onPress={toggleOverlay}
                    />
                </View>
            </Overlay>
        </View>
    );
};

const styles = StyleSheet.create({
    v1: {
        padding: 20,
        justifyContent: "center",
    },
    v2: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical:40,
    },
    v3: {
        backgroundColor: "rgb(51, 153, 255)",
        padding: 15,
        borderRadius: 70,
        borderWidth: 3,
        // borderColor:"black",
        borderLeftColor: "black",
        borderRightColor: "red",
    },
    t1: {
        textAlign: "center",
        margin: 10,
        fontSize: 14,
        fontWeight: 700,
        color:"grey"
    },
    textPrimary: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 700
    }
});

export default Overlay1;