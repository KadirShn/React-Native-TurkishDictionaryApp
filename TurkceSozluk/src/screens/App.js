import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./SearchScreen";
import DetailScreen from "./DetailScreen";
import HistoryScreen from "./HistoryScreen";
import FavoriteScreen from "./FavoriteScreen";
import TabBar from "../component/tab-bar";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Box from "../component/box";
import { alignItems, alignSelf, textAlign } from "styled-system";
import { SvgMore } from "../component/icons/More";
import { SvgLeft } from "../component/icons/Left";
import Button from "../component/button";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="SearchNav"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route, navigation }) => {
          return {
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontWeight:"300",
              color:theme.colors.textDark
            },
            title: route.params?.title,
            headerStyle: {
              backgroundColor: theme.colors.softRed,
              shadowColor: "transparent",
              
            },
            headerLeft: () => (
              <Button py={10} px={16} onPress={() => navigation.navigate('SearchNav')}>
                <SvgLeft color={theme.colors.textDark} />
              </Button>
            ),
            headerRight: () => (
              <Button py={10} px={16} onPress={() => navigation.navigate('SearchNav')}>
                <SvgMore color={theme.colors.textDark} />
              </Button>
            ),
          };
        }}
      />
    </HomeStack.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            tabBar={(props) => <TabBar {...props} />}
            initialRouteName="Search"
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: "#7b2cbf",
              tabBarInactiveTintColor: "darkgrey",
              tabBarStyle: { backgroundColor: "#A2D2FF" },
            }}
          >
            <Tab.Screen name="History" component={HistoryScreen} />
            <Tab.Screen name="Search" component={SearchStack} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
