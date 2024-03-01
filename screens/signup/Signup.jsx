import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, ToastAndroid, Image, Keyboard, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../Global/globalStyles'
import { AntDesign, Entypo  } from '@expo/vector-icons';
import FloatImg from "../../assets/signup.png"
import { loginStyles } from '../login/Login';
const Signup = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const checkInputs=()=>{
    if (email === ''|| password === '' || userName === '') {
      ToastAndroid.show("Please Fill All Inputs!", ToastAndroid.SHORT);
    }else if(email === "ehabmah6969@gmail.com" ){
      ToastAndroid.show(`Welcome,${email}`, ToastAndroid.SHORT);
      // navigation.navigate("home")
    }else{
      ToastAndroid.show("Wrong Email or Password", ToastAndroid.SHORT);
      setEmail('')
      setPassword('')
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
          onPress={()=> navigation.goBack()}
        />

        <View style={loginStyles.form}>

          <View style={signUpStyles.floatImg}>
            <Image source={FloatImg}/>
          </View>

          <Text style={globalStyles.title}>Create New Account</Text>

          <View style={loginStyles.field}>
            <Text style={globalStyles.label}>Username</Text>
            <TextInput 
              style={globalStyles.input}
              placeholder="username"
              keyboardType="default"
              onChangeText={(val)=> setUserName(val)}
              value={userName}
            />
          </View>
          
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
            :(<Entypo name="eye-with-line" size={24} color={globalStyles.primaryColor} style={loginStyles.eye} onPress={()=> setShowPassword(!showPassword)}/>)
            }
          </View>

          <TouchableOpacity style={globalStyles.btn} onPress={()=> checkInputs()}>
              <Text style={globalStyles.btnText}>
                Sign Up
              </Text>
          </TouchableOpacity>
          <View style={signUpStyles.log}>
            <Text style={{textAlign:"center"}}>Have an account?</Text>
            <TouchableWithoutFeedback style={signUpStyles.span} onPress={()=>navigation.navigate("login")}>
                <Text  style={globalStyles.primaryTitle}>Sign in</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Signup

const signUpStyles = StyleSheet.create({
  floatImg:{
    position:"absolute",
    top:-178,
    left:"40%",
  },
  log:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
  }
})