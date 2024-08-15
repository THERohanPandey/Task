// navigation.jsx

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./WelcomeScreen.jsx";
import CategoriesScreen from "./CategoriesScreen.jsx";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Calls" component={CategoriesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
