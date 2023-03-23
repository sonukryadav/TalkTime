import { useContext } from "react";
import { Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import AuthContext from "../contextHelper/authContext";
import { Home, Status } from "../screens";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  const { logoutUser } = useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          TalkTime
        </Text>
        <Menu>
          <MenuTrigger
            children={
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color="black"
              />
            }
          />
          <MenuOptions>
            <MenuOption
              onSelect={logoutUser}
              text="Log out"
              style={{ marginVertical: 5 }}
            />
          </MenuOptions>
        </Menu>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Status" component={Status} />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;
