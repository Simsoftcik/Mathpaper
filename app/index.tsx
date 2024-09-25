import { StatusBar } from "react-native";
import { Redirect } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [loaded, error] = useFonts({
    'ubuntu-bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
    'ubuntu-bolditalic': require('../assets/fonts/Ubuntu-BoldItalic.ttf'),
    'ubuntu-italic': require('../assets/fonts/Ubuntu-Italic.ttf'),
    'ubuntu-light': require('../assets/fonts/Ubuntu-Light.ttf'),
    'ubuntu-lightitalic': require('../assets/fonts/Ubuntu-LightItalic.ttf'),
    'ubuntu-medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
    'ubuntu-mediumitalic': require('../assets/fonts/Ubuntu-MediumItalic.ttf'),
    'ubuntu-regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  
  return (
    <Redirect href="/home" />
  );
}
