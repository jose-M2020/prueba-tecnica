import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import SearchInput from '../components/SearchInput'
import { ThemeColorContext } from '../theme';
import CharacterCard from '../components/CharacterCard';
import Navbar from '../components/Navbar';
import { useRickMortyApi } from '../api/rick&MortyApi';

const Explore = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    console.log(characters)
  }, [])
  
  return (
    <div className=''>
      <Navbar setCharacters={setCharacters} />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {characters.map((item, i) => (
          <CharacterCard character={item} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Explore