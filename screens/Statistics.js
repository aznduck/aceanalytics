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
import StatsSelected from "../components/StatsSelected";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Statistics = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.statistics}>
      <View style={[styles.backgroundRectangle, styles.textPosition]} />
      <View style={styles.statisticsOptions}>
        <TouchableOpacity
          style={styles.buttonFlexBox}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Sessions")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={styles.trendsTypo}>Sessions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.trendsButton, styles.buttonFlexBox]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Trends")}
        >
          <Image
            style={styles.hotIcon}
            contentFit="cover"
            source={require("../assets/hot.png")}
          />
          <Text style={[styles.trends, styles.trendsTypo]}>Trends</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.trendsButton, styles.buttonFlexBox]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Records")}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
          <Text style={[styles.trends, styles.trendsTypo]}>Records</Text>
        </TouchableOpacity>
      </View>
      <StatsSelected
        iconFeed
        showIconStats
        showIconProfile
        statsSelectedPosition="absolute"
        statsSelectedTop={748}
        statsSelectedLeft={23}
        statsSelectedMarginLeft="unset"
        statsSelectedBottom="unset"
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
      <View style={styles.helloAznduck}>
        <Text style={[styles.helloAznduck1, styles.textFlexBox]}>{`Hello!  ✌️
AZNDUCK!`}</Text>
        <TouchableOpacity
          style={styles.wrapper}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.icon2}
            contentFit="cover"
            source={require("../assets/ellipse-284.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.overalTotal}>
        <Text style={[styles.total, styles.totalPosition]}>TOTAL</Text>
        <View style={styles.frame}>
          <Image
            style={[styles.vectorIcon, styles.totalPosition]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.text, styles.textFlexBox]}>$ 4.00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    left: 0,
    position: "absolute",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_11xl,
    justifyContent: "center",
    alignItems: "center",
    width: 326,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
  },
  trendsTypo: {
    marginLeft: 10,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 39,
  },
  totalPosition: {
    top: 26,
    position: "absolute",
  },
  backgroundRectangle: {
    top: 0,
    backgroundColor: Color.colorBlack,
    width: 393,
    height: 852,
  },
  icon: {
    width: 17,
    height: 17,
  },
  hotIcon: {
    width: 14,
    height: 17,
  },
  trends: {
    width: 72,
  },
  trendsButton: {
    marginTop: 22,
  },
  icon1: {
    width: 16,
    height: 16,
  },
  statisticsOptions: {
    top: 409,
    left: 37,
    position: "absolute",
  },
  helloAznduck1: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.koulenRegular,
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 70,
    height: 70,
    marginLeft: 138,
  },
  helloAznduck: {
    marginLeft: -162.5,
    top: 44,
    left: "50%",
    flexDirection: "row",
    position: "absolute",
  },
  total: {
    marginLeft: -37,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 39,
    left: "50%",
  },
  vectorIcon: {
    left: 209,
    width: 59,
    height: 65,
  },
  text: {
    top: 8,
    fontSize: FontSize.size_51xl,
    fontWeight: "800",
    fontFamily: FontFamily.anekLatinExtraBold,
    width: 209,
    height: 39,
    left: 0,
    position: "absolute",
  },
  frame: {
    top: 87,
    left: 65,
    width: 268,
    height: 91,
    position: "absolute",
    overflow: "hidden",
  },
  overalTotal: {
    top: 150,
    left: 25,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorLimegreen_300,
    width: 342,
    height: 190,
    position: "absolute",
    overflow: "hidden",
  },
  statistics: {
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Statistics;
