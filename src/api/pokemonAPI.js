export const searchPokemon = async (pokemon) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {}
};

//TODO Revisar porque esta devolviendo pordefecto 20 registros en total
export const getPokemons = async (limit = 10, offset = 0) => {
  const URL = `https://pokeapi.co/api/v2/pokemon?limit${limit}&offset${offset}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {}
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
};
