import './pokemonPrint.css'
function PokemonPrint({name,image}){
return(
    <>
    <div className="pokemon">
        <div className='pokemon_name' >{name}</div>
        <div>
       <img src={image} alt="pokemonName " title ="Pokemon" className='pokemon_image'/>
        </div>
    </div>
    </>
)
    
}
export default PokemonPrint;