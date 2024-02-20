import { useState, useEffect } from 'react';
import Home from './screens/Home';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Splash from './screens/Splash';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFontsAndHideSplashScreen() {
      try {
        await SplashScreen.preventAutoHideAsync(); // Prevent auto-hiding of the splash screen
        await getFonts();
        await SplashScreen.hideAsync();
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    }

    loadFontsAndHideSplashScreen();
  }, []);

  if (!fontsLoaded) {
    return <Splash />; // Render nothing while fonts are loading and splash screen is visible
  }

  return <Home />;
}
