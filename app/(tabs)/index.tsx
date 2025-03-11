import { Link } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HomePage = () => {
    return (
        <View className='flex items-center justify-center h-screen'>
            <Text className='text-5xl font-bold text-red-500'>HOME PAGE</Text>

            <Link href="/pokemon">Page pokemon</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        color: "blue",
    }
})

export default HomePage;