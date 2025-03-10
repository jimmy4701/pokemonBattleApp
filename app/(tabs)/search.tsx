import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Platform, Button, TouchableOpacity } from 'react-native';
import Loader from '@/components/utils/Loader';
import { fetch } from 'expo/fetch';
import { Image } from 'expo-image';
import { Link } from 'expo-router';

const Search = () => {

    const [pokemonName, setPokemonName] = useState('');
    const [searching, setSearching] = useState(false);
    const [error, setError] = useState(false);

    const [results, setResults] = useState<any>(null);

    const handleSearch = async () => {
        if (!pokemonName.trim()) return;
        
        console.log("SEARCHING FOR", pokemonName.toLowerCase());
        setSearching(true);
        setError(false);
        
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Pokemon not found');
            }
            const data = await response.json();
            setResults(data);
        } catch (err) {
            console.log(err);
            setError(true);
            setResults(null);
        } finally {
            setSearching(false);
        }
    }

    return (
        <View className="flex flex-col items-center justify-center h-screen gap-4">
            <Text className="text-2xl font-bold">Recherchez un pokémon</Text>
                <TextInput 
                    className="border border-gray-300 rounded-md p-2 w-2/3" 
                    placeholder="Rechercher un pokémon"
                    value={pokemonName}
                    onChangeText={setPokemonName}
                />
                {searching ? <Loader /> : (
                    <TouchableOpacity className="bg-red-700 p-4 w-40 items-center justify-center flex-row rounded-md" onPress={handleSearch}>
                        <Text className="text-white">Rechercher</Text>
                    </TouchableOpacity>
                )}
                {error && (
                    <Text className="text-red-500">Pokemon non trouvé</Text>
                )}
                {results && !error && (
                    <View className="items-center">
                        <Text className="text-xl capitalize">{results.name}</Text>
                        {results.sprites?.front_default && (
                            <View>
                                <Image 
                                    style={{width: 200, height: 200}}
                                    source={{uri: results?.sprites?.other?.['official-artwork']?.front_default?.toLowerCase() ?? results?.sprites?.front_default?.toLowerCase()}}
                                    transition={1000}
                                    contentFit="contain"
                                />
                            </View>
                        )}
                        <Link href={`/pokemon/${results?.id}`} className="bg-gray-700 p-4 items-center justify-center flex-row rounded-md">
                            <Text className="text-white">Voir la fiche du pokémon</Text>
                        </Link>
                    </View>
                )}
        </View>
    )
}

export default Search;