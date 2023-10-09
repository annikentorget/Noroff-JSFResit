import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cards({ searchTerm, setFilteredResults }) {
  const [pokemonList, setPokemonList] = useState([]);

  const apiKey = 'd428212c-b4f8-4b7c-8d25-2e50b1ff5e44';

  useEffect(() => {
    const apiUrl = `https://api.pokemontcg.io/v2/cards?apiKey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (!searchTerm) {
        setFilteredResults([]);
        return;
    }

    const filteredResults = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(filteredResults);
  }, [searchTerm, pokemonList, setFilteredResults]);


  return (
    <div>
      <div className="card">
        {pokemonList.map((pokemon, index) => (
          <div key={index} className="card__content">
            <img className="card__img"
              src={pokemon.images.small}
              alt={pokemon.name}
            />
            <Link className="card__button" to={`/${pokemon.id}`}>View details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
