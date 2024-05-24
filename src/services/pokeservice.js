import apipoke from "./Apipoke"


export async function getAllPokemon() {
    return await apipoke.get('/pokemon')
}

export async function getPokemonById(id) {
    return await apipoke.get(`/pokemon/${id}`)
}
