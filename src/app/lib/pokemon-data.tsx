export default async function getPokemon(){
 const pokemons=[];
 for(let i=1; i<=12; i++){
  const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
  if(!res.ok){
      throw new Error('Failed to fetch the data');
  }
const pokemon = await res.json();
const name=pokemon.name;
const img=pokemon.sprites.other['official-artwork'].front_default
pokemons.push({'name':name, 'image':img});
 }
   
  return pokemons;
}