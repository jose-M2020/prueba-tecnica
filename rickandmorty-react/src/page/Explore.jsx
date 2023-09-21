import { useState } from 'react'
import CharacterCard from '../components/CharacterCard';
import Navbar from '../components/Navbar';

const Explore = () => {
  const [characters, setCharacters] = useState([]);
  
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