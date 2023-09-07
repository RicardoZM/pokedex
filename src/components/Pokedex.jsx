import { PokemonCard } from "./PokemonCard";

const Pokedex = (props) => {
  const { pokemons } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {pokemons.map((pokemon, id) => {
        return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
      })}
    </div>
  );
};
export default Pokedex;
