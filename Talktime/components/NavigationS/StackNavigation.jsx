import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewGroup from "../ScreenS/NewGroup";
import Calls from "../ScreenS/Calls";
import PeopleNearby from "../ScreenS/PeopleNearby";
import SavedMessages from "../ScreenS/SavedMessages";
import Settings from '../ScreenS/Settings';
import InviteFriends from "../ScreenS/InviteFriends";
import TalktimeFeatures from "../ScreenS/TalktimeFeatures";
import Contacts from "../ScreenS/Contacts";
import Account from "../ScreenS/Account";
import DrawerNavigation from './DrawerNavigation';
import Search from "../ScreenS/Search";
import { useSelector } from "react-redux";
import CameraC from '../ScreenS/CameraC';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    const { theme } = useSelector((state)=>state.theme);
    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: theme ? 'white' : 'black'
                    },
                    headerTintColor: theme ? "black" : "white",
                }}
            >
                <Stack.Screen name="stackHome" component={DrawerNavigation} options={{ headerShown: false, }} />
                <Stack.Screen name="newGroup" component={ NewGroup} options={{ title:"New Group" }} />
                <Stack.Screen name="contacts" component={Contacts} options={{ title: 'Contacts' }} />
                <Stack.Screen name="calls" component={ Calls} options={{ title: 'Calls' }} />
                <Stack.Screen name="peopleNearby" component={ PeopleNearby} options={{ title: 'People Nearby' }} />
                <Stack.Screen name="savedMessages" component={ SavedMessages} options={{ title: 'Saved Messages' }} />
                <Stack.Screen name="settings" component={ Settings} options={{ title: 'Settings' }} />
                <Stack.Screen name="inviteFriends" component={ InviteFriends} options={{ title: 'Invite Friends' }} />
                <Stack.Screen name="talktimeFeatures" component={TalktimeFeatures} options={{ title: 'Talktime Features' }} />
                <Stack.Screen name="account" component={Account} options={{ title: 'Profile' }} />
                <Stack.Screen name="search" component={Search} options={{ title: 'Search' }} />
                <Stack.Screen name="camera" component={CameraC} options={{title : "Camera"}}/>
            </Stack.Navigator>
        </>
    )
}

export default StackNavigation;
