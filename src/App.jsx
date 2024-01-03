import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import "./index.css";
import { getPokemonData, getPokemons } from "./api/pokemonAPI";
import Pokedex from "./components/Pokedex";
import "atropos/css";
import { Logo } from "./components/Logo";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
    } catch (error) {}
  };
  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div className="font-link container mx-auto">
      <Logo></Logo>
      <SearchBar />
      <Pokedex
        loading={loading}
        pokemons={pokemons}
        page={page}
        setPage={setPage}
        total={total}
      />
    </div>
  );
}

export default App;
