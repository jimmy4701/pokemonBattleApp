import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen = () => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Link className="bg-gray-500 p-2 rounded-md active:bg-red-600" href="/details">Go to Details</Link>
        </View>
    )
}

export default HomeScreen;