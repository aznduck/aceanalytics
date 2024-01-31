import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Property1default from "../components/Property1default";
import OverallTotalContainer from "../components/OverallTotalContainer";
import FeedSelected from "../components/FeedSelected";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Add = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.add, styles.addLayout]}>
      <View style={styles.backgroundRectangle} />
      <Property1default
        dimensionLabel={require("../assets/checkcircle.png")}
        property1defaultPosition="absolute"
        property1defaultTop={39}
        property1defaultLeft={329}
        dONEColor="#fff"
        onDonePress={() => navigation.navigate("Feed")}
      />
      <OverallTotalContainer propTop={104} />
      <Text style={[styles.addAFeed, styles.addAFeedClr]}>ADD a FEED CARD</Text>
      <Pressable style={styles.chevronLeft} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.addLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </Pressable>
      <View style={[styles.cardInputs, styles.addAFeedPosition]}>
        <View>
          <Text style={[styles.buyInAmount1, styles.addAFeedClr]}>
            Buy-In Amount
          </Text>
          <TextInput
            style={styles.buyInAmountChild}
            placeholder="$$$"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
          />
        </View>
        <View style={styles.buyInsInput}>
          <Text style={[styles.buyInAmount1, styles.addAFeedClr]}>Buy-Ins</Text>
          <TextInput
            style={styles.buyInAmountChild}
            placeholder="#"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
          />
        </View>
        <View style={styles.buyInsInput}>
          <Text style={[styles.buyInAmount1, styles.addAFeedClr]}>
            Time PLAYED
          </Text>
          <TextInput
            style={styles.buyInAmountChild}
            placeholder="Minutes"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
          />
        </View>
        <View style={styles.buyInsInput}>
          <Text style={[styles.buyInAmount1, styles.addAFeedClr]}>
            #OF PLAYERS
          </Text>
          <TextInput
            style={styles.buyInAmountChild}
            placeholder="#"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
          />
        </View>
      </View>
      <FeedSelected
        iconFeed={require("../assets/iconfeed2.png")}
        iconStatistics={require("../assets/iconstatistics3.png")}
        iconProfile={require("../assets/iconprofile.png")}
        feedSelectedPosition="absolute"
        feedSelectedMarginLeft={-172.5}
        feedSelectedBottom={30}
        feedSelectedLeft="50%"
        onIconStatsPress={() => navigation.navigate("Statistics")}
        onIconProfilePress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addLayout: {
    overflow: "hidden",
    width: "100%",
  },
  addAFeedClr: {
    color: Color.colorWhite,
    fontFamily: FontFamily.koulenRegular,
  },
  addAFeedPosition: {
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
  addAFeed: {
    marginLeft: -92.5,
    fontSize: FontSize.size_11xl,
    lineHeight: 39,
    textAlign: "center",
    left: "50%",
    position: "absolute",
    top: 44,
  },
  icon: {
    height: "100%",
  },
  chevronLeft: {
    left: 16,
    width: 34,
    height: 34,
    top: 44,
    position: "absolute",
  },
  buyInAmount1: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    width: 117,
    height: 27,
  },
  buyInAmountChild: {
    borderRadius: Border.br_3xs,
    width: 314,
    height: 50,
    marginTop: 10,
  },
  buyInsInput: {
    marginTop: 10,
  },
  cardInputs: {
    marginLeft: -149.5,
    top: 324,
  },
  add: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
  },
});

export default Add;
