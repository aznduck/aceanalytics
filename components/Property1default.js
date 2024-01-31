import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1default = ({
  dimensionLabel,
  property1defaultPosition,
  property1defaultTop,
  property1defaultLeft,
  dONEColor,
  onDonePress,
}) => {
  const property1defaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1defaultPosition),
      ...getStyleValue("top", property1defaultTop),
      ...getStyleValue("left", property1defaultLeft),
    };
  }, [property1defaultPosition, property1defaultTop, property1defaultLeft]);

  const dONEStyle = useMemo(() => {
    return {
      ...getStyleValue("color", dONEColor),
    };
  }, [dONEColor]);

  return (
    <View
      style={[styles.property1default, property1defaultStyle]}
      onPress={onDonePress}
    >
      <Image
        style={styles.checkCircleIcon}
        contentFit="cover"
        source={dimensionLabel}
      />
      <Text style={[styles.done, dONEStyle]}>DONE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkCircleIcon: {
    width: 27,
    height: 27,
    overflow: "hidden",
  },
  done: {
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    textAlign: "left",
    marginTop: 3,
  },
  property1default: {
    alignItems: "center",
  },
});

export default Property1default;
