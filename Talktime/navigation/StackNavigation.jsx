import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contextHelper/authContext";

import { Home, Login, ChatRoom } from "../screens";
import Signup from "../screens/Signup/Signup";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const { getUser } = useContext(AuthContext);
  const user = getUser();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ChatRoom" component={ChatRoom} />
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
