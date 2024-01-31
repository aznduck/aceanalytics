import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Property1unselected from "../screens/Property1unselected";
import Property1selected from "../screens/Property1selected";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Menu1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.menu, style]}>
      <View style={styles.iconFeed}>
        <Image
          style={styles.iconFeed1}
          contentFit="cover"
          source={require("../assets/iconfeed3.png")}
        />
        <Text style={[styles.feed, styles.feedTypo]}>Feed</Text>
      </View>
      <View style={styles.iconSpaceBlock}>
        <Image
          style={styles.iconFeed1}
          contentFit="cover"
          source={require("../assets/iconstatistics4.png")}
        />
        <Text style={[styles.statistics, styles.feedTypo]}>STATISTICS</Text>
      </View>
      <View style={[styles.iconProfile, styles.iconSpaceBlock]}>
        <Image
          style={styles.iconFeed1}
          contentFit="cover"
          source={require("../assets/iconprofile3.png")}
        />
        <Text style={[styles.feed, styles.feedTypo]}>Profile</Text>
      </View>
      <Property1unselected
        property1unselectedPosition="unset"
        property1unselectedMarginLeft={50}
        property1unselectedWidth={82}
        iconStatisticsOverflow="unset"
        onIconStatisticsPress={() => navigation.navigate("Statistics")}
      />
      <Property1selected
        profileImageId={require("../assets/iconprofile11.png")}
        profileImageUrl="PROFILE"
        property1selectedPosition="unset"
        property1selectedMarginLeft={50}
        pROFILEFontWeight="700"
        pROFILEFontFamily="Inter-Bold"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  feedTypo: {
    marginTop: 2,
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
  },
  iconSpaceBlock: {
    marginLeft: 50,
    display: "none",
    alignItems: "center",
  },
  iconFeed1: {
    width: 60,
    height: 60,
    overflow: "hidden",
  },
  feed: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  iconFeed: {
    alignItems: "center",
    width: 82,
  },
  statistics: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  iconProfile: {
    width: 82,
    marginLeft: 50,
    display: "none",
  },
  menu: {
    flexDirection: "row",
  },
});

export default Menu1;
