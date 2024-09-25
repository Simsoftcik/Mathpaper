import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
// import FirstDailyTree from '../../assets/svg/firstDailyTree.svg'
import { IMAGES } from '@/constants/Images'
import CustomLink from '@/components/CustomLink';


const home: React.FC = () => {
  const router = useRouter();

  return (
    <View className='flex-1 flex-col justify-start items-center py-10'>
      {/* <FirstDailyTree width={100} height={100} /> */}
      <Image source={IMAGES['firstDailyTree']} style={{ width: '80%', height: 'auto', aspectRatio: 1 }} resizeMode="contain"></Image>
      <Text style={{fontFamily: 'ubuntu-bold', fontWeight: '600', fontSize: 24}} className='m-2'>Welcome to <Text className='text-primary1'>Mathpaper!</Text></Text>
      <Text style={{fontFamily: 'ubuntu-light', fontWeight: '400', fontSize: 16}} className='mx-4 text-justify'>Your lovely app that provides daily wallpapers inspired by mathematics, connected to the current date. All that to remind you that every day matters!</Text>
      <View className='w-full items-center mt-4'>
        <CustomLink path='/(tabs)/daily' message='Go to see daily wallpapers'/>
        <CustomLink path='/(tabs)/generate' message='Generate a wallpaper'/>
        <CustomLink path='/(tabs)/saved' message='See your saved wallpapers'/>
      </View>
    </View>
  )
}

export default home