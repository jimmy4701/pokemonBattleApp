import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Button } from 'react-native';

const HomePage = () => {

    const [pokemonName, setPokemonName] = useState('')
    const [results, setResults] = useState(null)

    return (
        <View className='flex items-center justify-center h-screen'>
            <Text className='text-3xl font-bold text-red-600'>Rechechez un pokémon</Text>
            <TextInput 
                className="bg-white rounded-md border border-gray-300 px-10 py-3"
                placeholder='Entrez le nom du pokémon'
                onChangeText={setPokemonName}
            />
            <Pressable className='bg-red-600 font-bold px-10 py-3 rounded-md mt-5'>
                <Text className='text-white font-bold'>Rechercher</Text>
            </Pressable>
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