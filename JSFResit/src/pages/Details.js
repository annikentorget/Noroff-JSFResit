import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReadMore from '../components/ReadMore';

function Details() {
  const { id } = useParams()
  const [ pokemon, setPokemon ] = useState([])
  const apiKey = 'd428212c-b4f8-4b7c-8d25-2e50b1ff5e44';
  const apiUrl = `https://api.pokemontcg.io/v2/cards/${id}?apiKey=${apiKey}`;
  const abilities = pokemon.abilities;
  const attacks = pokemon.attacks;
  const flavorText = pokemon.flavorText;
  const hp = pokemon.hp;
  const level = pokemon.level;
  const types = pokemon.types;
  const weaknesses = pokemon.weaknesses;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.data)
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [apiUrl]);


  if (!pokemon.id) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
      <div className="pokemon__name">{pokemon.name}</div>
      <img className="pokemon__img" src={pokemon.images.large} alt="pokemon card" />
      <ReadMore className="readmore"
        abilities={abilities}
        attacks={attacks}
        flavorText={flavorText}
        hp={hp}
        level={level}
        types={types}
        weaknesses={weaknesses}
       />
    </>
  )
}

export default Details;