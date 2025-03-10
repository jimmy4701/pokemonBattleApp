import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Platform, Button, TouchableOpacity } from 'react-native';
import Loader from '@/components/utils/Loader';
const Search = () => {

    const [pokemonName, setPokemonName] = useState('');
    const [searching, setSearching] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = () => {
        setSearching(true);
        setError(false);
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
        </View>
    )
}

export default Search;