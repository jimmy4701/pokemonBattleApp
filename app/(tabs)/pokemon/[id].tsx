import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { fetch } from 'expo/fetch';
import { Image } from 'expo-image';
const PokemonDetails = () => {

        const { id } = useLocalSearchParams();
    const [pokemon, setPokemon] = useState<any>(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokemon(data);
        };
        fetchPokemon();
    }, [id]);

    return (
        <View className="flex flex-col items-center h-screen">
            <View className="flex flex-row items-center justify-center mt-10">
                <View className="flex flex-row items-center justify-center border border-red-500 border-4 rounded-full p-5">
                    <Image 
                        style={{width: 100, height: 100}}
                        contentFit="contain"
                        transition={1000}
                        source={{ uri: pokemon?.sprites?.other?.['official-artwork']?.front_default?.toLowerCase() ?? pokemon?.sprites?.front_default?.toLowerCase() }} />
                </View>
            </View>
            <Text className="text-4xl font-bold text-red-700 mt-5">{pokemon?.name}</Text>
            <Text className="text-center text-gray-500 my-20 px-5">Ici on peut ajouter toutes les informations du pokémon, à définir</Text>
        </View>
    )
}

export default PokemonDetails;