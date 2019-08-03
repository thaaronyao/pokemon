import React from 'react';

const SearchForm = ({ handleChange, queryData, number}) => {
    return (
        <div className="formControl">
            <h1>Pokedex</h1>
            <p>How many pokemons do you want to search for?</p>
            <form>
              <input 
              id="number" 
              type="text" 
              placeholder="numbers" 
              onChange={handleChange} 
              value={number}/>
              <input type="submit" 
              onClick={queryData} 
              value="Search"/>
            </form>
          </div>
    )
}

export default SearchForm;