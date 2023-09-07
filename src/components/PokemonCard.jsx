import Atropos from "atropos/react";
import "../index.css";
import "atropos/css";
import * as utilidades from "../utils/utils.js";

export const PokemonCard = (props) => {
  const { pokemon } = props;
  return (
    <Atropos shadow={false} className="my-atropos">
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
          {pokemon.types.map((type) => {
            return (
              <div className="inline-grid grid-cols-2" key={type.type.name}>
                <h2
                  className={`${utilidades.devolverColor(
                    type.type.name
                  )} text-white py-2 px-4 rounded-full `}
                >
                  {type.type.name}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </Atropos>
  );
};
