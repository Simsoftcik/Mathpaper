import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
// import { Icon } from 'react-native-vector-icons/FontAwesome';

const TabsLayout: React.FC = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
        }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                    // tabBarIcon: ({ color, focused }) => (
                    //     <Icon name="home"/>
                    // ),
                }}
            />
            <Tabs.Screen
                name="daily"
                options={{
                headerShown: false,
                // tabBarIcon: ({ color, focused }) => (
                //     <Icon name="home"/>
                // ),
                }}
            />
            <Tabs.Screen
                name="generate"
                options={{
                headerShown: false
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                headerShown: false
                }}
            />
    </Tabs>
  )
}

export default TabsLayout