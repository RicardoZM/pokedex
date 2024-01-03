export const searchPokemon = async (pokemon) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {}
};

export const getPokemons = async (limit = 25, offset = 0) => {
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

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
