import { createContext, ReactNode, useEffect, useState } from 'react'
import { ChestRarity } from './ProfileContext';


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
    apiPreEvolution: string | Prevolution;
    apiResistancesWithAbilities: any[]; // À typer si nécessaire
  }

  interface Prevolution {
    name: string,
    pokedexIdd: number
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

  const legendary_pokemons_ids = [
      144,      
      145,      
      146,      
      150,      
      151,      
      243,      
      244,      
      245,      
      249,      
      250,      
      377,      
      378,      
      379,      
      380,      
      381,      
      382,      
      383,      
      384,      
      385,      
      386,      
  ]

export const PokemonContext = createContext({
    searchPokemon: async (name: string) => { return [] as Pokemon[] },
    searchPokemonByRarity: (rarity: ChestRarity) => { return {} as Pokemon }
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

    const searchPokemonByRarity = (rarity: ChestRarity) => {

        let found_pokemons : Pokemon[] = []

        switch (rarity) {
            case ChestRarity.COMMON:
                found_pokemons =  pokemons.filter(o => o.apiPreEvolution == "none" && o.apiEvolutions.length > 0)
                break;
            case ChestRarity.UNCOMMON:
                found_pokemons = pokemons.filter(o => o.apiPreEvolution != "none" && o.apiEvolutions.length > 0)
                break;
            case ChestRarity.RARE:
                found_pokemons = pokemons.filter(o => o.apiPreEvolution != "none" && o.apiEvolutions.length == 0)
                break;
            case ChestRarity.EPIC:
                found_pokemons = pokemons.filter(o => o.apiPreEvolution == "none" && o.apiEvolutions.length == 0)
                break;
            case ChestRarity.LEGENDARY:
                found_pokemons = pokemons.filter(o => legendary_pokemons_ids.includes(o.id))
                break;
            default:
                console.error("Rarity not recognized...")
                throw "Rarity not found"
                break;
        }

        return found_pokemons[0]
    }

    return <PokemonContext.Provider value={{
        searchPokemon,
        searchPokemonByRarity
    }}>
        {children}
    </PokemonContext.Provider>
}