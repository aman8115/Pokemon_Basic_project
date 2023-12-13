function PokemonPrint({name,image}){
return(
    <>
    <div>
        {name}
        <div>
       <img src={image} alt="pokemonName"/>
        </div>
    </div>
    </>
)
    
}
export default PokemonPrint;