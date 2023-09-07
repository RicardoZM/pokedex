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
    <form className="flex justify-center p-7">
      <input
        type="search"
        className="shadow rounded border-0 p-3 w-full"
        placeholder="Búsqueda de porkemón..."
      />
      {/*      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg> */}
    </form>
  );
};
export default SearchBar;
