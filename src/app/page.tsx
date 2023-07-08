
import getPokemon from './lib/pokemon-data'

import Game from './components/game';


export default async function Home() {
 

  const pokemonList = await getPokemon(); 
  return (

    <main className="flex min-h-screen flex-col items-center justify-center px-60">
      <h1 className='text-6xl text-center mb-16 sm:mb-2'>Catch Your Pokemon</h1>
    <Game 
    pokemonList={pokemonList}
    />
    </main>
  )
}
