import React, { useState,useEffect } from "react";
import { Animated } from "react-native";
import Box from "./box";
import { Logo } from "./icons/Logo";
import Bg from "./bg";
import SearchBox from "./search";
import theme from "../utils/theme";

const Hero_Height = 230;

function HomeSearch({isSearchFocus,onSearchFocus}) {
  const [heroHeight] = useState(new Animated.Value(Hero_Height));
  const [bgOpacity] = useState(new Animated.Value(1));

  useEffect(() => {
    if (isSearchFocus) {
      //bgOpacity Animation
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }).start();
      //Height Animation
      Animated.timing(heroHeight, {
        toValue: 108,
        duration: 250,
        useNativeDriver: false,
      }).start();
    } else {
      //bgOpacity Animation
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: false,
      }).start();
      //Height Animation
      Animated.timing(heroHeight, {
        toValue: Hero_Height,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  }, [bgOpacity, heroHeight, isSearchFocus]);
  return (
    <Box as={Animated.View} position="relative" zIndex={1} height={heroHeight}>
      <Box mt={-60} as={Animated.View} style={{ opacity: bgOpacity }}>
        <Bg pt={34}>
          <Box pt={26} flex={1} alignItems="center" justifyContent="center">
            <Logo color={theme.colors.softRed} />
          </Box>
        </Bg>
      </Box>

      {/* Search */}
      <Box
        position="absolute"
        left={0}
        bottom={isSearchFocus ? 0 : -42}
        p={16}
        width="100%"
      >
        <SearchBox onChangeFocus={(status) => onSearchFocus(status)} />
      </Box>
    </Box>
  );
}
export default HomeSearch;
