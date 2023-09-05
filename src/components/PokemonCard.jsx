export const PokemonCard = (props) => {
  const { pokemon } = props;
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-6">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />

        <h3>{pokemon.name}</h3>
        <h3>#{pokemon.id}</h3>

        {/* <div>
          <div>
            {pokemon.types.map((type, id) => {
              return <div key={id}>{type.name}</div>;
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
};
