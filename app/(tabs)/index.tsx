import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../../src/screens/SearchScreen";
import RestaurantDetailScreen from "../../src/screens/RestaurantDetailScreen";

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerTitle: "Restoran Seç" }}>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen
          name="RestaurantDetail"
          component={RestaurantDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
