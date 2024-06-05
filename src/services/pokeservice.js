import apipoke from "./Apipoke"


// export async function getAllPokemon() {
//     return await apipoke.get('/pokemon')
// }

// export async function getPokemonById(id) {
//     return await apipoke.get(`/pokemon/${id}`)
// }

export async function getAllPokemon() {
    try {
      const response = await apipoke.get('/pokemon');
      const pokemons = response.data;
    //   console.log('Pokemons:', pokemons);
      return pokemons;
    } catch (error) {
    //   console.error('Error fetching Pokémon:', error);
      return [];
    }
  }
