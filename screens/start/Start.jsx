import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import landing from "../../assets/landing.png"
import { globalStyles } from '../../Global/globalStyles'

const Start = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
        <Image source={landing}/>

        <TouchableOpacity style={[globalStyles.btn,{marginBottom:20}]} onPress={()=> navigation.navigate("login")}>
            <Text style={globalStyles.btnText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={globalStyles.btn} onPress={()=>navigation.navigate("register")}>
            <Text style={globalStyles.btnText}>Sign Up</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Start