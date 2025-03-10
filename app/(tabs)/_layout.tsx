import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                headerShown: false,
                title: 'Home',  
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} />
            <Tabs.Screen name="details" options={{
                headerShown: false,
                title: 'Details',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="magnify" color={color} size={size} />
                ),
            }} />
            <Tabs.Screen name="settings" options={{
                headerShown: false,
                title: 'Settings',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="cog" color={color} size={size} />
                ),
            }} />
        </Tabs>
    )
}

export default TabsLayout;