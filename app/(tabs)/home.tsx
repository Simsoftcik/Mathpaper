import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
// import FirstDailyTree from '../../assets/svg/firstDailyTree.svg'
import { IMAGES } from '@/constants/Images'
import Icon from '@expo/vector-icons/AntDesign';

const home: React.FC = () => {
  return (
    <View className='flex-1 flex-col justify-start items-center py-10'>
      {/* <FirstDailyTree width={100} height={100} /> */}
      <Image source={IMAGES['firstDailyTree']} style={{ width: '80%', height: 'auto', aspectRatio: 1 }} resizeMode="contain"></Image>
      <Text style={{fontFamily: 'ubuntu-bold', fontWeight: '600', fontSize: 24}} className='m-2'>Welcome to <Text className='text-primary1'>Mathpaper!</Text></Text>
      <Text style={{fontFamily: 'ubuntu-light', fontWeight: '400', fontSize: 16}} className='mx-4'>Your lovely app that provides daily wallpapers inspired by mathematics, connected to the current date. All that to remind you that every day matters!</Text>
      <View>
        <Link href="/(tabs)/daily" style={{fontFamily: 'ubuntu-medium', fontWeight: '400', fontSize: 16}}  className='m-2 my-3 p-2 border rounded-xl border-neutral1 text-neutral1 flex flex-col items-center'><Text className=''>Go to see daily wallpapers </Text><Icon name="rightcircleo" size={20} color="#8c8c8c"/></Link>
        <Link href="/(tabs)/generate" style={{fontFamily: 'ubuntu-medium', fontWeight: '400', fontSize: 16}}  className='m-2 my-3 p-2 border rounded-xl border-neutral1 text-neutral1'><Text>Generate a wallpaper </Text><Icon name="rightcircleo" size={20} color="#8c8c8c"/></Link>
        <Link href="/(tabs)/saved" style={{fontFamily: 'ubuntu-medium', fontWeight: '400', fontSize: 16}}  className='m-2 my-3 p-2 border rounded-xl border-neutral1 text-neutral1'><Text>Check your saved wallpapers </Text><Icon name="rightcircleo" size={20} color="#8c8c8c"/></Link>
      </View>
    </View>
  )
}

export default home