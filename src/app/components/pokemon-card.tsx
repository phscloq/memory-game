import Image from "next/image"
export default function PokemonCard({name, image, score, onClick}:{name:string, image:any, score:number, onClick:any}){


return (
<div className=" bg-slate-500 rounded-md hover:bg-slate-600 hover:scale-105 text-center cursor-pointer"
onClick={()=>onClick(name)}
>
    
   { <Image 
        alt={`Picture of pokemon ${name}`}
        src={image}
        width={200}
        height={200}
    />}
    <h1 className=" uppercase text-2xl tracking-wider font-extrabold text-slate-800 ">{name}</h1>
</div>
)
}