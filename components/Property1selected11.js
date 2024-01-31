import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1selected1 = ({
  mONTHPosition,
  mONTHTop,
  mONTHLeft,
  mONTHBackgroundColor,
  mONTHMarginLeft,
  propColor,
}) => {
  const property1selected1Style = useMemo(() => {
    return {
      ...getStyleValue("position", mONTHPosition),
      ...getStyleValue("top", mONTHTop),
      ...getStyleValue("left", mONTHLeft),
      ...getStyleValue("backgroundColor", mONTHBackgroundColor),
      ...getStyleValue("marginLeft", mONTHMarginLeft),
    };
  }, [
    mONTHPosition,
    mONTHTop,
    mONTHLeft,
    mONTHBackgroundColor,
    mONTHMarginLeft,
  ]);

  const mONTHStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View style={[styles.property1selected, property1selected1Style]}>
      <Text style={[styles.month, mONTHStyle]}>MONTH</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  month: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  property1selected: {
    position: "absolute",
    top: 20,
    left: 20,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_3xs,
  },
});

export default Property1selected1;
