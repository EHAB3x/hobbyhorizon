import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, ToastAndroid, Image, Keyboard, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../Global/globalStyles'
import { FontAwesome , AntDesign, Entypo  } from '@expo/vector-icons';
import FloatImg from "../../assets/signin.png";
const Login = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logMethods=[
    {name:"Facebook",svg: <FontAwesome name="facebook" size={24} color={globalStyles.primaryColor} />},
    {name:"Icloud",svg: <AntDesign name="apple1" size={24} color={globalStyles.primaryColor}/>},
    {name:"Google",svg: <AntDesign name="google" size={24} color={globalStyles.primaryColor}/>},
  ];

  const checkInputs=()=>{
    if (email ==='' || password === '') {
      ToastAndroid.show("Please Fill All Inputs!", ToastAndroid.SHORT);
    }else if(email === "ehabmah6969@gmail.com"){
      ToastAndroid.show(`Welcome,${email}`, ToastAndroid.SHORT);
      navigation.navigate("home")
    }else{
      ToastAndroid.show("Wrong Email or Password", ToastAndroid.SHORT);
      setEmail('')
      setPassword('')
    }
  }
  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <View style={[globalStyles.container, globalStyles.formContainer]}>
        <AntDesign
          name="leftcircle"
          size={45}
          color={globalStyles.primaryColor}
          style={globalStyles.back}
          onPress={()=>{
            navigation.goBack()
          }}
        />

        <View style={globalStyles.form}>

          <View style={[globalStyles.floatImg, loginStyles.floatImg]}>
            <Image source={FloatImg}/>
          </View>

          <Text style={globalStyles.title}>Hi, Welcome Back!</Text>

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

          <View style={globalStyles.field}>
            <Text style={globalStyles.label}>Password</Text>
            <TextInput 
              style={globalStyles.input}
              placeholder="*********"  
              secureTextEntry={showPassword ? true : false}
              onChangeText={(val)=> setPassword(val)}
              value={password}
            />
            {showPassword
            ?(<Entypo name="eye" size={24} color={globalStyles.primaryColor}style={globalStyles.eye} onPress={()=> setShowPassword(!showPassword)}/>)
            :(<Entypo name="eye-with-line" size={24} color={globalStyles.primaryColor} style={globalStyles.eye} onPress={()=> setShowPassword(!showPassword)}/>)}
          </View>

          <Text style={globalStyles.primaryTitle} onPress={()=> navigation.navigate("forget")}>Forget Password?</Text>

          <TouchableOpacity style={globalStyles.btn} onPress={()=> checkInputs()}>
              <Text style={globalStyles.btnText}>
                Sign In
              </Text>
          </TouchableOpacity>

          <View>

            <Text style={{textAlign:"center"}}>Or sign in with</Text>

            <View  style={globalStyles.logIcons}>
              {logMethods.map(({name, svg})=>(
                <Text key={name}>{svg}</Text>
              ))}
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Login

export const loginStyles = StyleSheet.create({
  floatImg:{
    top:-270
  }
})