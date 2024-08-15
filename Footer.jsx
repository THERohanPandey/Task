import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="comments" size={30} color="#fff" />
        <Text style={styles.iconText}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="phone" size={30} color="#fff" />
        <Text style={styles.iconText}>Calls</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="qrcode" size={30} color="#fff" />
        <Text style={styles.iconText}>Scan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="star" size={30} color="#fff" />
        <Text style={styles.iconText}>Wishlist</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="trophy" size={30} color="#fff" />
        <Text style={styles.iconText}>VIP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#333",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default Footer;
