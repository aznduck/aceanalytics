import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import Property1unselected from "../screens/Property1unselected";
import Property1selected from "../screens/Property1selected";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Menu5 = ({ style }) => {
  return (
    <View style={[styles.menu, style]}>
      <View style={styles.iconFeed}>
        <Image
          style={styles.iconFeed1}
          contentFit="cover"
          source={require("../assets/iconfeed4.png")}
        />
        <Text style={[styles.feed, styles.feedTypo]}>FEED</Text>
      </View>
      <View style={[styles.iconFeed2, styles.iconSpaceBlock]}>
        <Image
          style={styles.iconFeed1}
          contentFit="cover"
          source={require("../assets/iconfeed3.png")}
        />
        <Text style={[styles.feed1, styles.feedTypo]}>Feed</Text>
      </View>
      <Property1unselected
        imageDimensions={require("../assets/iconstatistics11.png")}
        statisticsText="Statistics"
        property1unselectedPosition="unset"
        property1unselectedMarginLeft={50}
        property1unselectedWidth={82}
        iconStatisticsOverflow="hidden"
        statisticsFontWeight="500"
        statisticsFontFamily="Inter-Medium"
        statisticsPosition="relative"
        statisticsFontSize={14}
        statisticsColor="#fff"
        statisticsTextAlign="center"
        statisticsMarginTop={2}
        statisticsWidth="unset"
        statisticsHeight="unset"
        statisticsOverflow="unset"
      />
      <View style={styles.iconSpaceBlock}>
        <Image
          style={styles.iconFeed1}
          contentFit="cover"
          source={require("../assets/iconstatistics4.png")}
        />
        <Text style={[styles.feed, styles.feedTypo]}>STATISTICS</Text>
      </View>
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
  feedTypo: {
    marginTop: 2,
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
  },
  iconSpaceBlock: {
    marginLeft: 50,
    display: "none",
    alignItems: "center",
  },
  iconFeed1: {
    width: 60,
    height: 60,
    overflow: "hidden",
  },
  feed: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  iconFeed: {
    alignItems: "center",
    width: 82,
  },
  feed1: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  iconFeed2: {
    width: 82,
    marginLeft: 50,
    display: "none",
  },
  menu: {
    flexDirection: "row",
  },
});

export default Menu5;
