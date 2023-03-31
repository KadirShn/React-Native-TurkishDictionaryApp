import React from "react";
import Text from "./text";
import Box from "./box";

export default function DetailSummaryItem({
  children,
  border,
  data,
  ...props
}) {
  const type = data?.ozelliklerListe && data.ozelliklerListe.map(_ => _.tam_adi) || ["isim"]
  return (
    <Box position="relative" px={28} py={20} bg="white" {...props}>
      {border && (
        <Box
          position="absolute"
          left={12}
          right={12}
          top={0}
          height={1.5}
          bg="light"
        />
      )}

      {/*Body*/}
      {data ? (
        <Box>
          <Box flexDirection="row">
            <Text color="textLight" ml={-14} mr={8}>
              {data.anlam_sira}
            </Text>
            <Text color="red">{type.join(", ")} </Text>
          </Box>
          <Box mt={8}>
            <Text fontWeight="600">{data.anlam}</Text>
            {data.orneklerListe &&
              data.orneklerListe.map((ornek) => {
                <Box key={ornek.ornek_id}>
                  <Text color="textLight" mx={6} mt={8} fontWeight="500">
                    {ornek.ornek}{' '}
                    <Text fontWeight="700" color="textLight">
                    {ornek.yazar_id != "0" && `- ${ornek.yazar[0].tam_adi}`}
                  </Text>
                  </Text>
                  
                </Box>;
              })}
          </Box>
        </Box>
      ) : (
        children
      )}
    </Box>
  );
}
