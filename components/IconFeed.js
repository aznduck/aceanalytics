import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const IconFeed1 = ({ style }) => {
  return (
    <View style={[styles.iconFeed, style]}>
      <Image
        style={styles.iconFeed1}
        contentFit="cover"
        source={require("../assets/iconfeed3.png")}
      />
      <Text style={styles.feed}>Feed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconFeed1: {
    width: 60,
    height: 60,
    overflow: "hidden",
  },
  feed: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    textAlign: "center",
    marginTop: 2,
  },
  iconFeed: {
    width: 82,
    alignItems: "center",
  },
});

export default IconFeed1;
