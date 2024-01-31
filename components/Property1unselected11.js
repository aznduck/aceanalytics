import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1unselected1 = ({
  propPosition,
  propTop,
  propLeft,
  propBorderStyle,
  propBorderColor,
  propBorderWidth,
  propBackgroundColor,
  propMarginLeft,
  propColor,
}) => {
  const property1unselected2Style = useMemo(() => {
    return {
      ...getStyleValue("position", propPosition),
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("borderStyle", propBorderStyle),
      ...getStyleValue("borderColor", propBorderColor),
      ...getStyleValue("borderWidth", propBorderWidth),
      ...getStyleValue("backgroundColor", propBackgroundColor),
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [
    propPosition,
    propTop,
    propLeft,
    propBorderStyle,
    propBorderColor,
    propBorderWidth,
    propBackgroundColor,
    propMarginLeft,
  ]);

  const yEARStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View style={[styles.property1unselected, property1unselected2Style]}>
      <Text style={[styles.year, yEARStyle]}>YEAR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  year: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  property1unselected: {
    position: "absolute",
    top: 111,
    left: 20,
    borderRadius: Border.br_11xl,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_3xs,
  },
});

export default Property1unselected1;
