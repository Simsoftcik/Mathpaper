import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
// import FirstDailyTree from '../../assets/svg/firstDailyTree.svg'
import { IMAGES } from '@/constants/Images'
import Icon from '@expo/vector-icons/AntDesign';


const home: React.FC = () => {
  const router = useRouter();

  return (
    <View className='flex-1 flex-col justify-start items-center py-10'>
      {/* <FirstDailyTree width={100} height={100} /> */}
      <Image source={IMAGES['firstDailyTree']} style={{ width: '80%', height: 'auto', aspectRatio: 1 }} resizeMode="contain"></Image>
      <Text style={{fontFamily: 'ubuntu-bold', fontWeight: '600', fontSize: 24}} className='m-2'>Welcome to <Text className='text-primary1'>Mathpaper!</Text></Text>
      <Text style={{fontFamily: 'ubuntu-light', fontWeight: '400', fontSize: 16}} className='mx-4'>Your lovely app that provides daily wallpapers inspired by mathematics, connected to the current date. All that to remind you that every day matters!</Text>
      <View className='w-full items-center mt-4'>
        <TouchableOpacity activeOpacity={0.4} onPress={() => router.replace('/(tabs)/daily')}><View className='flex-row w-10/12 justify-between m-2 my-3 p-2 border rounded-xl border-neutral1'><Text style={{fontFamily: 'ubuntu-medium', fontWeight: '400', fontSize: 16}} className='text-neutral1'>Go to see daily wallpapers</Text><Text><Icon name="rightcircleo" size={20} color="#737272"/></Text></View></TouchableOpacity>
        <TouchableOpacity activeOpacity={0.4} onPress={() => router.replace('/(tabs)/generate')}><View className='flex-row w-10/12 justify-between m-2 my-3 p-2 border rounded-xl border-neutral1'><Text style={{fontFamily: 'ubuntu-medium', fontWeight: '400', fontSize: 16}} className='text-neutral1'>Generate a wallpaper</Text><Text><Icon name="rightcircleo" size={20} color="#737272"/></Text></View></TouchableOpacity>
        <TouchableOpacity activeOpacity={0.4} onPress={() => router.replace('/(tabs)/saved')}><View className='flex-row w-10/12 justify-between m-2 my-3 p-2 border rounded-xl border-neutral1'><Text style={{fontFamily: 'ubuntu-medium', fontWeight: '400', fontSize: 16}} className='text-neutral1'>See your saved wallpapers</Text><Text><Icon name="rightcircleo" size={20} color="#737272"/></Text></View></TouchableOpacity>
      </View>
    </View>
  )
}

export default home