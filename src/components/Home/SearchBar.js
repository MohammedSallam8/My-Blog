import React from 'react'
import './SearchBar.css'

const SearchBar = ({value, handleSearchKey , clearSearch ,formSupmit }) => {
  return (
    <div className='searchBar-wrap'>
      <form onSubmit={formSupmit}>
        <input type="text" onChange={handleSearchKey} placeholder='Search By Category' value={value} />
        {value && <span onClick={clearSearch}>X</span>}
        <button>Go</button>
      </form>
    </div>
  )
}

export default SearchBar
