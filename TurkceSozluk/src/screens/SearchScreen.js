import { StatusBar, Animated, FlatList,ActivityIndicator } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Box from "../component/box";
import BoxCenter from "../component/boxCenter";
import { Logo } from "../component/icons/Logo";
import SearchBox from "../component/search";
import SafeAreaView from "react-native-safe-area-view";
import theme from "../utils/theme";
import { useFocusEffect } from "@react-navigation/native";
import Bg from "../component/bg";
import { CardContainer, CardTitle, CardSummary } from "../component/card";
import Text from "../component/text";
import { SimpleCardContainer, SimpleCardTitle } from "../component/simple-card";

const Hero_Height = 230;

function SearchScreen({ navigation }) {
  const [isSearchFocus, setSearchFocus] = useState(false);
  const [heroHeight] = useState(new Animated.Value(Hero_Height));
  const [bgOpacity] = useState(new Animated.Value(1));
  const [homeData, setHomeData] = useState(null);

  const getHomeData = async () => {
    const response = await fetch("https://sozluk.gov.tr/icerik")
    const data = await response.json();
    setHomeData(data);
    
  }

  useEffect( () => {
    getHomeData();
  })


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
        toValue: 84,
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
    { id: "a1df", title: "Başlık1", summary: "Açıklama1" },
    { id: "a2df", title: "Başlık2", summary: "Açıklama2" },
    { id: "a3df", title: "Başlık3", summary: "Açıklama3" },
    { id: "a4df", title: "Başlık3", summary: "Açıklama3" },
    { id: "a5df", title: "Başlık3", summary: "Açıklama3" },
    { id: "a6df", title: "Başlık3", summary: "Açıklama3" },
    { id: "a7df", title: "Başlık3", summary: "Açıklama3" },
    { id: "a8df", title: "Başlık3", summary: "Açıklama3" },
    { id: "a9df", title: "Başlık3", summary: "Açıklama3" },
  ];

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? "softRed" : "red"} flex={1}>
      <StatusBar barStyle="light-content" />
      {/* Header */}
      <Box
        as={Animated.View}
        position="relative"
        zIndex={1}
        height={heroHeight}
      >
        <Box mt={-60} as={Animated.View} opacity={bgOpacity}>
          <Bg pt={34}>
            <Box flex={1} alignItems="center" justifyContent="center">
              <Logo/>
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
          <SearchBox onChangeFocus={(status) => setSearchFocus(status)} />
        </Box>
      </Box>

      {/* contect */}
      <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box  flex={1}>
            <Box mx={16} mt={16} borderBottomColor="#e5e5e5" borderBottomWidth={2}>
              <Text color="textLight">Son Aramalar</Text>
            </Box>
            <FlatList
            style={{paddingHorizontal:18,paddingVertical:16}}
              data={DATA}
              renderItem={({ item }) => (
                <Box my={6}>
                  <SimpleCardContainer>
                    <SimpleCardTitle>{item.title}</SimpleCardTitle>
                  </SimpleCardContainer>
                </Box>
              )}
              keyExtractor={(item) => item.id}
            />
          </Box>
        ) : (
          <Box px={16} py={40} flex={1}>
            <Box>
              <Text color="textLight">Bir Kelime</Text>
              <CardContainer
                mt={10}
                onPress={() => navigation.navigate('Detail',{title:homeData?.kelime[0].madde})}
              >
                {
                  homeData ? (
                    <>
                      <CardTitle>{homeData?.kelime[0].madde}</CardTitle>
                      <CardSummary>{homeData?.kelime[0].anlam}</CardSummary>
                    </>
                  ):(
                  <ActivityIndicator/>
                )}
                
              </CardContainer>
            </Box>

            <Box mt={40}>
              <Text color="textLight">Bir deyim - Atasözü</Text>
              <CardContainer
                mt={10}
                onPress={() => navigation.navigate('Detail',{title:homeData?.atasoz[0].madde})}
              >
                {
                  homeData ? (
                    <>
                      <CardTitle>{homeData?.atasoz[0].madde}</CardTitle>
                      <CardSummary>{homeData?.atasoz[0].anlam}</CardSummary>
                    </>
                  ):(
                  <ActivityIndicator/>
                )}
                
              </CardContainer>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SearchScreen;
