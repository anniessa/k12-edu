import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreenStack from "../components/HomeScreenStack";

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" children={() => <HomeScreenStack />} />
        <Tab.Screen />
        <Tab.Screen />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
