import * as React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const ScrollCardInfoForm = () => {
  return (
    <ScrollView
      style={styles.cardInfo}
      horizontal={false}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.cardInfoScrollViewContent}
    >
      <View style={styles.cardInfoChild} />
      <Text style={styles.text}>-$8.50</Text>
      <Text style={[styles.text1, styles.text1Typo]}>12/27/23</Text>
      <Image
        style={styles.trendDown01Icon}
        contentFit="cover"
        source={require("../assets/trenddown01.png")}
      />
      <View style={styles.cardSecondaryColor} />
      <View style={styles.cardText}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.coinsStackedIcon}
            contentFit="cover"
            source={require("../assets/coinsstacked.png")}
          />
          <Text style={[styles.buyIn10, styles.text1Typo]}>Buy-In: $ 10</Text>
        </View>
        <View style={[styles.shoppingCart03Parent, styles.parentFlexBox]}>
          <Image
            style={styles.coinsStackedIcon}
            contentFit="cover"
            source={require("../assets/shoppingcart03.png")}
          />
          <Text style={[styles.buyIn10, styles.text1Typo]}># Buy-Ins: 2</Text>
        </View>
        <View style={[styles.shoppingCart03Parent, styles.parentFlexBox]}>
          <Image
            style={styles.coinsStackedIcon}
            contentFit="cover"
            source={require("../assets/clock.png")}
          />
          <Text style={[styles.buyIn10, styles.text1Typo]}>
            Time Played: 2:30
          </Text>
        </View>
        <View style={[styles.shoppingCart03Parent, styles.parentFlexBox]}>
          <Image
            style={styles.coinsStackedIcon}
            contentFit="cover"
            source={require("../assets/hot1.png")}
          />
          <Text
            style={[styles.buyIn10, styles.text1Typo]}
          >{`Net Rate: -3.40 `}</Text>
        </View>
        <View style={[styles.shoppingCart03Parent, styles.parentFlexBox]}>
          <Image
            style={styles.coinsStackedIcon}
            contentFit="cover"
            source={require("../assets/hand.png")}
          />
          <Text style={[styles.buyIn10, styles.text1Typo]}># Hands: 50</Text>
        </View>
        <View style={[styles.shoppingCart03Parent, styles.parentFlexBox]}>
          <Image
            style={styles.coinsStackedIcon}
            contentFit="cover"
            source={require("../assets/users03.png")}
          />
          <Text style={[styles.buyIn10, styles.text1Typo]}># Players: 8</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardInfoScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text1Typo: {
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  cardInfoChild: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIndianred_200,
    width: 342,
    height: 632,
    opacity: 0.8,
    zIndex: 0,
  },
  text: {
    top: 47,
    fontSize: FontSize.size_45xl,
    fontWeight: "800",
    fontFamily: FontFamily.anekLatinExtraBold,
    zIndex: 1,
    textAlign: "left",
    color: Color.colorWhite,
    left: 22,
    position: "absolute",
  },
  text1: {
    top: 11,
    fontSize: FontSize.size_xl,
    zIndex: 2,
    color: Color.colorWhite,
    left: 22,
    fontFamily: FontFamily.koulenRegular,
    position: "absolute",
  },
  trendDown01Icon: {
    top: 78,
    left: 238,
    width: 25,
    height: 25,
    zIndex: 3,
    overflow: "hidden",
    position: "absolute",
  },
  cardSecondaryColor: {
    top: 139,
    left: 21,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLightpink,
    width: 298,
    height: 464,
    zIndex: 4,
    position: "absolute",
  },
  coinsStackedIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  buyIn10: {
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    marginLeft: 20,
  },
  shoppingCart03Parent: {
    marginTop: 24,
  },
  cardText: {
    marginLeft: -99,
    top: 182,
    left: "50%",
    zIndex: 5,
    position: "absolute",
  },
  cardInfo: {
    top: 322,
    left: 25,
    flex: 1,
    overflow: "hidden",
    position: "absolute",
  },
});

export default ScrollCardInfoForm;
