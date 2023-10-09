
import React, { useState } from 'react';
import Cards from "../components/Cards";
import Search from "../components/Search";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <div className="search">
        <Search onSearch={handleSearch} filteredResults={filteredResults} />
      </div>
      <div className="card">
        <Cards searchTerm={searchTerm} setFilteredResults={setFilteredResults} />
      </div>
    </div>
  );
};

export default Home;
