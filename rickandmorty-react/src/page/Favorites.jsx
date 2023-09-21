import React from 'react'
import { useApi } from '../api/api'
import CharacterCard from '../components/CharacterCard'
import { Link } from 'react-router-dom'

const Favorites = () => {
  // -------- Requests
  const {data, loading} = useApi({
    action: 'getCharacters',
  })

  if(loading) {
    return <span>Cargando</span>
  }

  return (
    <div>
      <div className='py-10'>
        <div className=''>
          <Link to='/' className='flex gap-1 font-semibold hover:text-primary500'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/></svg>
            Regresar
          </Link>
          <h1 className='mt-2 text-gray-700 text-3xl md:text-4xl font-extrabold tracking-tight'>PERSONAJES GUARDADOS</h1>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {!loading && data?.characters.map((item, i) => (
          <CharacterCard character={item} key={i} allowActions={false} />
        ))}
      </div>
    </div>
  )
}

export default Favorites