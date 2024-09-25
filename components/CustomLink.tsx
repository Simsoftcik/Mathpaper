import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useRouter, Href } from 'expo-router';
import Icon from '@expo/vector-icons/AntDesign';

interface CustomLinkProps {
    path: Href,
    message: string
}

const CustomLink:React.FC<CustomLinkProps> = ({path, message}) => {
  const router = useRouter();
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={() => router.replace(path)}>
        <View className='flex-row w-10/12 justify-between m-2 my-3 p-2 border rounded-xl border-neutral1'>
            <Text style={{fontFamily: 'ubuntu-medium', fontWeight: '400', fontSize: 16}} className='text-neutral1'>{message}</Text>
            <Text>
                <Icon name="rightcircleo" size={20} color="#737272"/>
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default CustomLink