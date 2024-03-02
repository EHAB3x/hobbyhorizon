import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, ToastAndroid, Image, Keyboard, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../Global/globalStyles'
import { AntDesign, Entypo } from '@expo/vector-icons';
import FloatImg from "../../assets/newPassword.png"
import { forget } from '../forget/Forget';
const NewPassword = ({ navigation, route }) => {
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [check, setCheck]=useState(false)
    const [showPassword1, setShowPassword1] = useState(true);
    const [showPassword2, setShowPassword2] = useState(true);
    const {email} = route.params

    const checkInputs=()=>{
        if(password === '' || rePassword ===''){
            ToastAndroid.show("Pleas Fill All Inputs", ToastAndroid.SHORT);
        }else if(check === true){
            ToastAndroid.show("Password Isn't matched", ToastAndroid.SHORT);
        }
        else{
            ToastAndroid.show("✅ Password changed successfully", ToastAndroid.SHORT);
            navigation.navigate("verify", {email, password,from:"newPassword"});
        }
    }
  return(
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

      <View style={[ globalStyles.form, forget.form ]}>

        <View style={[globalStyles.floatImg, newPassword.floatImg]}>
          <Image source={FloatImg}/>
        </View>

        <Text style={globalStyles.title}>Create New Password</Text>
        <Text style={{color:globalStyles.primaryColor, textAlign:"center"}}>Your new password must be different from previously used passwords</Text>

        <View style={globalStyles.field}>
          <Text style={globalStyles.label}>Enter new password</Text>
          <TextInput 
            style={globalStyles.input}
            placeholder="*********"  
            secureTextEntry={showPassword1 ? true : false}
            onChangeText={(val)=> setPassword(val)}
            value={password}
          />
          {showPassword1
          ?(<Entypo name="eye" size={24} color={globalStyles.primaryColor}style={globalStyles.eye} onPress={()=> setShowPassword1(!showPassword1)}/>)
          :(<Entypo name="eye-with-line" size={24} color={globalStyles.primaryColor} style={globalStyles.eye} onPress={()=> setShowPassword1(!showPassword1)}/>)}
        </View>

        <View style={globalStyles.field}>
          <Text style={globalStyles.label}>Re-enter new password</Text>
          <TextInput 
            style={[globalStyles.input, check ? newPassword.unChecked :""]}
            placeholder="*********"  
            secureTextEntry={showPassword2 ? true : false}
            onChangeText={(val)=> setRePassword(val)}
            value={rePassword}
            onBlur={()=> password !== rePassword ? setCheck(true) : setCheck(false)}
          />
          {showPassword2
          ?(<Entypo name="eye" size={24} color={globalStyles.primaryColor}style={globalStyles.eye} onPress={()=> setShowPassword2(!showPassword2)}/>)
          :(<Entypo name="eye-with-line" size={24} color={globalStyles.primaryColor} style={globalStyles.eye} onPress={()=> setShowPassword2(!showPassword2)}/>)}
        </View>

        <TouchableOpacity style={[globalStyles.btn, forget.btn]} onPress={()=> checkInputs()} >
            <Text style={globalStyles.btnText}>
              Create
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableWithoutFeedback>
  )
}

export default NewPassword

const newPassword = StyleSheet.create({
    unChecked:{
        borderColor:"red",
    },
    floatImg:{
        top:-180,
        left:"20%",
    },
})