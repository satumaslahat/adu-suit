import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Bangers_400Regular, useFonts } from "@expo-google-fonts/bangers";
import {
  OpenSans_400Regular,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

export const useLoadFonts = () => {
  const [fontsLoaded, fontsError] = useFonts({
    Bangers_400Regular,
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  return { fontsLoaded, fontsError };
};
