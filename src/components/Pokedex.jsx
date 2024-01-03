import Pagination from "./Pagination";
import { PokemonCard } from "./PokemonCard";

const Pokedex = (props) => {
  const { pokemons, page, setPage, total, loading } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };

  return (
    <div>
      <div className="header">
        <h1>Pokedex </h1>
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pokemons.map((pokemon, id) => {
            return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
          })}
        </div>
      )}
    </div>
  );
};
export default Pokedex;
