import { View, Text, FlatList } from 'react-native'
import React from 'react'
import DailyCard from '@/components/DailyCard'
import dailyWallpapersData from '../../assets/json/dailyWallpapers.json'

const daily: React.FC = () => {
  return (
    <View>
      <FlatList
        data={dailyWallpapersData}
        renderItem={({item}) => 
          <DailyCard id={item.id} title={item.title} subtitle={item.subtitle} imageKey={item.imageKey} description={item.description}/>
        }
      >

      </FlatList>
    </View>
  )
}
  
export default daily