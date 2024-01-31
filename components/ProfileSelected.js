import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ProfileSelected = ({
  iconFeed,
  showIconStats,
  showIconProfile,
  profileSelectedPosition,
  profileSelectedMarginLeft,
  profileSelectedBottom,
  profileSelectedLeft,
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
  onIconFeedPress,
}) => {
  const profileSelectedStyle = useMemo(() => {
    return {
      ...getStyleValue("position", profileSelectedPosition),
      ...getStyleValue("marginLeft", profileSelectedMarginLeft),
      ...getStyleValue("bottom", profileSelectedBottom),
      ...getStyleValue("left", profileSelectedLeft),
    };
  }, [
    profileSelectedPosition,
    profileSelectedMarginLeft,
    profileSelectedBottom,
    profileSelectedLeft,
  ]);

  const iconFeedStyle = useMemo(() => {
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

  const iconStatsStyle = useMemo(() => {
    return {
      ...getStyleValue("width", iconStatsWidth),
      ...getStyleValue("marginLeft", iconStatsMarginLeft),
      ...getStyleValue("height", iconStatsHeight),
      ...getStyleValue("overflow", iconStatsOverflow),
    };
  }, [iconStatsWidth, iconStatsMarginLeft, iconStatsHeight, iconStatsOverflow]);

  const iconProfileStyle = useMemo(() => {
    return {
      ...getStyleValue("width", iconProfileWidth),
      ...getStyleValue("marginLeft", iconProfileMarginLeft),
      ...getStyleValue("marginTop", iconProfileMarginTop),
    };
  }, [iconProfileWidth, iconProfileMarginLeft, iconProfileMarginTop]);

  return (
    <View style={[styles.profileSelected, profileSelectedStyle]}>
      {!iconFeed && (
        <View
          style={[styles.iconLayout, iconFeedStyle]}
          onPress={onIconFeedPress}
        />
      )}
      {showIconStats && (
        <View style={[styles.iconStats, styles.iconLayout, iconStatsStyle]} />
      )}
      {showIconProfile && (
        <View style={[styles.iconStats, styles.iconLayout, iconProfileStyle]} />
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
  profileSelected: {
    flexDirection: "row",
  },
});

export default ProfileSelected;
