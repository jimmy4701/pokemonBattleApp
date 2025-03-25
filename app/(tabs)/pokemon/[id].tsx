import { Image } from 'expo-image';
import { Link, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

const Pokemon = () => {

    const { id } = useLocalSearchParams()
    const [pokemon, setPokemon] = useState<any>(null)

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon/' + id, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setPokemon(data)

        }
        fetchPokemon()
    }, [id])
    
    return (
        <View className='flex flex-col items-center mt-20'>
            <View className='bg-white rounded-full p-10 flex items-center justify-center'>
                <Image source={{uri: pokemon?.image}} style={{height: 100, width: 100}} />
            </View>
            <Text className='text-3xl font-bold'>{pokemon?.name}</Text>
            <Text>{pokemon?.apiPreEvolution?.pokedexIdd}</Text>
            <View className='flex flex-row w-full gap-3 p-3'>
                {pokemon?.apiPreEvolution?.pokedexIdd &&
                    <Link className='rounded-lg p-5 bg-white shadow-lg flex-1 text-center' href={`/(tabs)/pokemon/${pokemon?.apiPreEvolution?.pokedexIdd}`}>Voir la pré-évolution</Link>
                }
                {pokemon?.apiEvolutions?.length > 0 && 
                    <Link className='rounded-lg p-5 bg-white shadow-lg flex-1 text-center'  href={`/(tabs)/pokemon/${pokemon?.apiEvolutions[0].pokedexId}`}>Voir l'évolution</Link>
                }
            </View>
        </View>
    )
}

export default Pokemon;