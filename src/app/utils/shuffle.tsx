export default function Shuffle(pokemonList: any[]){
    const temporaryArr = [];

while(pokemonList.length>=1){
    let index = Math.floor(Math.random()*12);
    if(pokemonList[index]!=undefined){
        temporaryArr.push(pokemonList[index])
        pokemonList.splice(index, 1);
    }
    
}
for(let i=0; i<12; i++){
    pokemonList.push(temporaryArr[i]);
}

return pokemonList;
}