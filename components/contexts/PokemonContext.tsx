import { createContext } from 'react'

interface Pokemon {
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
    searchPokemon: (name: string) => { return {} as Pokemon }
})