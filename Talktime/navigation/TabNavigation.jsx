import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Home, Status } from "../screens";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#44cefc",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Status" component={Status} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

/*

<View
        style={{
          backgroundColor: "#44cefc",
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

*/
