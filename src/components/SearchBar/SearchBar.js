import React from 'react'
import { ReactComponent as SearchIcon  } from '../../assets/icons/search_icon.svg'
import './searchBar.css'
import { ConstantText } from '../../constants/constants'

const SearchBar = () => {
  const placeholderText = ConstantText.SearchPlaceHolder

  return (
    <div className='search'>
        <div className='searchLabel'>
            <p>{ConstantText.FilterName1}</p>
        </div>
        <div className='searchBox'>
            <input className='inputBar' type="text" placeholder={placeholderText}></input>
            <div className='searchIcon'>
                <SearchIcon className='icon'></SearchIcon>  
            </div>        
        </div>
    </div>
  )
}

export default SearchBar