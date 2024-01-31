import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FeedSelected = ({
  iconFeed,
  iconStatistics,
  iconProfile,
  feedSelectedPosition,
  feedSelectedMarginLeft,
  feedSelectedBottom,
  feedSelectedLeft,
  onIconStatsPress,
  onIconProfilePress,
}) => {
  const feedSelectedStyle = useMemo(() => {
    return {
      ...getStyleValue("position", feedSelectedPosition),
      ...getStyleValue("marginLeft", feedSelectedMarginLeft),
      ...getStyleValue("bottom", feedSelectedBottom),
      ...getStyleValue("left", feedSelectedLeft),
    };
  }, [
    feedSelectedPosition,
    feedSelectedMarginLeft,
    feedSelectedBottom,
    feedSelectedLeft,
  ]);

  return (
    <View style={[styles.feedSelected, feedSelectedStyle]}>
      <View style={styles.iconFlexBox}>
        <Image style={styles.iconFeed1} contentFit="cover" source={iconFeed} />
        <Text style={[styles.feed, styles.feedTypo]}>FEED</Text>
      </View>
      <View style={[styles.iconStats, styles.iconFlexBox]}>
        <Image
          style={styles.iconFeed1}
          contentFit="cover"
          source={iconStatistics}
        />
        <Text style={[styles.statistics, styles.feedTypo]}>Statistics</Text>
      </View>
      <View style={[styles.iconStats, styles.iconFlexBox]}>
        <Image
          style={styles.iconFeed1}
          contentFit="cover"
          source={require("../assets/iconprofile21.png")}
        />
        <Text style={[styles.statistics, styles.feedTypo]}>Profile</Text>
      </View>
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
  iconFlexBox: {
    alignItems: "center",
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
    flexDirection: "row",
  },
});

export default FeedSelected;
