import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, ToastAndroid, Image, Keyboard, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../Global/globalStyles'
import { AntDesign, Entypo } from '@expo/vector-icons';
import FloatImg from "../../assets/forget.png"
import { loginStyles } from '../login/Login';

const NewPassword = () => {
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
          <Text style={globalStyles.label}>Password</Text>
          <TextInput 
            style={globalStyles.input}
            placeholder="*********"  
            secureTextEntry={showPassword ? true : false}
            onChangeText={(val)=> setPassword(val)}
            value={password}
          />
          {showPassword
          ?(<Entypo name="eye" size={24} color={globalStyles.primaryColor}style={loginStyles.eye} onPress={()=> setShowPassword(!showPassword)}/>)
          :(<Entypo name="eye-with-line" size={24} color={globalStyles.primaryColor} style={loginStyles.eye} onPress={()=> setShowPassword(!showPassword)}/>)}
        </View>

        <TouchableOpacity style={[globalStyles.btn, forget.btn]} onPress={()=> checkInputs()}>
            <Text style={globalStyles.btnText}>
              Sign In
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableWithoutFeedback>
  )
}

export default NewPassword