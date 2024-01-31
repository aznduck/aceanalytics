import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const GroupIcon1 = ({ style }) => {
  return (
    <Image
      style={[styles.groupIcon, style]}
      contentFit="cover"
      source={require("../assets/group-2.png")}
    />
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    width: 36,
    height: 31,
  },
});

export default GroupIcon1;
