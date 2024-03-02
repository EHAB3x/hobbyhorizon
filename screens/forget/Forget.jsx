import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, ToastAndroid, Image, Keyboard, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../Global/globalStyles'
import { AntDesign, Entypo } from '@expo/vector-icons';
import FloatImg from "../../assets/forget.png"
import { loginStyles } from '../login/Login';

const Forget = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const checkInputs = ()=>{
      if(email === ''){
        ToastAndroid.show("Please Fill All Inputs!", ToastAndroid.SHORT)
      }else{
        ToastAndroid.show("✅ Email sent successfully", ToastAndroid.SHORT) 
        navigation.navigate("newPassword", { email: email })
      }
    }
  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <View style={[globalStyles.container, loginStyles.loginContainer]}>
        <AntDesign
          name="leftcircle"
          size={45}
          color={globalStyles.primaryColor}
          style={loginStyles.back}
          onPress={()=>{
            navigation.goBack()
          }}
        />

        <View style={[loginStyles.form, forget.form]}>

          <View style={forget.floatImg}>
            <Image source={FloatImg}/>
          </View>

          <Text style={globalStyles.title}>Forget Password?</Text>

          <View style={loginStyles.field}>
            <Text style={globalStyles.label}>Email</Text>
            <TextInput 
              style={globalStyles.input}
              placeholder="example@gmail.com"  
              keyboardType="email-address"
              onChangeText={(val)=> setEmail(val)}
              value={email}
            />
          </View>

          <TouchableOpacity style={[globalStyles.btn, forget.btn]} onPress={()=> checkInputs()}>
              <Text style={globalStyles.btnText}>
                Send
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Forget

export const forget = StyleSheet.create({
    floatImg:{
        position:"absolute",
        top:-179,
        left:"40%",
    },
    form:{
      height:500
    },
    btn:{
      marginTop:"auto"
    }
})