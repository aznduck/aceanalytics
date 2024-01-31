import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreen}>
      <View style={styles.splashScreenChild} />
      <View style={styles.aceIcon}>
        <Image
          style={styles.aceOutlineWhit1}
          contentFit="cover"
          source={require("../assets/ace-outline-whit-1.png")}
        />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <Text style={styles.aceAnalytics}>Ace Analytics</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  splashScreenChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorBlack,
    width: 393,
    position: "absolute",
    height: 852,
  },
  aceOutlineWhit1: {
    top: 20,
    left: 31,
    width: 281,
    height: 303,
    position: "absolute",
  },
  vectorIcon: {
    height: "9.91%",
    width: "34.69%",
    top: "50.15%",
    right: "32.65%",
    bottom: "39.94%",
    left: "32.65%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  aceIcon: {
    top: 165,
    left: 25,
    width: 343,
    height: 343,
    position: "absolute",
    overflow: "hidden",
  },
  aceAnalytics: {
    top: 508,
    left: 119,
    fontSize: FontSize.size_11xl,
    lineHeight: 39,
    fontFamily: FontFamily.koulenRegular,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  splashScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 852,
  },
});

export default SplashScreen;
