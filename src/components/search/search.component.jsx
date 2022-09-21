import React, { useState } from 'react';

import './search.styles.css';

const Search = ({ onSearchSubmit }) => {
  const [location, setLocation] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(location);
    setLocation('');
  };

  return (
    <div className='form-container'>
      <form onSubmit={onSubmit} className='form-control'>
        <input
          type='text'
          placeholder='Search for location'
          className='input-search'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className='btn'>Search</button>
      </form>
    </div>
  );
};

export default Search;
