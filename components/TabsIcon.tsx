import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

interface TabsIconProps {
    name: string,
    color: string,
    focused: boolean
}

const TabsIcon:React.FC<TabsIconProps> = ({name, color, focused}) => {
  return (
    <>
        {focused && <View className='absolute h-1 top-0 w-full bg-secondary1'></View>}
        <Icon name={name} size={24} color={color} />
    </>
  )
}

export default TabsIcon