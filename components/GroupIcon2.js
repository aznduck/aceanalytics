import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const GroupIcon2 = ({ style }) => {
  return (
    <Image
      style={[styles.groupIcon, style]}
      contentFit="cover"
      source={require("../assets/group-1.png")}
    />
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    width: 36,
    height: 36,
  },
});

export default GroupIcon2;
