import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const GreenCard = ({ prop, prop1 }) => {
  return (
    <View style={styles.greenCard}>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textFlexBox]}>{prop}</Text>
        <Text style={[styles.text1, styles.textFlexBox]}>{prop1}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  text: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.koulenRegular,
  },
  text1: {
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.anekLatinBold,
    marginLeft: 114,
  },
  parent: {
    position: "absolute",
    marginLeft: -142.5,
    top: 27,
    left: "50%",
    width: 285,
    flexDirection: "row",
  },
  greenCard: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLimegreen_100,
    width: 331,
    height: 88,
    marginTop: 10,
  },
});

export default GreenCard;
