import React from 'react';

const PokemonDisplay = ({pokemon, getPokemonNum}) => {

    return (
        <div className="pokemonDisplay">
            <p>{pokemon.name}</p>
            <div className="placement">
                <img className="thumbnail" src={pokemon.image}/>
                <br/>
                <button onClick={() => getPokemonNum(pokemon.number)}>More Information</button>
            </div>
        </div>
    )
}

export default PokemonDisplay;