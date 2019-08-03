import React from 'react';
import gql from "graphql-tag";
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import './App.css';
import SearchForm from './components/SearchForm';
import PokemonDisplay from './components/PokemonDisplay';
import PokemonDetails from './components/PokemonDetails';


const client = new ApolloClient({
  link: createHttpLink({uri: "https://pokemon-samdavies.stylindex.now.sh",}),
  cache: new InMemoryCache()
});

class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      pokemons: [],
      number: '',
      pokemonNum: ''
    };
    this.queryData = this.queryData.bind(this);
    this.buildQuery = this.buildQuery.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getPokemonNum = this.getPokemonNum.bind(this);
    this.resetPokemonNum = this.resetPokemonNum.bind(this)
  }

  getPokemonNum(num){
    this.setState({pokemonNum: num})
  }

  resetPokemonNum(){
    this.setState({pokemonNum: ""})
  }

  queryData(e){
    e.preventDefault();
    let GET_POKEMON = this.buildQuery();
    client.query({query:GET_POKEMON})
    .then(res => {
      this.setState(
        {pokemons: res.data.pokemons,
        pokemonNum: ""}
        ); 
      console.log('res',res.data.pokemons)})
    .catch(err => console.error(err));
  };

  buildQuery(){
    const num = this.state.number;
    this.setState({number: ''});
    return gql`
    {
      pokemons(first: ${num}) {
        id
        name
        number
        maxCP
        maxHP
        image 
        types
        evolutions {
          id
          name
          image
          number
        }
      }
    }
  `;
  };

  handleChange(e){
    e.preventDefault();
    const num = e.target.value;
    this.setState({number: num})
  }

  render(){
    return (
      <div className="App">
        <SearchForm 
        handleChange={this.handleChange} 
        number={this.state.number} 
        queryData={this.queryData}/>
          
        {this.state.pokemonNum.length? 
          <header className="App-header">
            <div className="pokemons">
              <PokemonDetails 
              resetPokemonNum={this.resetPokemonNum}
              getPokemonNum={this.getPokemonNum}
              pokemon={this.state.pokemons[Number(this.state.pokemonNum) - 1]}/>
            </div>
          </header> : 
          <header className="App-header">
            <div className="pokemons">
              {this.state.pokemons.map(pokemon => (
                  <PokemonDisplay 
                  key={pokemon.id}
                  id={pokemon.id}
                  getPokemonNum={this.getPokemonNum}
                  pokemon={pokemon}/>
                  )
                )}
            </div>
          </header>
        }
          
      </div>
    );
  }

}

export default App;
