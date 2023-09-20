import React, { useEffect } from 'react'
import Button from './Button'
import { useApi } from '../api/api';

const CharacterCard = ({character}) => {
  const {
    name,
    status,
    species,
    episode,
    image,
    origin: {name: originName}
  } = character;

  const episodes = episode ? episode.slice(0, 3) : [];
  
  // -------- Requests
  const {data, loading: storing, execute: store} = useApi({
    method: 'post',
    action: 'storeCharacter',
  }, false)

  const handleClick = () => {
    store(character);
  }

  useEffect(() => {
    console.log({data})
  }, [data])
  

  return (
    <div className='rounded-lg p-6 shadow-lg shadow-primary300 text-gray-700'>
      <div className="flex flex-col gap-4 sm:flex-row">
        <img
          className="h-32 w-full rounded-t-lg object-contain md:!rounded-none md:!rounded-l-lg"
          src={image}
          alt="" />
        <div className="flex flex-col justify-start">
          <p className="mb-1">
            Nombre: {name}
          </p>
          <p className="mb-1">
            Estado: {status}
          </p>
          <p className="mb-1">
            Especie: {species}
          </p>
          <p className="mb-1">
            Nombre de origen: {originName}
          </p>
        </div>
      </div>
      <div className='mt-4'>
        {episodes.map((episode, i) => (
          <p key={i} className='truncate'>{episode}</p>
        ))}
      </div>
      <div className='mt-4 text-center'>
        <Button text='Guardar' className='text-xs px-2 mx-auto' onClick={handleClick} />
      </div>
    </div>
  )
}

export default CharacterCard