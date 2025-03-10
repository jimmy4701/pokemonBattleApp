import { Link } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = () => {
    return (
        <View>
            <Text>Details Screen</Text>
            <Link href="/">Go to Home</Link>
        </View>
    )
}

export default DetailsScreen;