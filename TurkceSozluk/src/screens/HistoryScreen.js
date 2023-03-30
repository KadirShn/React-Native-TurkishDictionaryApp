import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '../component/box'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

function HistoryScreen(){

  useFocusEffect(
    React.useCallback(() => {
    StatusBar.setBarStyle('dark-content');
    Platform.OS === 'android' && StatusBar.setBackgroundColor('white')

  },[])
  );



  return (
    <Box as={SafeAreaView} flex={1} bg="white">
      <Text>HistoryScreen</Text>
    </Box>
  )
}

export default HistoryScreen
