import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
const Home = () => {
  return (
    <View style={homeStyles.container}>
        <Text style={homeStyles.title}>Home Screen</Text>
    </View>
  )
}

const homeStyles = StyleSheet.create({
    container:{
        padding: 24,
    },
    title:{
        fontFamily:'nunito-bold',
        fontSize: 18,
    }
})
export default Home