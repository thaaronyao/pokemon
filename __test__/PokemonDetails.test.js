import React from 'react';
import renderer from 'react-test-renderer';

import PokemonDetails from '../src/components/PokemonDetails';

test('render test', () => {
    const props = {   
            image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
            name: "Bulbasaur",
            maxCP: 951,
            maxHP: 1071,
            number: "001",
            id: "UG9rZW1vbjowMDE=",
            types: ["Grass", "Poison"],
            evolutions: []
        }
    const component = renderer.create(<PokemonDetails pokemon={props}/>);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})