import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoxCenter from '../component/boxCenter'
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
    <BoxCenter  as={SafeAreaView} flex={1} bg="white">
      <Text textAling="center">HistoryScreen</Text>
    </BoxCenter>
  )
}

export default HistoryScreen
