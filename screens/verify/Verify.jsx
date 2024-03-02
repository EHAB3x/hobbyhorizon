import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, ToastAndroid, Image, Keyboard, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../Global/globalStyles'
import { AntDesign, Entypo } from '@expo/vector-icons';
import FloatImg from "../../assets/newPassword.png"
import { forget } from '../forget/Forget';

const Verify = ( {navigation, route}) => {
  const inputs = useRef([]);

  const focusNextInput = (index) => {
    if (inputs.current[index + 1]) {
      inputs.current[index + 1].focus();
    }
  };

  const focusPreviousInput = (index) => {
    if (inputs.current[index - 1]) {
      inputs.current[index - 1].focus();
    }
  };

    console.log(route.params.email);
  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <View style={[globalStyles.container, globalStyles.loginContainer]}>
      <AntDesign
        name="leftcircle"
        size={45}
        color={globalStyles.primaryColor}
        style={globalStyles.back}
        onPress={()=>{
          navigation.goBack()
        }}
      />

      <View style={[ globalStyles.form, forget.form, {justifyContent:"space-between"}]}>

        <View style={[globalStyles.floatImg, verify.floatImg]}>
          <Image source={FloatImg}/>
        </View>

        <Text style={globalStyles.title}>Verify code</Text>

        <Text style={{color:globalStyles.primaryColor, textAlign:"center"}}>
            Please enter the code we mailed you:
            <Text style={{color:"black", fontWeight:"bold"}}>{route.params.email}</Text>
        </Text>

        <View>
            <View style={verify.field}>
              {[0, 1, 2, 3].map((index) => (
                  <TextInput
                    keyboardType="numeric"
                    key={index}
                    ref={(input) => (inputs.current[index] = input)}
                    style={verify.input}
                    onChangeText={(text) => {
                      if (text.length === 1) {
                        focusNextInput(index);
                      } else if (text.length === 0) {
                        focusPreviousInput(index);
                      }
                    }}
                    maxLength={1}
                  />
                ))}
            </View>
            <TouchableOpacity style={[globalStyles.btn, forget.btn,{marginTop:25}]} onPress={()=> checkInputs()} >
                <Text style={globalStyles.btnText}>
                Verify
                </Text>
            </TouchableOpacity>

        </View>
        <View>
            <Text style={{textAlign:"center"}}>Didn't receive a code</Text>
            <View>
                <Text style={{textAlign:"center", color:globalStyles.primaryColor, fontWeight:"bold"}}>Resend Again?</Text>
            </View>
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
  )
}

export default Verify

const verify = StyleSheet.create({
    floatImg:{
        top:-180,
        left:"20%",
    },
    field:{
        flexDirection:"row",
        justifyContent:"space-between",
        gap:10,
    },
    input:{
        backgroundColor:"white",
        borderRadius:10,
        width:50,
        height:50,
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold"
    }
})