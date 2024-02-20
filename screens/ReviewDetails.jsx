import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
const ReviewDetails = () => {
  return (
    <View style={reviewDetails.container}>
        <Text>Review Details Screen</Text>
    </View>
  )
}

const reviewDetails = StyleSheet.create({
    container:{
        padding: 24,
    }
})
export default ReviewDetails