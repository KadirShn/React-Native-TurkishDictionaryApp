import React, { useState,useEffect } from "react";
import Box from "./box";
import Text from "./text";
import Input from "./input";
import { Search } from "./icons/Search";
import { Close } from "./icons/Close";
import theme from "../utils/theme";
import Button from "./button";
import { Keyboard } from "react-native";

function SearchBox({onChangeFocus}) {
  const [isFocus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    onChangeFocus(isFocus)
  },[isFocus,onChangeFocus])


  const onCancel = () => {
    setFocus(false)
    Keyboard.dismiss()
  };
  const onClear = () => {
    setValue('')
  };

  return (
    <Box  flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
      <Input
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.1,
          shadowRadius: 24,

          elevation: 4,
        }}
        
        bg="white"
        height={52}
        color="textDark"
        borderWidth={1}
        borderColor={isFocus ? "pink" : "transparent"}
        placeholder="Türkçe Sözlük'te Ara"
        placeholderTextColor="textMedium"
        pl={52}
        borderRadius="normal"
        value={value}
        onFocus={() => setFocus(true)}
        onChangeText={text => setValue(text)}
      />
      { value.length > 0 && (
        <Button onPress={onClear} position="absolute" right={16} top={14}>
        <Close color={theme.colors.textDark} />
      </Button>
      )}
      <Button position="absolute" left={16} top={14}>
        <Search color={theme.colors.textMedium} />
      </Button>
      </Box>
      {isFocus && (
        <Button onPress={onCancel} px={15} height={52}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  );
}
export default SearchBox;
