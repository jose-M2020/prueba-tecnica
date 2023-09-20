import React from 'react'
import SearchInput from './SearchInput'
import Button from './Button'

const Navbar = ({setCharacters}) => {
  return (
    <div className='py-10 flex flex-col lg:flex-row justify-between gap-4 items-center'>
      <SearchInput setCharacters={setCharacters} />
      <Button text='mostrar personajes guardados' link='/favorites' />
    </div>
  )
}

export default Navbar