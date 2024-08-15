import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons
import WelcomeScreen from "./WelcomeScreen";
import CategoriesScreen from "./CategoriesScreen";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

function CustomHeaderTitle() {
  return <Text style={styles.headerTitle}>Welcome</Text>;
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: "#333" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitle: () => <CustomHeaderTitle />, // Custom header title
          headerLeft: () => (
            <TouchableOpacity onPress={() => console.log("Menu pressed")}>
              <Icon
                name="bars"
                size={25}
                color="#fff"
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => console.log("Notifications pressed")}
            >
              <Icon
                name="bell"
                size={25}
                color="#fff"
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
        })}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontFamily: "Itallic", // Use the custom font
    color: "#fff",
  },
});

export default AppNavigator;
