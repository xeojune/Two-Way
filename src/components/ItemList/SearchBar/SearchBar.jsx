import React from 'react'
import './SearchBar.css'

function SearchBar({ handleInput }) {
  return (
    <form className='search-wrapper' onSubmit={handleInput}>
        <input 
            className='search-input'
            name='search' 
            type='search' 
            placeholder='Search and Enter' 
            onFocus={e => {e.target.placeholder = ''}} 
            onBlur={e => {e.target.placeholder = 'Search...'}} 
            autoComplete='off'
        />
    </form>
  )
}

export default SearchBar