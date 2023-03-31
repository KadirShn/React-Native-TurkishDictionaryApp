import React from "react";
import { FlatList } from "react-native";
import Box from "./box";
import { SimpleCardContainer,SimpleCardTitle } from "./simple-card";
import { useNavigation } from "@react-navigation/native";

function SearchHistoryList({data}){
  const navigation = useNavigation();
    return(
        <FlatList
            style={{marginTop:1,paddingHorizontal:18,paddingVertical:16}}
              data={data}
              renderItem={({ item }) => (
                <Box my={6}>
                  <SimpleCardContainer onPress={() =>
                navigation.navigate("Detail", {
                  title: item.title,
                })
              } >
                    <SimpleCardTitle>{item.title}</SimpleCardTitle>
                  </SimpleCardContainer>
                </Box>
              )}
              keyExtractor={(item) => item.id}
            />
    )

}
export default SearchHistoryList;