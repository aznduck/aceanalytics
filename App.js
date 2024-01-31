const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Statistics from "./screens/Statistics";
import Menu from "./components/Menu";
import SplashScreen from "./screens/SplashScreen";
import Profile from "./screens/Profile";
import FeedCard from "./screens/FeedCard";
import Done from "./components/Done";
import Add from "./screens/Add";
import Feed from "./screens/Feed";
import Records from "./screens/Records";
import BtnYear from "./components/BtnYear";
import BtnMonth from "./components/BtnMonth";
import BtnDay from "./components/BtnDay";
import Trends from "./screens/Trends";
import Sessions from "./screens/Sessions";
import Property1unselected2 from "./components/Property1unselected2";
import Property1default from "./components/Property1default";
import FeedSelected from "./components/FeedSelected";
import ProfileSelected from "./components/ProfileSelected";
import StatsSelected from "./components/StatsSelected";
import Menu8 from "./components/Menu8";
import Menu7 from "./components/Menu7";
import Menu6 from "./components/Menu6";
import Menu5 from "./components/Menu5";
import Menu4 from "./components/Menu4";
import Menu3 from "./components/Menu3";
import Menu2 from "./components/Menu2";
import Menu1 from "./components/Menu1";
import GroupIcon2 from "./components/GroupIcon2";
import GroupIcon1 from "./components/GroupIcon1";
import GroupIcon from "./components/GroupIcon";
import IconFeed from "./components/IconFeed";
import IconStats from "./components/IconStats";
import IconProfile from "./components/IconProfile";
import IconProfile1 from "./components/IconProfile";
import IconStats1 from "./components/IconStats";
import IconFeed1 from "./components/IconFeed";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Koulen-Regular": require("./assets/fonts/Koulen-Regular.ttf"),
    "AnekLatin-Bold": require("./assets/fonts/AnekLatin-Bold.ttf"),
    "AnekLatin-ExtraBold": require("./assets/fonts/AnekLatin-ExtraBold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Statistics"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Statistics"
              component={Statistics}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FeedCard"
              component={FeedCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Add"
              component={Add}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Feed"
              component={Feed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Records"
              component={Records}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Trends"
              component={Trends}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sessions"
              component={Sessions}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
