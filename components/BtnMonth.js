import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Property1selected1 from "./Property1selected11";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const BtnMonth = () => {
  return (
    <View style={styles.btnMonth}>
      <Property1selected1
        mONTHPosition="absolute"
        mONTHTop={20}
        mONTHLeft={20}
        mONTHBackgroundColor="#fff"
        propColor="#000"
      />
      <View style={styles.property1unselected}>
        <Text style={styles.month}>MONTH</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  month: {
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
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_3xs,
    borderWidth: 1,
  },
  btnMonth: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    width: 162,
    height: 170,
    overflow: "hidden",
    borderWidth: 1,
  },
});

export default BtnMonth;
