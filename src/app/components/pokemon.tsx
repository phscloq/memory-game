import PokemonCard from "./pokemon-card";
import Score from "./score";
import { useState } from "react";
export default function Pokemon({pokemonList, score, handleClick}:{pokemonList:any, score:number, handleClick:any}){

return (
    <div className="flex flex-wrap justify-center gap-2">
 {pokemonList.map((pokemon:any)=>{
return(
    <PokemonCard  name={pokemon.name}
    image={pokemon.image}
    score={score}
    onClick={handleClick}
    />
)
  })}

    </div>
)
}

