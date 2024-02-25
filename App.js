import * as Font from "expo-font"
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './screens/start/Start';
import Login from './screens/login/Login';
import Splash from "./assets/splash.png"
import { globalStyles } from "./Global/globalStyles";

const Stack = createNativeStackNavigator();

const getFont = (check)=>  Font.loadAsync({
  "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
  "inter-light": require("./assets/fonts/Inter-Light.ttf"),
  "inter-semiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  "inter-Bold": require("./assets/fonts/Inter-Bold.ttf")
});

export default function App(){
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    async function loadFonts() {
      await getFont();
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  return(
    fontsLoaded
    ?(  
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen 
                name="home" 
                component={Start} 
                options={{
                  title: '',
                  headerShown: false
              }}
            /> 
              <Stack.Screen 
                name="login" 
                component={Login} 
                options={{
                  title: '',
                  headerShown: false
              }}
            /> 
          </Stack.Navigator>
      </NavigationContainer>)
    
    :<Image 
        source={Splash}
        alt="splash"
        style={globalStyles.img}
    />
  )
}

