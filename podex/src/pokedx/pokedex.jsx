import Search from "../Search/Search";
import '../pokedx/pokedex.css'

function Pokedex(){
    return(
    <div className="pokdex-wrapper">
        <h1 id="pokemon-heading"> pokdex</h1>
            <Search/>
        </div>
       
    )
}
export default Pokedex;