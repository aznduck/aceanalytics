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
import Property1unselected2 from "../components/Property1unselected2";
import Property1selected1 from "../components/Property1selected11";
import Property1unselected1 from "../components/Property1unselected11";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Trends = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.trends, styles.iconLayout]}>
      <View style={styles.backgroundRectangle} />
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
        onMenuPress={() => navigation.navigate("Feed")}
        onIconFeedPress={() => navigation.navigate("Feed")}
      />
      <Pressable style={styles.chevronLeft} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </Pressable>
      <Text style={styles.trends1}>TRENDS</Text>
      <View style={styles.timeFilters}>
        <Property1unselected2
          property1unselectedPosition="unset"
          property1unselectedTop="unset"
          property1unselectedLeft="unset"
          property1unselectedBackgroundColor="unset"
          dAYColor="#fff"
        />
        <Property1selected1
          mONTHPosition="unset"
          mONTHTop="unset"
          mONTHLeft="unset"
          mONTHBackgroundColor="unset"
          mONTHMarginLeft={10}
          propColor="#fff"
        />
        <Property1unselected1
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
          propBorderStyle="unset"
          propBorderColor="unset"
          propBackgroundColor="#fff"
          propMarginLeft={10}
          propColor="#000"
        />
      </View>
      <View style={styles.trendsGraph}>
        <Image
          style={styles.trendsGraphChild}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
        <Text style={[styles.text, styles.textFlexBox]}>$ 4.00</Text>
        <Text style={[styles.growth, styles.textFlexBox]}>Growth</Text>
        <Image
          style={styles.trendsGraphItem}
          contentFit="cover"
          source={require("../assets/ellipse-285.png")}
        />
        <View style={styles.trendsGraphInner} />
        <Image
          style={styles.trendUp01Icon}
          contentFit="cover"
          source={require("../assets/trendup01.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 39,
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
    height: "100%",
    overflow: "hidden",
  },
  chevronLeft: {
    left: 16,
    width: 34,
    height: 34,
    top: 44,
    position: "absolute",
  },
  trends1: {
    marginLeft: -40.5,
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    color: Color.colorWhite,
    lineHeight: 39,
    fontFamily: FontFamily.koulenRegular,
    left: "50%",
    top: 44,
    position: "absolute",
  },
  timeFilters: {
    marginLeft: -170.5,
    top: 114,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  trendsGraphChild: {
    top: 207,
    left: 45,
    width: 255,
    height: 223,
    position: "absolute",
  },
  text: {
    top: 83,
    left: 65,
    fontSize: FontSize.size_51xl,
    fontWeight: "800",
    fontFamily: FontFamily.anekLatinExtraBold,
  },
  growth: {
    top: 30,
    left: 66,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
  },
  trendsGraphItem: {
    top: 196,
    left: 170,
    width: 21,
    height: 21,
    position: "absolute",
  },
  trendsGraphInner: {
    top: 210,
    left: 177,
    borderStyle: "solid",
    borderColor: "#fff6d5",
    borderRightWidth: 4,
    width: 4,
    height: 222,
    position: "absolute",
  },
  trendUp01Icon: {
    top: 90,
    left: 276,
    width: 25,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  trendsGraph: {
    top: 189,
    left: 26,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorLimegreen_300,
    width: 342,
    height: 510,
    position: "absolute",
  },
  trends: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    height: 852,
  },
});

export default Trends;
