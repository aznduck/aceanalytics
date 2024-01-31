import React, { useMemo } from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IconStats1 = ({
  style,
  imageDimensions,
  statisticsText,
  property1unselectedPosition,
  property1unselectedMarginLeft,
  property1unselectedWidth,
  iconStatisticsOverflow,
  statisticsFontWeight,
  statisticsFontFamily,
  statisticsPosition,
  statisticsFontSize,
  statisticsColor,
  statisticsTextAlign,
  statisticsMarginTop,
  statisticsWidth,
  statisticsHeight,
  statisticsOverflow,
  onIconStatsPress,
  onIconStatisticsPress,
}) => {
  const property1unselected1Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1unselectedPosition),
      ...getStyleValue("marginLeft", property1unselectedMarginLeft),
      ...getStyleValue("width", property1unselectedWidth),
    };
  }, [
    property1unselectedPosition,
    property1unselectedMarginLeft,
    property1unselectedWidth,
  ]);

  const iconStatisticsStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", iconStatisticsOverflow),
    };
  }, [iconStatisticsOverflow]);

  const statisticsStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", statisticsFontWeight),
      ...getStyleValue("fontFamily", statisticsFontFamily),
      ...getStyleValue("position", statisticsPosition),
      ...getStyleValue("fontSize", statisticsFontSize),
      ...getStyleValue("color", statisticsColor),
      ...getStyleValue("textAlign", statisticsTextAlign),
      ...getStyleValue("marginTop", statisticsMarginTop),
      ...getStyleValue("width", statisticsWidth),
      ...getStyleValue("height", statisticsHeight),
      ...getStyleValue("overflow", statisticsOverflow),
    };
  }, [
    statisticsFontWeight,
    statisticsFontFamily,
    statisticsPosition,
    statisticsFontSize,
    statisticsColor,
    statisticsTextAlign,
    statisticsMarginTop,
    statisticsWidth,
    statisticsHeight,
    statisticsOverflow,
  ]);

  return (
    <View
      style={[styles.iconStats, style, iconStatsStyle]}
      onPress={onIconStatsPress}
    >
      <Image
        style={[styles.iconStatistics, iconStatisticsStyle]}
        contentFit="cover"
        source={imageDimensions}
        onPress={onIconStatisticsPress}
      />
      <Text style={[styles.statistics, sTATISTICSStyle]}>{statisticsText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStatistics: {
    width: 60,
    height: 60,
    overflow: "hidden",
  },
  statistics: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "center",
    marginTop: 2,
  },
  iconStats: {
    alignItems: "center",
  },
});

export default IconStats1;
