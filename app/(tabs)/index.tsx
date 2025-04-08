import { Link } from 'expo-router';
import React, { useCallback, useContext, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Button } from 'react-native';
import { fetch } from 'expo/fetch'
import { Image } from 'expo-image'
import { ProfileContext } from '@/components/contexts/ProfileContext';
import { Pokemon, PokemonContext } from '@/components/contexts/PokemonContext';

const HomePage = () => {

    const [pokemonName, setPokemonName] = useState('')
    const [results, setResults] = useState<any>(null)
    const { wallet, add_money } = useContext(ProfileContext)
    const { searchPokemon } = useContext(PokemonContext)

    const handleSearch = useCallback(async () => {
        if(pokemonName == '') return
        
        const pokemons = await searchPokemon(pokemonName)

        setResults(pokemons)

    }, [pokemonName])
    

    return (
        <View className='flex items-center justify-center h-screen'>
            <Text className='text-3xl font-bold text-red-600'>Rechechez un pokémon</Text>
            
            <TextInput 
                className="bg-white rounded-md border border-gray-300 px-10 py-3"
                placeholder='Entrez le nom du pokémon'
                onChangeText={setPokemonName}
            />
            <Pressable onPress={handleSearch} className='bg-red-600 font-bold px-10 py-3 rounded-md mt-5'>
                <Text className='text-white font-bold'>Rechercher</Text>
            </Pressable>
            {results != null &&
                results?.map((pokemon: Pokemon) => {
                    return <View key={pokemon.id}>
                        <Image source={{uri: pokemon?.image}} style={{height: 100, width: 100}} />
                        <Text className="text-2xl font-bold">{pokemon?.name} {pokemon?.id}</Text>
                        <Link href={`/(tabs)/pokemon/${pokemon?.id}`}>Voir la fiche</Link>
                    </View>
                })
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