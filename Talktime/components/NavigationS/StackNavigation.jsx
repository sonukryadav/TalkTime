import React, { useContext } from "react";

import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NewGroup from "../ScreenS/NewGroup";
import Calls from "../ScreenS/Calls";
import PeopleNearby from "../ScreenS/PeopleNearby";
import SavedMessages from "../ScreenS/SavedMessages";
import Settings from "../ScreenS/Settings";
import InviteFriends from "../ScreenS/InviteFriends";
import TalktimeFeatures from "../ScreenS/TalktimeFeatures";
import Contacts from "../ScreenS/Contacts";
import Account from "../ScreenS/Account";
import DrawerNavigation from "./DrawerNavigation";
import Search from "../ScreenS/Search";
import CameraC from "../ScreenS/CameraC";
import AuthContext from "../../contextHelper/authContext";

import { ChatRoom, Login, SelectContact, Signup } from "../../screens";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const { theme } = useSelector((state) => state.theme);
  const { getUser } = useContext(AuthContext);

  const user = getUser();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      {user ? (
        <>
          <Stack.Screen name="stackHome" component={DrawerNavigation} />
          <Stack.Screen name="ChatRoom" component={ChatRoom} />
          <Stack.Screen
            name="SelectContact"
            component={SelectContact}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="newGroup"
            component={NewGroup}
            options={{ title: "New Group" }}
          />
          <Stack.Screen
            name="contacts"
            component={Contacts}
            options={{ title: "Contacts" }}
          />
          <Stack.Screen
            name="calls"
            component={Calls}
            options={{ title: "Calls" }}
          />
          <Stack.Screen
            name="peopleNearby"
            component={PeopleNearby}
            options={{ title: "People Nearby" }}
          />
          <Stack.Screen
            name="savedMessages"
            component={SavedMessages}
            options={{ title: "Saved Messages" }}
          />
          <Stack.Screen
            name="settings"
            component={Settings}
            options={{ title: "Settings" }}
          />
          <Stack.Screen
            name="inviteFriends"
            component={InviteFriends}
            options={{ title: "Invite Friends" }}
          />
          <Stack.Screen
            name="talktimeFeatures"
            component={TalktimeFeatures}
            options={{ title: "Talktime Features" }}
          />
          <Stack.Screen
            name="account"
            component={Account}
            options={{ title: "Profile" }}
          />
          <Stack.Screen
            name="search"
            component={Search}
            options={{ title: "Search" }}
          />
          <Stack.Screen
            name="camera"
            component={CameraC}
            options={{ title: "Camera" }}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
