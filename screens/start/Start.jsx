import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import landing from "../../assets/landing.png"
import { globalStyles } from '../../Global/globalStyles'
const Start = ({navigation}) => {
  const pressHandler = ()=>{
    navigation.navigate("login")
  }
  return (
    <View style={globalStyles.container}>
        <Image source={landing}/>
        <TouchableOpacity style={globalStyles.btn}  onPress={pressHandler}>
            <Text style={globalStyles.btnText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={globalStyles.btn}>
            <Text style={globalStyles.btnText}>Sign Up</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Start