import { View, Text, Image } from 'react-native'
import React from 'react'
// import FirstDailyTree from '../../assets/svg/firstDailyTree.svg'
import { IMAGES } from '@/constants/Images'
const home: React.FC = () => {
  return (
    <View className='flex-1 flex-col justify-start items-center py-10'>
      {/* <FirstDailyTree width={100} height={100} /> */}
      <Image source={IMAGES['firstDailyTree']} style={{ width: '80%', height: 'auto', aspectRatio: 1 }} resizeMode="contain"></Image>
      <Text>Welcome to Mathpaper!</Text>
      <Text>Your lovely app that provides daily wallpapers inspired by mathematics, connected to the current date. All that to remind you that every day matters!</Text>
    </View>
  )
}

export default home