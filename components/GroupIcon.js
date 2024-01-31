import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const GroupIcon = ({ style }) => {
  return (
    <Image
      style={[styles.groupIcon, style]}
      contentFit="cover"
      source={require("../assets/group-4.png")}
    />
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    width: 32,
    height: 38,
  },
});

export default GroupIcon;
