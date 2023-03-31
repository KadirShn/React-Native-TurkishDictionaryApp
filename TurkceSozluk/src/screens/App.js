import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation/>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
