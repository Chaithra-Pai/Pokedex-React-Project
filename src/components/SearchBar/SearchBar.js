import React from 'react'
import { ReactComponent as SearchIcon  } from '../../assets/icons/search_icon.svg'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='search'>
        <div className='searchLabel'>
            <p>Search by</p>
        </div>
        <div className='searchBox'>
            <input className='inputBar' type="text" placeholder="Name or Number"></input>
            <div className='searchIcon'>
                <SearchIcon className='icon'></SearchIcon>  
            </div>        
        </div>
    </div>
  )
}

export default SearchBar