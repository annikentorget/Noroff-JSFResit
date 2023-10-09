import React,  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Grass = () => {
  const apiKey = 'd428212c-b4f8-4b7c-8d25-2e50b1ff5e44';
    const [grassPokemon, setGrassPokemon] = useState([]);

    useEffect(() => {
      const apiUrl = `https://api.pokemontcg.io/v2/cards?apiKey=${apiKey}`;
      fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const grassTypePokemon = data.data.filter((pokemon) => 
        pokemon.types && pokemon.types.includes('Grass')
        );

        setGrassPokemon(grassTypePokemon);
      })
      .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
      <div>
        <h1 className="form__heading">Grass Type Pokémon</h1>
        <div className="card">
          {grassPokemon.map((pokemon, index) => (
            <div key={index} className="card__content">
              <img 
                className="card__img"
                src={pokemon.images.small}
                alt={pokemon.name}
              />
              <Link className="card__button" to={`/${pokemon.id}`}>View details</Link>
            </div>
          ))}
        </div>
      </div>
    )


  }
  
  export default Grass;