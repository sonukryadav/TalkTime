import React, { useEffect } from 'react';
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from './components/NavigationS/StackNavigation';

const AppS = () => {
    return (
        <>
            <NavigationContainer>
                    <StackNavigation />
            </NavigationContainer>
        </>
    )
}

export default AppS;
