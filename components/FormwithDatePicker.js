import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import RedCard from "./RedCard";
import GreenCard from "./GreenCard";

const FormwithDatePicker = () => {
  return (
    <ScrollView
      style={styles.feedCards}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.feedCardsScrollViewContent}
    >
      <RedCard prop="12/27/23" prop1=" $ 8.50" />
      <GreenCard prop="12/22/23" prop1=" $ 12.50" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  feedCardsScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 5,
    paddingVertical: 16,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  feedCards: {
    position: "absolute",
    top: 426,
    left: 24,
    overflow: "hidden",
    flex: 1,
  },
});

export default FormwithDatePicker;
