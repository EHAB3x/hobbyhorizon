import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { globalStyles } from '../styles/global'

const Splash = () => {
  return (
    <View style={globalStyles.container}>
        <Image 
            source={require('../assets/controller.png')}
            style={splash.image}
        />
        <Text>Loading...</Text>
    </View>
  )
}

const splash = StyleSheet.create({
    image: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
    },
})
export default Splash