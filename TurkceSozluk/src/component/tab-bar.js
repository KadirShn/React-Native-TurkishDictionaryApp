import React from "react";
import { View, Text } from "react-native";
import Button from "./button";
import { Bookmarks } from "./icons/Bookmark";
import { Search } from "./icons/Search";
import { RotateCcw } from "../component/icons/RotateCcw";
import Box from "./box";
import theme from "../utils/theme";

function TabBar({ state, descriptors, navigation }) {
  return (
    <Box
    pb={4}
    bg="#f5f5f5"
    borderColor="#e5e5e5"
    borderWidth={1}
    flexDirection="row" 
    style={{
      shadowColor: "pink",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.9,
      shadowRadius: 24,
      elevation:32,
    }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === "Search" ? (
          <Box key={label} p={15} mt={-15} borderRadius="full" bg="#f5f5f5" borderColor="#e5e5e5"
          borderWidth={1} >
            <Button size={56} bg="red" borderRadius="full" onPress={onPress}>
              <Search color="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            pt={6}
            flexDirection="column"
            height={56}
            flex={1}
            onPress={onPress}
          >
            {label === "History" && ( 
            <RotateCcw 
              color={isFocused ? "red" : theme.colors.textLight}
            />
            )}
            {label === "Favorite" && (
            <Bookmarks
              color={isFocused ? "red" : theme.colors.textLight} 
            />
            )}
            <Box borderRadius="full" size={4} bg={isFocused ? "red" : "white"} mt={6} />
          </Button>
        );
      })}
    </Box>
  );
}
export default TabBar;
