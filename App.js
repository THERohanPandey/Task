// App.js

import "react-native-gesture-handler"; // Import must be at the top
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Head from "./Head.jsx";
// import MyTabs from "./navigation.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  return (
    <View style={styles.container}>
      <Head />
      {/* <MyTabs /> */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
