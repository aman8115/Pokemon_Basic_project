import { useEffect, useState, } from "react";
import axios from 'axios'
import PokemonPrint from "./pokemon1";

function PokemonList(){
    const [pokemonList,setpokemonList] = useState([])
    const [ isLoadding,setLodding] = useState(true)
    async function downloadPokemon(){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
        console.log(response)
        const pokemonResults = response.data.results;
        const pokemonResultpromise = pokemonResults.map((pokemon)=>axios.get(pokemon.url))
        const pokemonData = await axios.all(pokemonResultpromise)
        console.log(pokemonData)
       const res = pokemonData.map((pokeDate)=>{
        const pokemon = pokeDate.data
        return{
            id:pokemon.id,
            name: pokemon.name,
            image:(pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
           type:pokemon.type
        }
       })
       console.log(res)
       setpokemonList(res)
        setLodding(false)
    }
    useEffect(()=>{
        downloadPokemon()
    },[]);
    
    return (
        <div>
            PokemonList
            {(isLoadding)?'Loading':pokemonList.map((p)=> <PokemonPrint name={p.name} image={p.image}key={p.id}/>)}
          
        </div>
    )
        
    

}
export default PokemonList;