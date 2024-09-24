import { View, Text, Touchable, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import { IMAGES } from '@/constants/Images'
import { useRouter } from 'expo-router';

interface DailyCardProps {
  id: number,
  title: string,
  subtitle: string,
  description: string,
  imageKey: string
}

const DailyCard: React.FC<DailyCardProps> = ({ id, title, subtitle, description, imageKey }) => {
  const wallpaper: any = IMAGES[imageKey]
  const router = useRouter();
  const data = true;

  return (
    <TouchableOpacity onPress={(id) => {
      router.push(`/wallpapers/${id}`);
    }}
    className='bg-white m-6 rounded-3xl overflow-hidden'>
      <Text className='p-2 text-2xl'  style={{fontFamily: 'ubuntu-medium', fontWeight: '400'}}>{title}</Text>
      <Text  className='text-lg' style={{fontFamily: 'ubuntu-light', fontWeight: '400'}}>{subtitle}</Text>
      <Image source={wallpaper}></Image>
      <Text>{description}</Text>
    </TouchableOpacity>
  )
}

export default DailyCard