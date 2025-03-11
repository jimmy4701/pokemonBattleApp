import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const HomePage = () => {
    return (
        <View>
            <Text>HOME PAGE</Text>

            <Link href="/pokemon">Page pokemon</Link>
        </View>
    )
}

export default HomePage;