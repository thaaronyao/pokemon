import React from 'react';
import renderer from 'react-test-renderer';

import PokemonDisplay from '../src/components/PokemonDisplay';

test('render test', () => {
    const props = {   
            image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
            name: "Bulbasaur"
        }
    const component = renderer.create(<PokemonDisplay pokemon={props}/>);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
