import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, ToastAndroid, Image, Keyboard, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../Global/globalStyles'
import { AntDesign, Entypo } from '@expo/vector-icons';
import FloatImg from "../../assets/verify.png"
import { forget } from '../forget/Forget';

const Verify = ( {navigation, route}) => {
  const [inputs, setInputs] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const focusNextInput = (index) => {
    if (inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const focusPreviousInput = (index) => {
    if (inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (value.length === 1) {
      focusNextInput(index);
    } else if (value.length === 0) {
      focusPreviousInput(index);
    }
  };

  const checkInputs = () => {
    const code = inputs.join('');
    if(code.length < 4){
      ToastAndroid.show("Please Fill All Inputs", ToastAndroid.SHORT)
    }else{
      // navigation.navigate("congrats");
      // check code with backend 
    }
  };
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
            {inputs.map((value, index) => (
            <TextInput
            keyboardType="numeric"
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={verify.input}
              onChangeText={(text) => handleInputChange(index, text)}
              maxLength={1}
              value={value}
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
        top:-177,
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