import Image from "next/image";
import { PokemonResponse, SimplePokemon } from "./interface";
import { PokemonGrid } from './components/PokemonGrid';
import { notFound } from "next/navigation";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(res => res.json())
  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))

  //throw notFound()
  return pokemons
}



export default async function PokemonsPage() {

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2 text-center font-bold">Listado de Pokemon <small>Estatico</small></span>

      <PokemonGrid pokemons={pokemons} />

    </div>
  )
}