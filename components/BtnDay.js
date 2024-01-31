import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Property1unselected2 from "./Property1unselected2";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const BtnDay = () => {
  return (
    <View style={styles.btnDay}>
      <Property1unselected2
        property1unselectedPosition="absolute"
        property1unselectedTop={20}
        property1unselectedLeft={20}
        property1unselectedBackgroundColor="#fff"
        dAYColor="#000"
      />
      <View style={styles.property1unselected}>
        <Text style={styles.day}>DAY</Text>
      </View>
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
  btnDay: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    width: 134,
    height: 170,
    overflow: "hidden",
    borderWidth: 1,
  },
});

export default BtnDay;
