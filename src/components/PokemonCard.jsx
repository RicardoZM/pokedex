export const PokemonCard = (props) => {
  const { pokemon } = props;
  return (
    <div className="rounded-md shadow-lg">
      <div className="flex items-center">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />

        <h3 className="uppercase">{pokemon.name}</h3>
        <div>#{pokemon.id}</div>
      </div>
    </div>
  );
};
