import React from "react";
import Text from "./text";
import Box from "./box";
import { CardContainer, CardSummary, CardTitle } from "./card";
import LoaderText from "./LoaderText";
import { Close } from "./icons/Close";
import { Check } from "./icons/Check";

export function SuggestionCard({ title, onPress, data, ...props }) {
  return (
    <Box {...props}>
      <Text color="textLight">{title}</Text>
      <CardContainer mt={10} onPress={onPress}>
        {data ? (
          <>
            <CardTitle>{data.madde}</CardTitle>
            <CardSummary>{data.anlam}</CardSummary>
          </>
        ) : (
          <Box>
            <LoaderText />
            <LoaderText width={250} mt={10} />
          </Box>
        )}
      </CardContainer>
    </Box>
  );
}
export function SuggestionCardDY({ title, onPress, data, ...props }) {
  return (
    <Box {...props}>
      <Text color="textLight">{title}</Text>
      <CardContainer mt={10} onPress={onPress}>
        {data ? (
          <>
            <CardTitle fontSize={14} fontWeight="500">( : ) Uzun okunan hecenin gösterilişi</CardTitle>
            <Box left={26} mt={12}>
            <Box flexDirection="row">
              <Close color="red"/>
              <CardSummary fontSize={16} color="red" mt={-2}>{data.yanliskelime}</CardSummary>
            </Box>
            <Box mt={4} flexDirection="row">
              <Check color="green"/>
              <CardSummary fontSize={16} color="green" mt={-2}>{data.dogrukelime}</CardSummary>
            </Box>
            </Box>
            
            
          </>
        ) : (
          <Box>
            <LoaderText width={250} />
            <LoaderText mt={10} />
            <LoaderText mt={10} />
          </Box>
        )}
      </CardContainer>
    </Box>
  );
}

