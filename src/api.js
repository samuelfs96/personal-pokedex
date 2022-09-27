const API_URL = 'https://pokeapi.co/api/v2/'

const getPokemons = async () => {
    try {
      const response = await fetch(API_URL+'pokedex/2');
      if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`)
      }
      const data = await response.json();
      return data.pokemon_entries
    } catch (error) {
      console.error(`Could not get data: ${error}`)
    }
}

const getPokemon = async (id) => {
    try {
      const response = await fetch(API_URL+'pokemon/'+id);
      if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`)
      }
      const data = await response.json();
      return data
    } catch (error) {
      console.error(`Could not get data: ${error}`)
    }
}

const service = {
    getPokemons,
    getPokemon
}

export default service