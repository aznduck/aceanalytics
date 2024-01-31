import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import OverallTotalContainer from "../components/OverallTotalContainer";
import StatsSelected from "../components/StatsSelected";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Sessions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sessions}>
      <View style={styles.backgroundRectangle} />
      <OverallTotalContainer propTop={120} />
      <StatsSelected
        iconFeed
        showIconStats
        showIconProfile
        statsSelectedPosition="absolute"
        statsSelectedTop="unset"
        statsSelectedLeft="50%"
        statsSelectedMarginLeft={-173.5}
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
      <Pressable style={styles.chevronLeft} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </Pressable>
      <Text style={styles.sessions1}>Sessions</Text>
      <View style={[styles.sessionsPlayed, styles.averageTimeLayout]}>
        <View style={[styles.sessionsPlayedChild, styles.iconLayout]} />
        <Text style={[styles.sessionsPlayed1, styles.averageTypo]}>{`Sessions 
Played`}</Text>
        <Text style={styles.text}>69</Text>
      </View>
      <View style={[styles.winRatio, styles.winRatioPosition]}>
        <View style={[styles.sessionsPlayedChild, styles.iconLayout]} />
        <Text style={[styles.sessionsPlayed1, styles.averageTypo]}>
          Win Ratio
        </Text>
        <Text style={[styles.text1, styles.textFlexBox]}>50%</Text>
      </View>
      <View style={[styles.averageNetResult, styles.winRatioPosition]}>
        <View style={[styles.sessionsPlayedChild, styles.iconLayout]} />
        <Text style={[styles.averageNetResult1, styles.averageTypo]}>{`Average
Net Result`}</Text>
        <Text style={[styles.text2, styles.textFlexBox]}>+2.00</Text>
      </View>
      <View style={[styles.averageTime, styles.averageTimeLayout]}>
        <View style={[styles.sessionsPlayedChild, styles.iconLayout]} />
        <Text style={[styles.averageTime1, styles.averageTypo]}>{`Average
Time`}</Text>
        <Text style={styles.text3}>1:45:00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  averageTimeLayout: {
    height: 170,
    width: 160,
    top: 340,
    position: "absolute",
  },
  averageTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    top: 26,
    textAlign: "center",
    position: "absolute",
  },
  winRatioPosition: {
    top: 533,
    height: 170,
    width: 160,
    position: "absolute",
  },
  textFlexBox: {
    top: 74,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_31xl,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.koulenRegular,
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
    overflow: "hidden",
  },
  chevronLeft: {
    left: 16,
    width: 34,
    height: 34,
    top: 44,
    position: "absolute",
  },
  sessions1: {
    marginLeft: -49.5,
    fontSize: FontSize.size_11xl,
    lineHeight: 39,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.koulenRegular,
    left: "50%",
    top: 44,
    position: "absolute",
  },
  sessionsPlayedChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    height: "100%",
  },
  sessionsPlayed1: {
    left: 46,
  },
  text: {
    top: 85,
    left: 54,
    width: 55,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_31xl,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.koulenRegular,
    position: "absolute",
  },
  sessionsPlayed: {
    left: 29,
  },
  text1: {
    left: 41,
    width: 81,
  },
  winRatio: {
    left: 29,
  },
  averageNetResult1: {
    left: 43,
  },
  text2: {
    marginLeft: -56,
    width: 108,
    left: "50%",
    top: 74,
  },
  averageNetResult: {
    left: 209,
  },
  averageTime1: {
    left: 51,
  },
  text3: {
    top: 68,
    left: 19,
    fontSize: FontSize.size_31xl,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.koulenRegular,
    position: "absolute",
  },
  averageTime: {
    left: 208,
  },
  sessions: {
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Sessions;
