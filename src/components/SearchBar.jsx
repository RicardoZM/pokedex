import { useState } from "react";
import { searchPokemon } from "../api/pokemonAPI.js";
import { PokemonCard } from "./PokemonCard.jsx";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  return (
    <div className="flex justify-center p-7">
      <div>
        <input
          type="search"
          className="shadow rounded border-0 p-3 w-full"
          placeholder="Búsqueda de porkemón..."
          onChange={onChange}
        />
      </div>
      <div>
        <button onClick={onClick}>Buscar</button>
      </div>
      <div>{pokemon && <PokemonCard pokemon={pokemon}></PokemonCard>}</div>
    </div>
  );
};
export default SearchBar;
