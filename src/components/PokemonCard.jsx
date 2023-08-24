export const PokemonCard = (props) => {
  const { pokemon } = props;
  return (
    <div>
      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div>
        <div>
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div>
          <div>
            {pokemon.types.map((type, id) => {
              return <div key={id}>{type.name}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
