import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatsSelected = ({
  iconFeed,
  showIconStats,
  showIconProfile,
  statsSelectedPosition,
  statsSelectedTop,
  statsSelectedLeft,
  statsSelectedMarginLeft,
  statsSelectedBottom,
  iconFeedPosition,
  iconFeedFlexDirection,
  iconFeedAlignItems,
  iconFeedJustifyContent,
  iconStatsWidth,
  iconStatsMarginLeft,
  iconStatsHeight,
  iconStatsOverflow,
  iconProfileWidth,
  iconProfileMarginLeft,
  iconProfileMarginTop,
  onMenuPress,
  onIconFeedPress,
}) => {
  const statsSelectedStyle = useMemo(() => {
    return {
      ...getStyleValue("position", statsSelectedPosition),
      ...getStyleValue("top", statsSelectedTop),
      ...getStyleValue("left", statsSelectedLeft),
      ...getStyleValue("marginLeft", statsSelectedMarginLeft),
      ...getStyleValue("bottom", statsSelectedBottom),
    };
  }, [
    statsSelectedPosition,
    statsSelectedTop,
    statsSelectedLeft,
    statsSelectedMarginLeft,
    statsSelectedBottom,
  ]);

  const iconFeed1Style = useMemo(() => {
    return {
      ...getStyleValue("position", iconFeedPosition),
      ...getStyleValue("flexDirection", iconFeedFlexDirection),
      ...getStyleValue("alignItems", iconFeedAlignItems),
      ...getStyleValue("justifyContent", iconFeedJustifyContent),
    };
  }, [
    iconFeedPosition,
    iconFeedFlexDirection,
    iconFeedAlignItems,
    iconFeedJustifyContent,
  ]);

  const iconStats1Style = useMemo(() => {
    return {
      ...getStyleValue("width", iconStatsWidth),
      ...getStyleValue("marginLeft", iconStatsMarginLeft),
      ...getStyleValue("height", iconStatsHeight),
      ...getStyleValue("overflow", iconStatsOverflow),
    };
  }, [iconStatsWidth, iconStatsMarginLeft, iconStatsHeight, iconStatsOverflow]);

  const iconProfile1Style = useMemo(() => {
    return {
      ...getStyleValue("width", iconProfileWidth),
      ...getStyleValue("marginLeft", iconProfileMarginLeft),
      ...getStyleValue("marginTop", iconProfileMarginTop),
    };
  }, [iconProfileWidth, iconProfileMarginLeft, iconProfileMarginTop]);

  return (
    <View
      style={[styles.statsSelected, statsSelectedStyle]}
      onPress={onMenuPress}
    >
      {!iconFeed && (
        <View
          style={[styles.iconLayout, iconFeed1Style]}
          onPress={onIconFeedPress}
        />
      )}
      {showIconStats && (
        <View style={[styles.iconStats, styles.iconLayout, iconStats1Style]} />
      )}
      {showIconProfile && (
        <View
          style={[styles.iconStats, styles.iconLayout, iconProfile1Style]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    display: "none",
    width: 82,
  },
  iconStats: {
    marginLeft: 50,
  },
  statsSelected: {
    flexDirection: "row",
  },
});

export default StatsSelected;
