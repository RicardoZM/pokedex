import { PokemonCard } from "./PokemonCard";

const Pokedex = (props) => {
  const { pokemons } = props;
  return (
    <div>
      <div>
        <h1>Pokedex</h1>
        <div>Pagination</div>
      </div>
      <div className="">
        {pokemons.map((pokemon, id) => {
          return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
};
export default Pokedex;
