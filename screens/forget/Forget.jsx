import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, ToastAndroid, Image, Keyboard, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../Global/globalStyles'
import { AntDesign } from '@expo/vector-icons';
import FloatImg from "../../assets/forget.png"

const Forget = ({ navigation }) => {
    const [email, setEmail] = useState('');
    
    const mailRegex = /\b[\w!@#$%^&*-=+]+@\w+\.\w+\b/ig;

    const checkInputs = ()=>{
      if(email === ''){
        ToastAndroid.show("Please Fill All Inputs!", ToastAndroid.SHORT)
      }else if(email.match(mailRegex) === null){
        ToastAndroid.show("❌ Please enter a valid mail", ToastAndroid.SHORT) 
      }else{
        ToastAndroid.show("✅ Email sent successfully", ToastAndroid.SHORT) 
        navigation.navigate("newPassword", { email: email })
      }
    }
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

        <View style={[globalStyles.form, forget.form]}>

          <View style={[globalStyles.floatImg, forget.floatImg]}>
            <Image source={FloatImg}/>
          </View>

          <Text style={globalStyles.title}>Forget Password?</Text>

          <View style={globalStyles.field}>
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