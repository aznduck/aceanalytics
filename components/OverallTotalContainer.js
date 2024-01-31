import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const OverallTotalContainer = ({ propTop }) => {
  const overallTotalStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.overallTotal, overallTotalStyle]}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.total, styles.textFlexBox]}>TOTAL</Text>
      <Text style={[styles.text, styles.textFlexBox]}>$ 4.00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 39,
    position: "absolute",
  },
  vectorIcon: {
    top: 113,
    left: 274,
    width: 59,
    height: 65,
    position: "absolute",
  },
  total: {
    marginLeft: -37,
    top: 26,
    left: "50%",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  text: {
    top: 87,
    left: 65,
    fontSize: FontSize.size_51xl,
    fontWeight: "800",
    fontFamily: FontFamily.anekLatinExtraBold,
  },
  overallTotal: {
    top: 104,
    left: 25,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorLimegreen_300,
    width: 342,
    height: 190,
    position: "absolute",
  },
});

export default OverallTotalContainer;
