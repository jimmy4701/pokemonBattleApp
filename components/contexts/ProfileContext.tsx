import { createContext, ReactNode, useState } from 'react'

export enum ChestRarity {
    COMMON = "COMMON",
    UNCOMMON = "UNCOMMON",
    RARE = "RARE",
    EPIC = "EPIC",
    LEGENDARY = "LEGENDARY"
}

type Chest = {
    price: number,
    rarity: ChestRarity,
}



export const ProfileContext = createContext({
    wallet: 1000,
    chests: [],
    caught_pokemons: [],
    add_money: (money: number) => {},
    substract_money: (money: number) => {}
})


export const ProfileContextProvider = ({children}:{children: ReactNode[]}) => {
    const [wallet, setWallet] = useState(1000)
    const [caught_pokemons, setCaughtPokemons] = useState([])
    const [chests, setChests] = useState([])
    const add_money = (money: number) => {
        setWallet(wallet + money)
    }

    const substract_money = (money: number) => {
        setWallet(wallet - money)
    }
    
    return(
        <ProfileContext.Provider value={{
            wallet,
            caught_pokemons,
            add_money,
            substract_money
        }}>
            {children}
        </ProfileContext.Provider>
    )
}

