import { Stack } from "expo-router";
import { Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1">
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        <Stack.Screen name="wallpapers/[wallpaper]" options={{headerShown: false}}/>
        <Stack.Screen name="wallpapers/index" options={{headerShown: false}}/>
      </Stack>
    </SafeAreaView>
  );
}
