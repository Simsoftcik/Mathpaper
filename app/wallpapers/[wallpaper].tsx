import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Wallpaper = () => {
  const { variable } = useLocalSearchParams();

  return (
    <View>
      <Text>Wallpaper</Text>
    </View>
  )
}

export default Wallpaper