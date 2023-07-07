
import Image from 'next/image'
import Pokemon from './components/pokemon'
import getPokemon from './lib/pokemon-data'
import Score from './components/score';
import Shuffle from './utils/shuffle';
import Game from './components/game';
export default async function Home() {
  const pokemonList = await getPokemon();

  Shuffle({pokemonList});
 
  return (

    <main className="flex min-h-screen flex-col items-center justify-center px-60">
      <h1 className='text-6xl text-center mb-16'>Catch Your Pokemon</h1>
      <Score />
<Pokemon 
    pokemonList={pokemonList}

/>
    </main>
  )
}
