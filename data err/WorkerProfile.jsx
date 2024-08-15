import React from "react";
import { View, Text, Image } from "react-native";

const WorkerProfile = ({ profile }) => {
  return (
    <View>
      <Image source={profile.profileImage} />
      <Text>{profile.name}</Text>
      <Text>{profile.country}</Text>
    </View>
  );
};

export default WorkerProfile;
