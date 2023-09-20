import React, { useContext } from 'react'
import SearchInput from '../components/SearchInput'
import { ThemeColorContext } from '../theme';
import CharacterCard from '../components/CharacterCard';
import Navbar from '../components/Navbar';

const Explore = () => {
  const { setThemeColor } = useContext(ThemeColorContext);

  const changeThemeColor = event => setThemeColor('red');

  return (
    <div className=''>
      <Navbar />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' onClick={changeThemeColor}>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
    </div>
  )
}

export default Explore