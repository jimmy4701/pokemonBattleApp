import { Link } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const Pokemon = () => {
    return (
        <View>
            <Text>ICI DETAILS D'UN POKEMON</Text>


            <Link href="/">Retourner à l'accueil</Link>
        </View>
    )
}

export default Pokemon;