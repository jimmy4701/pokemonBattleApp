import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "red",
        }}>
            <Tabs.Screen name='index' options={{
                headerShown: false,
                title: "Recherche",
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name='magnify' color={color} size={size} /> 
            }} />
            <Tabs.Screen name='pokemon/[id]' options={{
                href: null,
                headerShown: false
            }} />
        </Tabs>
    )
}

export default TabsLayout;