import { View, Text, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { IMAGES } from '@/constants/Images'

interface DailyCardProps {
  id: number,
  title: string,
  subtitle: string,
  description: string,
  imageKey: string
}

const DailyCard: React.FC<DailyCardProps> = ({ id, title, subtitle, description, imageKey }) => {
  const wallpaper: any = IMAGES[imageKey]
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
      <Image source={wallpaper}></Image>
      <Text>{description}</Text>
    </TouchableOpacity>
  )
}

export default DailyCard