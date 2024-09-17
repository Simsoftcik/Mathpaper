import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
        }}
        >
            <Tabs.Screen
                name="daily"
                options={{
                headerShown: false
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