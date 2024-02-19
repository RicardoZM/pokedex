import "../index.css";
import "atropos/css";

export const PokemonCard = (props) => {
  const { pokemon } = props;
  return (
      <div className="bg-slate-900 p-5 flex flex-col justify-center items-center relative rounded-md">
          <img
            className=""
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <h3 className="uppercase font-semibold tracking-wider text-amber-400">
            {pokemon.name}
          </h3>
          <div className="absolute text-5xl text-slate-500 top-0 right-3 font-bold">#{pokemon.id}</div>
          {/* {pokemon.types.map((type) => {
            return (
              <div className="inline-flex" key={type.type.name}>
                <h2
                  className={`${utilidades.devolverColor(
                    type.type.name
                  )} `}
                >
                  {type.type.name}
                </h2>
              </div>
            );
          })} */}
      </div>
  );
};
