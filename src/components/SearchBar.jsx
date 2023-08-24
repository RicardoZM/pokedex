import { useState } from "react";
import { searchPokemon } from "../api/pokemonAPI.js";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  return (
    <div>
      <div>
        <input placeholder="Busqueda de pokemon" onChange={onChange} />
      </div>
      <div>
        <button onClick={onClick}>Buscar</button>
      </div>
      <div>{pokemon && <div>Nombre: {pokemon.name}</div>}</div>
    </div>
  );
};
export default SearchBar;
