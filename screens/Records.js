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
import StatsSelected from "../components/StatsSelected";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Records = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.records}>
      <View style={styles.backgroundRectangle} />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon2.png")}
      />
      <Text style={styles.records1}>Records</Text>
      <View style={[styles.biggestWin, styles.biggestLayout]}>
        <View style={[styles.biggestWinChild, styles.biggestChildPosition]} />
        <Text style={[styles.biggestWin1, styles.biggestTypo]}>
          Biggest Win
        </Text>
        <Text style={[styles.text, styles.textTypo]}>+12.50</Text>
      </View>
      <View style={[styles.biggestLoss, styles.biggestLayout]}>
        <View style={[styles.biggestLossChild, styles.biggestChildPosition]} />
        <Text style={[styles.text1, styles.textTypo]}>-8.50</Text>
        <Text style={[styles.biggestLoss1, styles.biggestTypo]}>
          Biggest Loss
        </Text>
      </View>
      <View style={[styles.longestSession, styles.biggestLayout]}>
        <View style={[styles.longestSession1, styles.biggestChildPosition]} />
        <Text style={[styles.longestSession2, styles.longestTypo]}>
          Longest Session
        </Text>
        <Text style={[styles.text2, styles.text2Typo]}>2:30</Text>
      </View>
      <View style={[styles.longestStreak, styles.biggestLayout]}>
        <View
          style={[styles.longestStreakChild, styles.biggestChildPosition]}
        />
        <Text style={[styles.longestStreak1, styles.longestTypo]}>
          Longest Streak
        </Text>
        <Text style={[styles.sessions, styles.text2Typo]}>5 Sessions</Text>
      </View>
      <StatsSelected
        iconFeed
        showIconStats
        showIconProfile
        statsSelectedPosition="absolute"
        statsSelectedTop="unset"
        statsSelectedLeft="50%"
        statsSelectedMarginLeft={-167.5}
        statsSelectedBottom={30}
        iconFeedPosition="unset"
        iconFeedFlexDirection="column"
        iconFeedAlignItems="center"
        iconFeedJustifyContent="flex-start"
        iconStatsWidth={60}
        iconStatsMarginLeft="unset"
        iconStatsHeight={60}
        iconStatsOverflow="hidden"
        iconProfileWidth="unset"
        iconProfileMarginLeft="unset"
        iconProfileMarginTop={2}
        onIconFeedPress={() => navigation.navigate("Feed")}
      />
      <Pressable
        style={styles.chevronLeft}
        onPress={() => navigation.navigate("Statistics")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </Pressable>
      <Text style={styles.records1}>Records</Text>
      <Pressable style={styles.chevronLeft} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  biggestLayout: {
    height: 130,
    width: 331,
    position: "absolute",
  },
  biggestChildPosition: {
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  biggestTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.koulenRegular,
    position: "absolute",
  },
  textTypo: {
    height: 54,
    width: 213,
    fontFamily: FontFamily.anekLatinBold,
    fontWeight: "700",
    fontSize: FontSize.size_21xl,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  longestTypo: {
    top: 6,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.koulenRegular,
    position: "absolute",
  },
  text2Typo: {
    top: 53,
    height: 54,
    width: 213,
    fontFamily: FontFamily.anekLatinBold,
    fontWeight: "700",
    fontSize: FontSize.size_21xl,
    color: Color.colorBlack,
    textAlign: "center",
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
  icon: {
    height: "2%",
    width: "2.16%",
    top: "6.16%",
    right: "90.51%",
    bottom: "91.84%",
    left: "7.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  records1: {
    marginLeft: -48.5,
    left: "50%",
    fontSize: FontSize.size_11xl,
    lineHeight: 39,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.koulenRegular,
    top: 44,
    position: "absolute",
  },
  biggestWinChild: {
    backgroundColor: Color.colorLimegreen_200,
  },
  biggestWin1: {
    top: 11,
    left: 116,
  },
  text: {
    top: 58,
    left: 53,
  },
  biggestWin: {
    top: 111,
    left: 36,
    width: 331,
  },
  biggestLossChild: {
    backgroundColor: Color.colorIndianred_200,
  },
  text1: {
    top: 57,
    left: 54,
  },
  biggestLoss1: {
    top: 10,
    left: 112,
  },
  biggestLoss: {
    top: 269,
    left: 36,
    width: 331,
  },
  longestSession1: {
    backgroundColor: "#64fee2",
  },
  longestSession2: {
    left: 102,
  },
  text2: {
    left: 63,
  },
  longestSession: {
    top: 427,
    left: 33,
  },
  longestStreakChild: {
    backgroundColor: "#fdd443",
  },
  longestStreak1: {
    left: 101,
  },
  sessions: {
    left: 56,
  },
  longestStreak: {
    top: 585,
    left: 36,
    width: 331,
  },
  icon1: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  chevronLeft: {
    left: 16,
    width: 34,
    height: 34,
    top: 44,
    position: "absolute",
  },
  records: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
  },
});

export default Records;
