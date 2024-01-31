import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1unselected2 = ({
  property1unselectedPosition,
  property1unselectedTop,
  property1unselectedLeft,
  property1unselectedBackgroundColor,
  dAYColor,
}) => {
  const property1unselectedStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1unselectedPosition),
      ...getStyleValue("top", property1unselectedTop),
      ...getStyleValue("left", property1unselectedLeft),
      ...getStyleValue("backgroundColor", property1unselectedBackgroundColor),
    };
  }, [
    property1unselectedPosition,
    property1unselectedTop,
    property1unselectedLeft,
    property1unselectedBackgroundColor,
  ]);

  const dAYStyle = useMemo(() => {
    return {
      ...getStyleValue("color", dAYColor),
    };
  }, [dAYColor]);

  return (
    <View style={[styles.property1unselected, property1unselectedStyle]}>
      <Text style={[styles.day, dAYStyle]}>DAY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  day: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  property1unselected: {
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

export default Property1unselected2;
