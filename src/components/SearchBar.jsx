import { useState } from "react";
import { searchPokemon } from "../api/pokemonAPI.js";
import { PokemonCard } from "./PokemonCard.jsx";
import { SearchLogo } from "../icons/SearchLogo.jsx";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async () => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  return (
    <div className="">
      <div className="">
        {/* <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        > *
          * <path
            stroke="currentColor"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          /> 
        </svg>*/}
      </div>
      <input
        type="search"
        className=""
        placeholder="Búsqueda de pokemón..."
        onChange={onChange}
      />
      <button
        onClick={onClick}
        className=""
      >
        <SearchLogo />
      </button>
      <div>{pokemon && <PokemonCard pokemon={pokemon}></PokemonCard>}</div>
    </div>
  );
};
export default SearchBar;
