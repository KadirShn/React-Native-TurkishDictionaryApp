import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function FavoriteScreen(){
  return (
    <View style={styles.container}>
      <Text>FavoriteScreen</Text>
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#cbdef2'
    }
})