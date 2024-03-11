import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, ToastAndroid, Image, Keyboard, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../Global/globalStyles'
import congrats from "../../assets/congrats.png"
const Congrats = ({ navigation, route }) => {
    const checkInputs = ()=>{
        navigation.navigate("verify",{email:route.params.email,from:"signup"})
    }
  return (
    <View style={[globalStyles.container, congratsStyles.container]}>
        <View></View>
        <View>
            <Image
                source={congrats}
                alt="Congrats_img"
                style={congratsStyles.img}
            />
            <Text style={[globalStyles.primaryTitle,{textAlign:"center",fontWeight:"bold"}]}>Your account is successfully created</Text>
        </View>

        <TouchableOpacity style={globalStyles.btn} onPress={()=> checkInputs()} >
                <Text style={globalStyles.btnText}>
                    Verify
                </Text>
        </TouchableOpacity>    
    </View>
  )
}

export default Congrats

const congratsStyles = StyleSheet.create({
    container:{
        justifyContent:"space-between",
        alignItems: "center",
        marginBottom: 40,
    },
    img:{
        marginLeft:"auto",
        marginRight:"auto",
        marginBottom:50
    }
})