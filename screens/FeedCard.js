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
import ScrollCardInfoForm from "../components/ScrollCardInfoForm";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const FeedCard = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.feedCard, styles.iconLayout]}>
      <View style={styles.backgroundRectangle} />
      <FeedSelected
        iconFeed={require("../assets/iconfeed1.png")}
        iconStatistics={require("../assets/iconstatistics1.png")}
        iconProfile={require("../assets/iconprofile.png")}
        feedSelectedPosition="absolute"
        feedSelectedMarginLeft={-172.5}
        feedSelectedBottom={30}
        feedSelectedLeft="50%"
        onIconStatsPress={() => navigation.navigate("Statistics")}
        onIconProfilePress={() => navigation.navigate("Profile")}
      />
      <Text style={[styles.feedCard1, styles.feedCard1Position]}>
        FEED CARD
      </Text>
      <Pressable
        style={[styles.chevronLeft, styles.feedCard1Position]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </Pressable>
      <OverallTotalContainer propTop={104} />
      <ScrollCardInfoForm />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  feedCard1Position: {
    top: 44,
    position: "absolute",
  },
  backgroundRectangle: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorBlack,
    width: 393,
    height: 852,
    position: "absolute",
  },
  feedCard1: {
    marginLeft: -57.5,
    left: "50%",
    fontSize: FontSize.size_11xl,
    lineHeight: 39,
    fontFamily: FontFamily.koulenRegular,
    color: Color.colorWhite,
    textAlign: "center",
  },
  icon: {
    height: "100%",
  },
  chevronLeft: {
    left: 16,
    width: 34,
    height: 34,
  },
  feedCard: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 1113,
  },
});

export default FeedCard;
