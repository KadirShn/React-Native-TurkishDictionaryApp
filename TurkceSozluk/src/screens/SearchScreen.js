import { StatusBar, Animated } from "react-native";
import React, { useState, useEffect } from "react";
import Box from "../component/box";
import SafeAreaView from "react-native-safe-area-view";
import theme from "../utils/theme";
import { useFocusEffect } from "@react-navigation/native";
import Text from "../component/text";
import {SuggestionCard,SuggestionCardDY} from "../component/suggestionCard";
import SearchHistoryList from "../component/searchHistoryList";
import HomeSearch from "../component/homeSearch";

function SearchScreen({ navigation }) {
  const [isSearchFocus, setSearchFocus] = useState(false);
  const [homeData, setHomeData] = useState(null);

  const getHomeData = async () => {
    const response = await fetch("https://sozluk.gov.tr/icerik");
    const data = await response.json();
    setHomeData(data);
  };

  useEffect(() => {
    getHomeData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? "dark-content" : "light-content");
      Platform.OS === "android" &&
        StatusBar.setBackgroundColor(
          isSearchFocus ? theme.colors.softRed : theme.colors.red
        );
    }, [isSearchFocus])
  );

  const DATA = [
    { id: "a1df", title: "Araba"},
    { id: "a2df", title: "Muharebe"},
    { id: "a3df", title: "Savaş"},
    { id: "a4df", title: "Deney"},
  ];

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? "softRed" : "red"} flex={1}>
      {/* Header */}
      <HomeSearch
        isSearchFocus={isSearchFocus}
        onSearchFocus={setSearchFocus}
      />

      {/* contect */}
      <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box flex={1}>
            <Box mx={16} mt={16}>
              <Text color="textLight">Son Aramalar</Text>
              <Box bg="light" height={3} width="40%" />
            </Box>
            <SearchHistoryList data={DATA} />
          </Box>
        ) : (
          <Box px={16} py={40} flex={1}>
            <SuggestionCard
              title="Bir Deyim - Atasözü"
              data={homeData?.kelime[0]}
              onPress={() =>
                navigation.navigate("Detail", {
                  title: homeData?.kelime[0].madde,
                })
              }
            />

            <SuggestionCard
              mt={30}
              title="Bir deyim - Atasözü"
              data={homeData?.atasoz[0]}
              onPress={() =>
                navigation.navigate("Detail", {
                  title: homeData?.atasoz[0].madde,
                })
              }
            />

            <SuggestionCardDY
              mt={30}
              title="Sıkça Yapılan Yanlışlara Doğrular"
              data={homeData?.syyd[0]}
              onPress={() =>
                navigation.navigate("Detail", {
                  title: homeData?.syyd[0].dogrukelime,
                })
              }
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SearchScreen;
