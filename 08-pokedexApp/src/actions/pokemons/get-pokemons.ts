import { pokeApi } from "../../config/api/pokeApi";
import type { Pokemon } from "../../domain/entities/pokemon";
import type { PokeAPIPaginatedResponse, PokeAPIPokemon } from "../../infrastucture/interfaces/pokeapi.interfaces";


export const getPokemons = async (page: number, limit: 20): Promise<Pokemon[]> => {

    try {
        
        const url = `/pokemon?offset=${page * 10}&limit=${limit}`;
        const { data } = await pokeApi.get<PokeAPIPaginatedResponse>(url);

        const pokemonPromises = data.results.map((pokemon) => {
            return pokeApi.get<PokeAPIPokemon>(pokemon.url);
        });

        const pokeApiPokemons =  await Promise.all(pokemonPromises);
        

    } catch (error) {
        throw new Error('Error getting pokemons')
    }
}