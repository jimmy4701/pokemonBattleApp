import { createContext, ReactNode, useEffect, useState } from 'react'


export interface Pokemon {
    id: number;
    pokedexId: number;
    name: string;
    image: string;
    sprite: string;
    slug: string;
    stats: PokemonStats;
    apiTypes: PokemonType[];
    apiGeneration: number;
    apiResistances: PokemonResistance[];
    resistanceModifyingAbilitiesForApi: any[]; // À typer si nécessaire
    apiEvolutions: PokemonEvolution[];
    apiPreEvolution: string;
    apiResistancesWithAbilities: any[]; // À typer si nécessaire
  }
  
  interface PokemonStats {
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  }
  
  interface PokemonType {
    name: string;
    image: string;
  }
  
  interface PokemonResistance {
    name: string;
    damage_multiplier: number;
    damage_relation: 'neutral' | 'resistant' | 'vulnerable' | 'twice_resistant';
  }
  
  interface PokemonEvolution {
    name: string;
    pokedexId: number;
  }

export const PokemonContext = createContext({
    searchPokemon: async (name: string) => { return [] as Pokemon[] }
})

export const PokemonContextProvider = ({children}: {children: ReactNode[] | ReactNode}) => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
        const pokemons_data = require('../../assets/data/pokemon_base.json')
        setPokemons(pokemons_data)
    }, [])

    const searchPokemon = async (name: string) => {
        
        const found_pokemons = pokemons.filter(o => o.name.includes(name) || o.name.includes(name.toLowerCase()))

        return found_pokemons || [] as Pokemon[]
    }

    return <PokemonContext.Provider value={{
        searchPokemon
    }}>
        {children}
    </PokemonContext.Provider>
}