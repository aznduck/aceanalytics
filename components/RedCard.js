import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const RedCard = ({ prop, prop1 }) => {
  return (
    <View style={[styles.redCard, styles.redCardLayout]}>
      <View style={[styles.redCardChild, styles.redCardLayout]} />
      <View style={styles.redCardInner}>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textFlexBox]}>{prop}</Text>
          <Text style={[styles.text1, styles.textFlexBox]}>{prop1}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  redCardLayout: {
    overflow: "hidden",
    height: 100,
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  redCardChild: {
    top: 0,
    left: 212,
    width: 100,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.koulenRegular,
    display: "flex",
    width: 117,
    height: 63,
    alignItems: "center",
  },
  text1: {
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.anekLatinBold,
    marginLeft: 80,
  },
  parent: {
    marginLeft: -142,
    top: 13,
    left: "50%",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  redCardInner: {
    height: "88%",
    width: "100%",
    top: "1%",
    right: "0%",
    bottom: "11%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorIndianred_100,
    position: "absolute",
  },
  redCard: {
    width: 331,
  },
});

export default RedCard;
