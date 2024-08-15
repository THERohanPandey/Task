import React from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

const Header = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const handleIconPress = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={(query) => setSearchQuery(query)}
        value={searchQuery}
      />
      <FlatList
        horizontal
        data={
          [
            /* icons data */
          ]
        }
        renderItem={({ item }) => (
          <View>
            <Image source={item.icon} onPress={() => handleIconPress(item)} />
          </View>
        )}
      />
    </View>
  );
};

export default Header;
