import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen = () => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Link href="/details">Go to Details</Link>
        </View>
    )
}

export default HomeScreen;