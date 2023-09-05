export const PokemonCard = (props) => {
  const { pokemon } = props;
  return (
    <div className="rounded-md shadow-lg">
      <div className="relative items-center">
        <img
          className=""
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />

        <h3 className="uppercase absolute inset-y-0 right-5 top-10 ">
          {pokemon.name}
        </h3>
        <div className="absolute top-0 right-3">#{pokemon.id}</div>
      </div>
    </div>
  );
};
