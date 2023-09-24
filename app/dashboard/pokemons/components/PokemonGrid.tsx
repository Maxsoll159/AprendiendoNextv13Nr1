import { SimplePokemon } from "../interface"
import { CardPokemon } from "./CardPokemon"

interface Props{
    pokemons: SimplePokemon[]
}


export const PokemonGrid = ({pokemons}:Props) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {pokemons.map((pokemon) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
            ))}
        </div>
    )
}
