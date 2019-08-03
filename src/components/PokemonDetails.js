import React from 'react';
import PokemonDisplay from './PokemonDisplay';

const PokemonDetails = ({pokemon, resetPokemonNum, getPokemonNum}) => {
    return(
        <div >
            <div className="details">
                {/* <h2>{pokemon.name}</h2> */}
                <table>
                    <caption>{pokemon.name}</caption>
                    <tr>
                        <th>Max HP</th>
                        <th>Max CP</th>
                        <th>number</th>
                        <th>types</th>
                        <th>id</th>
                    </tr>
                    <tr>
                        <td>{pokemon.maxHP}</td>
                        <td>{pokemon.maxCP}</td>
                        <td>{pokemon.number}</td>
                        <td>{pokemon.types.join(' ')}</td>
                        <td>{pokemon.id}</td>
                    </tr>
                </table>
                <img src={pokemon.image} />
            </div>
            <div className="pokemons">
                <p>Evolution: </p>
                {pokemon.evolutions? 
                pokemon.evolutions.map(pokemon => (
                    <PokemonDisplay 
                    getPokemonNum={getPokemonNum} 
                    pokemon={pokemon}/>
                )): <p>No More Evolution</p>}
            </div>
            <button onClick={resetPokemonNum}>Go Back to Home</button>
        </div>
    )
}

export default PokemonDetails;