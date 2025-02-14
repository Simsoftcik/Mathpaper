import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Icon from 'react-native-vector-icons/FontAwesome';
import TabsIcon from '@/components/TabsIcon';

const TabsLayout: React.FC = () => {
  return (
    <>   
    <StatusBar 
        backgroundColor="transparent" 
        barStyle="dark-content" // or "light-content" depending on your design
        translucent={true} 
      />
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#5e53ff',
	        tabBarInactiveTintColor: '#b5b3d1',
        }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabsIcon name="home" color={color} focused={focused}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="daily"
                options={{
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabsIcon name="calendar" color={color} focused={focused}/>
                ),
                }}
            />
            <Tabs.Screen
                name="generate"
                options={{
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabsIcon name="plus" color={color} focused={focused}/>
                ),
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabsIcon name="bookmark" color={color} focused={focused}/>
                ),
                }}
            />
            {/* <Tabs.Screen
                name="[wallpaper]"
                options={{
                    href: null
                }}
            /> */}
    </Tabs>
    </>

  )
}

export default TabsLayout