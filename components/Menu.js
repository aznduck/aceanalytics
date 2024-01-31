import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Menu = () => {
  return (
    <View style={styles.menu}>
      <View style={[styles.feedSelected, styles.selectedPosition]}>
        <View style={styles.iconFlexBox}>
          <Image
            style={styles.iconFeed1}
            contentFit="cover"
            source={require("../assets/iconfeed2.png")}
          />
          <Text style={[styles.feed, styles.feedTypo]}>FEED</Text>
        </View>
        <View style={[styles.iconStats, styles.iconFlexBox]}>
          <Image
            style={styles.iconFeed1}
            contentFit="cover"
            source={require("../assets/iconstatistics1.png")}
          />
          <Text style={[styles.statistics, styles.feedTypo]}>Statistics</Text>
        </View>
        <View style={[styles.iconStats, styles.iconFlexBox]}>
          <Image
            style={styles.iconFeed1}
            contentFit="cover"
            source={require("../assets/iconprofile2.png")}
          />
          <Text style={[styles.statistics, styles.feedTypo]}>Profile</Text>
        </View>
      </View>
      <View style={[styles.statsSelected, styles.selectedPosition]}>
        <View style={styles.iconLayout} />
        <View style={[styles.iconStats1, styles.iconLayout]} />
        <View style={[styles.iconStats1, styles.iconLayout]} />
      </View>
      <View style={[styles.profileSelected, styles.selectedPosition]}>
        <View style={styles.iconLayout} />
        <View style={[styles.iconStats1, styles.iconLayout]} />
        <View style={[styles.iconStats1, styles.iconLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selectedPosition: {
    flexDirection: "row",
    left: "50%",
    marginLeft: -173,
    position: "absolute",
  },
  feedTypo: {
    marginTop: 2,
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
  },
  iconFlexBox: {
    alignItems: "center",
    width: 82,
  },
  iconLayout: {
    display: "none",
    width: 82,
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
  statistics: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  iconStats: {
    marginLeft: 50,
  },
  feedSelected: {
    bottom: 218,
  },
  iconStats1: {
    marginLeft: 50,
  },
  statsSelected: {
    bottom: 119,
  },
  profileSelected: {
    bottom: 20,
  },
  menu: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 386,
    height: 317,
    overflow: "hidden",
  },
});

export default Menu;
