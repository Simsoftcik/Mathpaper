import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import dailyWallpapersData from '../../assets/json/dailyWallpapers.json'

const Wallpaper = () => {
  const { id } = useLocalSearchParams();
  const wallpaperData = dailyWallpapersData.find(wallpaper => wallpaper.id === Number(id));

  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}

export default Wallpaper