import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize } from "../GlobalStyles";

const Menu8 = ({ style }) => {
  return <View style={[styles.menu, style]} />;
};

const styles = StyleSheet.create({
  feedTypo: {
    marginTop: 2,
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
  },
  iconSpaceBlock: {
    marginLeft: 50,
    alignItems: "center",
  },
  menu: {
    flexDirection: "row",
  },
});

export default Menu8;
