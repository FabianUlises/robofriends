import React from 'react';

const SearchBar = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input type="text" placeholder='search for robot' className='pa3 ba b--green bg-lightest-blue' onChange={searchChange} />
    </div>
  )
}

export default SearchBar;