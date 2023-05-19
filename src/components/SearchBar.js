import React from 'react'

export default function SearchBar() {
  return (
    <div className='search-bar'>
      
         <button type='submit' className='search-button'>
          Search
         </button>

        <input className='search-input' type='text'></input>
    </div>
  )
}
