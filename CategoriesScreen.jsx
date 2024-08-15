import React from "react";
import { View, Text } from "react-native";
import Header from "./Header.jsx";
import WorkerProfile from "./WorkerProfile.jsx";
// import GridLayout from "react-native-grid-layout";

const CategoriesScreen = () => {
  const categories = [
    /* categories data */
  ];
  const profiles = [
    /* worker profiles data */
  ];

  return (
    <View>
      <Header />
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Worker_Role}</Text>
            <Image source={item.icon} />
          </View>
        )}
      />
      <GridLayout
        items={profiles}
        renderItem={({ item }) => <WorkerProfile profile={item} />}
      />
    </View>
  );
};

export default CategoriesScreen;
