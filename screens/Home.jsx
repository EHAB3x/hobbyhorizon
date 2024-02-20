import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
const Home = () => {
  return (
    <View style={homeStyles.container}>
        <Text>Home Screen</Text>
    </View>
  )
}

const homeStyles = StyleSheet.create({
    container:{
        padding: 24,
    }
})
export default Home