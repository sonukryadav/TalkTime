import React, { useEffect } from 'react';
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from './components/NavigationS/StackNavigation';
import { useSelector, useDispatch } from "react-redux";
import { toggle1, toggle2} from "./components/ReduxToolkitS/ThemeSlice";
import { AsyncSet, AsyncGet, AsyncDelete } from "./components/AsyncStorageS/AsyncStorage";
import * as Contacts from "expo-contacts";
import { getContacts } from "./components/ReduxToolkitS/ContactSlice"


const AppS = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        (async() => {
            let val = await AsyncGet("theme");
            dispatch(toggle2(val));
        })();
    }, []);


    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === "granted") {
                const { data } = await Contacts.getContactsAsync();
                if (data.length > 0) {
                    dispatch(getContacts(data));
                }
            }
        })();
    }, []);

    return (
        <>
            <NavigationContainer>
                    <StackNavigation />
            </NavigationContainer>
        </>
    )
}

export default AppS;
