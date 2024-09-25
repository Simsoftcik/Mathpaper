import { View, Text, Pressable, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { IMAGES } from '@/constants/Images'
import { useRouter } from 'expo-router';
import { trimString } from '@/logic/util';
import Icon from '@expo/vector-icons/AntDesign';

interface DailyCardProps {
  id: number,
  title: string,
  subtitle: string,
  description: string,
  imageKey: string
}

const DailyCard: React.FC<DailyCardProps> = ({ id, title, subtitle, description, imageKey }) => {
  const wallpaperShowcase: any = IMAGES[imageKey]

  const router = useRouter();

  const [showMore, setShowMore] = useState(false);

  return (
    <View
    className='bg-white m-6 my-3 rounded-3xl overflow-hidden'>
      <Text className={id % 2 == 0 ? 'p-2 text-2xl text-primary1' : 'p-2 text-2xl text-primary2'}  style={{fontFamily: 'ubuntu-medium', fontWeight: '400'}}>{title}</Text>
      <View className='flex-row'>
        <View className={id % 2 == 0 ? 'h-[2px] w-10/12 bg-secondary1' : 'h-[2px] w-10/12 bg-secondary2'}></View>
        <View className={id % 2 == 0 ? 'h-[2px] w-2/12 bg-tetriary1' : 'h-[2px] w-2/12 bg-tetriary2'}></View>
      </View>
      <Text className='p-2 text-lg text-neutral1 leading-6' style={{fontFamily: 'ubuntu-light', fontWeight: '400'}}>{subtitle}</Text>
      <Image source={wallpaperShowcase} resizeMode='cover' className='h-[200px]'></Image>
      <Text className='p-2 text-justify' style={{fontFamily: 'ubuntu-regular'}}>{showMore ? description : trimString(description)}</Text>
      <Pressable onPressIn={() => {setShowMore(!showMore)}} >
        <Text className='text-lg p-2 pt-0 text-neutral1' style={{fontFamily: 'ubuntu-light', fontWeight: '400'}}>{showMore ? 'Show less' : 'Show more'} <Icon name="doubleright" color="#737272"/></Text>
      </Pressable>
      <TouchableOpacity onPress={() => {
        router.push(`/wallpapers/${id}`);
      }}
      className={ id % 2 == 0 ? 'bg-primary1 m-2 rounded-2xl' : 'bg-primary2 m-2 rounded-2xl'}
      activeOpacity={0.5}>
        <Text style={{fontFamily: 'ubuntu-bold', fontWeight: '400'}} className='text-white text-xl m-1 text-center'>View wallpaper</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DailyCard