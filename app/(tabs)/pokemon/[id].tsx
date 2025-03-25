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
    }, [])
    
    return (
        <ScrollView>
            <Image source={{uri: pokemon?.image}} style={{height: 100, width: 100}} />
            <Text>{pokemon?.name}</Text>
            <Text>{JSON.stringify(pokemon, null, 3)}</Text>
            <Link href="/">Retourner à l'accueil</Link>
        </ScrollView>
    )
}

export default Pokemon;