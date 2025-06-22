import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './HomeScreen';

export default function HomeScreenStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen />
      <Stack.Screen />
      <Stack.Screen />
      <Stack.Screen />
    </Stack.Navigator>
  );
}
