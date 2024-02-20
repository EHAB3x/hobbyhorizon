import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const Splash = () => {
  return (
    <View style={splash.container}>
        <Image 
            source={require('../assets/controller.png')}
            style={splash.image}
        />
        <Text>Loading...</Text>
    </View>
  )
}

const splash = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
    },
})
export default Splash