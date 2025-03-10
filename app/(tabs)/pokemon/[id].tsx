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
        <View className="flex flex-col items-center justify-center h-screen">
            <Text>Pokemon Details</Text>
            <Text>{pokemon?.name}</Text>
            <Image source={{ uri: pokemon?.sprites.front_default }} />
        </View>
    )
}

export default PokemonDetails;