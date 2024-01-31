import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Property1default from "./Property1default";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Done = () => {
  return (
    <View style={styles.done}>
      <View style={styles.property1default}>
        <Image
          style={styles.checkCircleIcon}
          contentFit="cover"
          source={require("../assets/checkcircle.png")}
        />
        <Text style={styles.done1}>DONE</Text>
      </View>
      <Property1default
        dimensionLabel={require("../assets/checkcircle1.png")}
        property1defaultPosition="absolute"
        property1defaultTop={123}
        property1defaultLeft={20}
        dONEColor="#5ae568"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  checkCircleIcon: {
    width: 27,
    height: 27,
    overflow: "hidden",
  },
  done1: {
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    textAlign: "left",
    marginTop: 3,
  },
  property1default: {
    position: "absolute",
    top: 20,
    left: 20,
    alignItems: "center",
  },
  done: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 83,
    height: 191,
    overflow: "hidden",
  },
});

export default Done;
