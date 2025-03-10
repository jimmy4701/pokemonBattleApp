import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: 'red',
            }}
        >
            <Tabs.Screen name="index" options={{
                headerShown: false,
                title: 'Home',  
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} />
            <Tabs.Screen name="search" options={{
                headerShown: false,
                title: 'Search',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="magnify" color={color} size={size} />
                ),
            }} />
            <Tabs.Screen name="pokemon/[id]" options={{
                href: null, // This will hide the tab from the tab bar
            }} />
        </Tabs>
    )
}

export default TabsLayout;