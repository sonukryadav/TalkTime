import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contextHelper/authContext";

import { Login, ChatRoom, SelectContact } from "../screens";
import Signup from "../screens/Signup/Signup";
import TabNavigator from "./TabNavigation";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
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
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="ChatRoom" component={ChatRoom} />
          <Stack.Screen
            name="SelectContact"
            component={SelectContact}
            options={{ headerShown: true }}
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
}
