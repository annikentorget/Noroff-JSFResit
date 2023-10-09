import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Search({ onSearch, filteredResults }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);
    onSearch(inputValue);
    setShowDropdown(inputValue.trim() !== '');
  };


  return (
    <div className="search">
      <input className='search__bar'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {showDropdown && filteredResults && (
        <div className="search__dropdown">
            <ul>
                {filteredResults.map((pokemon, index) => (
                    <li key={index}>
                        <Link className='search__link' to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
