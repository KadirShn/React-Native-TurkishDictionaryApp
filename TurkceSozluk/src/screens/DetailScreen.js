import { Platform, StatusBar, ScrollView } from "react-native";
import React from "react";
import Box from "../component/box";
import SafeAreaView from "react-native-safe-area-view";
import { useFocusEffect } from "@react-navigation/native";
import Text from "../component/text";
import ActionButton, { ActionButtonTitle } from "../component/actionButton";
import {
  DetailSummaryItemContainer,
  DetailSummaryItemTitle,
  DetailSummaryItemSummary,
} from "../component/detailSummaryItem";
import { SvgFavoriteSolid } from "../component/icons/FavoriteSolid";
import { SvgSound } from "../component/icons/Sound";
import { SvgHand } from "../component/icons/Hand";
import theme from "../utils/theme";

function DetailScreen() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("dark-content");
      Platform.OS === "android" && StatusBar.setBackgroundColor(theme.colors.softRed);
    }, [])
  );

  return (
    <Box as={SafeAreaView} flex={1}  bg="softRed">
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            DetailScreen
          </Text>
          <Text color="textLight" mt={6}>
            Arapça Kalem
          </Text>
        </Box>
        <Box flexDirection="row" mt={24}>
          <ActionButton>
            <SvgSound weight={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml={12}>
            <SvgFavoriteSolid
              weight={24}
              height={24}
              color={theme.colors.red}
            />
          </ActionButton>
          <ActionButton ml="auto">
            <SvgHand weight={24} height={24} color={theme.colors.textLight} />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </Box>
        <Box mt={32}>
          <DetailSummaryItemContainer>
            <DetailSummaryItemTitle>
              Birinci yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı
              yazı yazı yazı yazı yazı yazı
            </DetailSummaryItemTitle>
            <DetailSummaryItemSummary>
              "İkinci yazı" baskayazı baskayı baskay bas baska kayazı baskayazı
              baskayazı baskayazı baskayazı
            </DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
          <DetailSummaryItemContainer border>
            <DetailSummaryItemTitle>
              Birinci yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı
              yazı yazı yazı yazı yazı yazı
            </DetailSummaryItemTitle>
            <DetailSummaryItemSummary>
              "İkinci yazı" baskayazı baskayı baskay bas baska kayazı baskayazı
              baskayazı baskayazı baskayazı
            </DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
          <DetailSummaryItemContainer border>
            <DetailSummaryItemTitle>
              Birinci yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı
              yazı yazı yazı yazı yazı yazı
            </DetailSummaryItemTitle>
            <DetailSummaryItemSummary>
              "İkinci yazı" baskayazı baskayı baskay bas baska kayazı baskayazı
              baskayazı baskayazı baskayazı
            </DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
          <DetailSummaryItemContainer border>
            <DetailSummaryItemTitle>
              Birinci yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı yazı
              yazı yazı yazı yazı yazı yazı
            </DetailSummaryItemTitle>
            <DetailSummaryItemSummary>
              "İkinci yazı" baskayazı baskayı baskay bas baska kayazı baskayazı
              baskayazı baskayazı baskayazı
            </DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default DetailScreen;
