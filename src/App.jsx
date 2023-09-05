import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import "./index.css";
import { getPokemonData, getPokemons } from "./api/pokemonAPI";
import Pokedex from "./components/Pokedex";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      console.log(results);
      setPokemons(results);
    } catch (error) {}
  };
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="font-link container mx-auto">
      <SearchBar></SearchBar>

      <Pokedex pokemons={pokemons}></Pokedex>
    </div>
  );
}

export default App;
