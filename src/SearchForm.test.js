import React from 'react';
import { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import App from './App.js';
import PokemonDisplay from './components/PokemonDisplay';
import SearchForm from './components/SearchForm';

configure({ adapter: new Adapter() });

test('SearchForm render test', () => {
    let wrapper = render(<App/>);
    expext(wrapper.contains(<SearchForm/>));
})
