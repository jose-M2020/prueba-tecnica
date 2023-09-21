import Button from './Button'
import { useApi } from '../api/api';

const CharacterCard = ({character, allowActions = true}) => {
  

  const episodes = character.episode ? character.episode.slice(0, 3) : [];
  
  // -------- Requests
  const {data, loading: storing, execute: store} = useApi({
    method: 'post',
    action: 'storeCharacter',
  }, false)

  const handleClick = () => {
    const {
      name,
      status,
      species,
      image,
    } = character;

    store({ name, status, species, image });
  }
  

  return (
    <div className='flex flex-col gap-4 rounded-lg p-6 shadow-lg shadow-primary300 text-gray-700'>
      <div className="flex flex-col gap-4 sm:flex-row">
        <img
          className="h-[120px] w-[120px] rounded-t-lg object-contain md:!rounded-none md:!rounded-l-lg"
          src={character?.image}
          alt="" />
        <div className="flex flex-col justify-start">
          <p className="mb-1">
            Nombre: {character?.name}
          </p>
          <p className="mb-1">
            Estado: {character?.status}
          </p>
          <p className="mb-1">
            Especie: {character?.species}
          </p>
          <p className="mb-1">
            Nombre de origen: {character?.origin?.name}
          </p>
        </div>
      </div>
      <div className=''>
        {episodes.map((episode, i) => (
          <p key={i} className='truncate'>{episode}</p>
        ))}
      </div>
      {allowActions && (
        <div className='mt-auto text-center self-end '>
          <Button 
            text='Guardar'
            className='text-xs px-2 mx-auto'
            onClick={handleClick}
            loading={storing}
          />
        </div>
      )}
    </div>
  )
}

export default CharacterCard