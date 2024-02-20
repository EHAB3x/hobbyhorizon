import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
const About = () => {
  return (
    <View style={aboutStyles.container}>
        <Text>About Screen</Text>
    </View>
  )
}

const aboutStyles = StyleSheet.create({
    container:{
        padding: 24,
    }
})
export default About