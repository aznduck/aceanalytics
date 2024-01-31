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
const IconProfile1 = ({
  style,
  profileImageId,
  profileImageUrl,
  property1selectedPosition,
  property1selectedMarginLeft,
  pROFILEFontWeight,
  pROFILEFontFamily,
  onIconProfilePress,
}) => {
  const property1selectedStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1selectedPosition),
      ...getStyleValue("marginLeft", property1selectedMarginLeft),
    };
  }, [property1selectedPosition, property1selectedMarginLeft]);

  const pROFILEStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", pROFILEFontWeight),
      ...getStyleValue("fontFamily", pROFILEFontFamily),
    };
  }, [pROFILEFontWeight, pROFILEFontFamily]);

  return (
    <View
      style={[styles.iconProfile, style, iconProfileStyle]}
      onPress={onIconProfilePress}
    >
      <Image
        style={styles.iconProfile1}
        contentFit="cover"
        source={profileImageId}
      />
      <Text style={[styles.profile, profileStyle]}>{profileImageUrl}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconProfile1: {
    width: 60,
    height: 60,
    overflow: "hidden",
  },
  profile: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    textAlign: "center",
    marginTop: 2,
  },
  iconProfile: {
    width: 82,
    alignItems: "center",
  },
});

export default IconProfile1;
