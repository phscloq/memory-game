'use client'
import Pokemon from "./pokemon";
import Score from "./score";
import { useState } from "react";
import Shuffle from "../utils/shuffle";
interface PokemonListProps {
    pokemonList:any
}


export default function Game({pokemonList}:PokemonListProps){
    const [score, setScore] = useState<number>(0);
    const [clicked, setClicked] = useState<string[]>([])
    const [maxScore, setMaxScore] = useState<number>(0);
    const [pokemons, setPokemons] = useState<{}[]>([])
    const handleScore=()=>{
      const newScore= score + 1;
      setScore(newScore);
      handleMaxScore(newScore);
    }
    const handleMaxScore=(newScore:number)=>{
        if(newScore>maxScore){
            setMaxScore(newScore);
        }
    }
 const handleClick=(name:any)=>{
    shuffledPokiList();
   const isClicked= clicked.find((poki)=>poki===name);
   if(isClicked){
    setScore(0);
    setClicked([]);
    return
   }
   else{
    setClicked([...clicked, name])
    handleScore();
   }
 }

 const shuffledPokiList=()=>{
    const shuffledPokemonList = Shuffle(pokemonList);
    setPokemons(shuffledPokemonList);
 }

return (
<div>
<Score 
      score={score}
      maxScore={maxScore}

      />
<Pokemon
score={score}
    pokemonList={pokemons.length>1 ? pokemons : pokemonList}
    handleClick={handleClick}
/>
</div>

)


}