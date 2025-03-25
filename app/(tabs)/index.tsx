import { Link } from 'expo-router';
import React, { useCallback, useContext, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Button } from 'react-native';
import { fetch } from 'expo/fetch'
import { Image } from 'expo-image'
import { ProfileContext } from '@/components/contexts/ProfileContext';

const HomePage = () => {

    const [pokemonName, setPokemonName] = useState('')
    const [results, setResults] = useState<any>(null)
    const { wallet } = useContext(ProfileContext)

    const handleSearch = useCallback(async () => {
        if(pokemonName == '') return
        const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon/' + pokemonName.toLocaleLowerCase(), {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(!response.ok) return
        
        const pokemon = await response.json()
        setResults(pokemon)

    }, [pokemonName])

    return (
        <View className='flex items-center justify-center h-screen'>
            <Text className='text-3xl font-bold text-red-600'>Rechechez un pokémon</Text>
            <Text>Mon wallet : {wallet}</Text>
            <TextInput 
                className="bg-white rounded-md border border-gray-300 px-10 py-3"
                placeholder='Entrez le nom du pokémon'
                onChangeText={setPokemonName}
            />
            <Pressable onPress={handleSearch} className='bg-red-600 font-bold px-10 py-3 rounded-md mt-5'>
                <Text className='text-white font-bold'>Rechercher</Text>
            </Pressable>
            {results != null &&
                <View>
                    <Image source={{uri: results?.image}} style={{height: 100, width: 100}} />
                    <Text className="text-2xl font-bold">{results?.name} {results?.id}</Text>
                    <Link href={`/(tabs)/pokemon/${results?.id}`}>Voir la fiche</Link>
                </View>
            }
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