import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Property1unselected1 from "./Property1unselected11";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const BtnYear = () => {
  return (
    <View style={styles.btnYear}>
      <View style={styles.property1selected}>
        <Text style={styles.year}>YEAR</Text>
      </View>
      <Property1unselected1
        propPosition="absolute"
        propTop={111}
        propLeft={20}
        propBorderStyle="solid"
        propBorderColor="#fff"
        propBorderWidth={1}
        propColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  year: {
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
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_3xs,
  },
  btnYear: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 144,
    height: 170,
    overflow: "hidden",
  },
});

export default BtnYear;
