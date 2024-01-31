import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import Property1unselected from "../screens/Property1unselected";
import Property1selected from "../screens/Property1selected";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Menu4 = ({ style }) => {
  return (
    <View style={[styles.menu, style]}>
      <View style={styles.iconFeed}>
        <Image
          style={styles.iconFeed1}
          contentFit="cover"
          source={require("../assets/iconfeed3.png")}
        />
        <Text style={styles.feed}>Feed</Text>
      </View>
      <Property1unselected
        imageDimensions={require("../assets/iconstatistics4.png")}
        statisticsText="STATISTICS"
        property1unselectedPosition="unset"
        property1unselectedMarginLeft={50}
        property1unselectedWidth="unset"
        iconStatisticsOverflow="hidden"
        statisticsFontWeight="700"
        statisticsFontFamily="Inter-Bold"
        statisticsPosition="relative"
        statisticsFontSize={14}
        statisticsColor="#fff"
        statisticsTextAlign="center"
        statisticsMarginTop={2}
        statisticsWidth="unset"
        statisticsHeight="unset"
        statisticsOverflow="unset"
      />
      <Property1selected
        profileImageId={require("../assets/iconprofile21.png")}
        profileImageUrl="Profile"
        property1selectedPosition="unset"
        property1selectedMarginLeft={50}
        pROFILEFontWeight="500"
        pROFILEFontFamily="Inter-Medium"
      />
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
  menu: {
    flexDirection: "row",
  },
});

export default Menu4;
