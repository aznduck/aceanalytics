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
import ProfileSelected from "../components/ProfileSelected";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <View style={styles.backgroundRectangle} />
      <ProfileSelected
        iconFeed
        showIconStats
        showIconProfile
        profileSelectedPosition="absolute"
        profileSelectedMarginLeft={-173.5}
        profileSelectedBottom={30}
        profileSelectedLeft="50%"
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
      <View style={[styles.profileChild, styles.profileLayout]} />
      <View style={[styles.profileItem, styles.profileLayout]} />
      <Text style={[styles.aznduck, styles.uploadTypo]}>aznduck</Text>
      <Image
        style={styles.pencil1Icon}
        contentFit="cover"
        source={require("../assets/pencil-1.png")}
      />
      <Text style={[styles.profile1, styles.profile1Position]}>Profile</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-2841.png")}
        />
      </Pressable>
      <View style={[styles.userUp01Parent, styles.profile1Position]}>
        <Image
          style={styles.userUp01Icon}
          contentFit="cover"
          source={require("../assets/userup01.png")}
        />
        <Text style={[styles.upload, styles.uploadTypo]}>upload</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileLayout: {
    borderRadius: Border.br_34xl,
    position: "absolute",
  },
  uploadTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.koulenRegular,
  },
  profile1Position: {
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
  profileChild: {
    top: 177,
    left: 48,
    backgroundColor: "#ffc267",
    width: 293,
    height: 497,
  },
  profileItem: {
    top: 556,
    left: 86,
    backgroundColor: "#ffe5bd",
    width: 222,
    height: 74,
  },
  aznduck: {
    top: 558,
    left: 122,
    fontSize: FontSize.size_21xl,
    position: "absolute",
  },
  pencil1Icon: {
    top: 579,
    left: 260,
    width: 27,
    height: 27,
    position: "absolute",
  },
  profile1: {
    marginLeft: -43.5,
    top: 44,
    fontSize: FontSize.size_11xl,
    lineHeight: 39,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.koulenRegular,
    left: "50%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 98,
    top: 243,
    width: 200,
    height: 200,
    position: "absolute",
  },
  userUp01Icon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  upload: {
    fontSize: FontSize.size_5xl,
  },
  userUp01Parent: {
    marginLeft: -31.5,
    top: 454,
    alignItems: "center",
  },
  profile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
  },
});

export default Profile;
