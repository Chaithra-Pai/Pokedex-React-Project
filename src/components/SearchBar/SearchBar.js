import React, { useState } from 'react'
import { ReactComponent as SearchIcon  } from '../../assets/icons/search_icon.svg'
import './searchBar.css'
import { ConstantText } from '../../constants/constants'
import { searchPokemonList } from '../../redux/actionContainer/actionCreators/pokemonListActionCreator'
import { useDispatch } from 'react-redux'

const SearchBar = () => {
  const [searchVal,setSearchVal] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (value) => {
		dispatch(searchPokemonList(value));
	};

  return (
    <div className='search'>
        <div className='searchLabel'>
            <p>{ConstantText.SearchBoxName}</p>
        </div>

        <div className='searchBox'>
            <input 
                className='inputBar' 
                type="text" 
                placeholder={ConstantText.SearchPlaceHolder}
                value={searchVal}
                onChange={(e) => {
                  setSearchVal(e.target.value);
                  handleSearch(e.target.value);
                }}
            />
            <div className='searchIcon'>
                <SearchIcon className='icon'></SearchIcon>  
            </div>        
        </div>
    </div>
  )
}

export default SearchBar