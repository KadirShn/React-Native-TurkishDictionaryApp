import { Platform, StatusBar, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Box from "../component/box";
import SafeAreaView from "react-native-safe-area-view";
import { useFocusEffect } from "@react-navigation/native";
import Text from "../component/text";
import ActionButton, { ActionButtonTitle } from "../component/actionButton";
import DetailSummaryItem from "../component/detailSummaryItem";
import { SvgFavorite } from "../component/icons/Favorite";
import { SvgSound } from "../component/icons/Sound";
import { SvgHand } from "../component/icons/Hand";
import theme from "../utils/theme";
import LoaderText from "../component/LoaderText";

function DetailScreen({ route }) {
  const keyword = route.params?.title;
  const [data, setdata] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("dark-content");
      Platform.OS === "android" &&
        StatusBar.setBackgroundColor(theme.colors.softRed);
    }, [])
  );

  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`);
    const data = await response.json();
    setdata(data[0]);
  };

  useEffect(() => {
    getDetailData();
  }, []);

  return (
    <Box as={SafeAreaView} flex={1} bg="softRed">
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            {keyword}
          </Text>
          {(data?.telaffuz || data?.lisan) ? (<Text color="textLight" mt={6}>
            {data?.telaffuz} {data?.lisan}
          </Text>): null}
        </Box>
        <Box flexDirection="row" mt={24}>
          <ActionButton disabled={!data}>
            <SvgSound weight={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton disabled={!data} ml={12}>
            <SvgFavorite
              weight={24}
              height={24}
              color={theme.colors.textLight}
            />
          </ActionButton>
          <ActionButton disabled={!data} ml="auto">
            <SvgHand weight={24} height={24} color={theme.colors.textLight} />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </Box>
        <Box mt={32}>
          {data ? 
            data.anlamlarListe.map(item => (
            <DetailSummaryItem key={item.anlam_sira} data={item} border={item.anlam_sira != '1'} />
          )) : (
            [1, 2, 3].map((index) => (
              <DetailSummaryItem key={index} border={index != 1}>
                <LoaderText />
                <LoaderText width={250} mt={10} />
              </DetailSummaryItem>
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default DetailScreen;
