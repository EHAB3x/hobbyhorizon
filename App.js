import * as Font from "expo-font"
import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './screens/start/Start';
import Login from './screens/login/Login';
import Splash from "./assets/splash.png"
import { globalStyles } from "./Global/globalStyles";
import Signup from "./screens/signup/Signup";
import Forget from "./screens/forget/Forget";
import NewPassword from "./screens/NewPassword/NewPassword";
import Verify from "./screens/verify/Verify";

const Stack = createNativeStackNavigator();

const getFont = ()=>  Font.loadAsync({
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
          <Stack.Navigator initialRouteName="start">
              <Stack.Screen 
                name="start" 
                component={Start} 
                options={{
                  title: 'login',
                  headerShown: false,
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
              <Stack.Screen 
                name="register"
                component={Signup} 
                options={{
                  title: '',
                  headerShown: false
                }}
              /> 
              <Stack.Screen 
                name="forget"
                component={Forget} 
                options={{
                  title: '',
                  headerShown: false
                }}
              /> 
              <Stack.Screen 
                name="newPassword"
                component={NewPassword} 
                options={{
                  title: '',
                  headerShown: false
                }}
              /> 
              <Stack.Screen 
                name="verify"
                component={Verify} 
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

