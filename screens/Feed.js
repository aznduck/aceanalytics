import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FeedSelected from "../components/FeedSelected";
import OverallTotalContainer from "../components/OverallTotalContainer";
import FormwithDatePicker from "../components/FormwithDatePicker";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Feed = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.feed}>
      <View style={styles.backgroundRectangle} />
      <FeedSelected
        iconFeed={require("../assets/iconfeed2.png")}
        iconStatistics={require("../assets/iconstatistics3.png")}
        iconProfile={require("../assets/iconprofile2.png")}
        feedSelectedPosition="absolute"
        feedSelectedMarginLeft={-172.5}
        feedSelectedBottom={30}
        feedSelectedLeft="50%"
        onIconStatsPress={() => navigation.navigate("Statistics")}
        onIconProfilePress={() => navigation.navigate("Profile")}
      />
      <TouchableOpacity
        style={styles.addButton}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Add")}
      >
        <View style={styles.addButtonChild} />
        <View style={[styles.plusParent, styles.feed1Position]}>
          <Image
            style={styles.plusIcon}
            contentFit="cover"
            source={require("../assets/plus.png")}
          />
          <Text style={styles.add}>add</Text>
        </View>
      </TouchableOpacity>
      <Text style={[styles.feed1, styles.feed1Position]}>FEED</Text>
      <OverallTotalContainer propTop={104} />
      <FormwithDatePicker />
    </View>
  );
};

const styles = StyleSheet.create({
  feed1Position: {
    left: "50%",
    position: "absolute",
  },
  backgroundRectangle: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorBlack,
    width: 393,
    position: "absolute",
    height: 852,
  },
  addButtonChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: "#e5e5e5",
    position: "absolute",
    width: "100%",
  },
  plusIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  add: {
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    textAlign: "left",
    display: "flex",
    width: 33,
    height: 29,
    marginLeft: 14,
    fontFamily: FontFamily.koulenRegular,
    alignItems: "center",
  },
  plusParent: {
    marginLeft: -35.5,
    top: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  addButton: {
    top: 354,
    left: 31,
    width: 331,
    height: 60,
    position: "absolute",
    overflow: "hidden",
  },
  feed1: {
    marginLeft: -26.5,
    top: 44,
    fontSize: FontSize.size_11xl,
    lineHeight: 39,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.koulenRegular,
  },
  feed: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
  },
});

export default Feed;
