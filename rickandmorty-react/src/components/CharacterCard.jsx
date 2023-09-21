import Button from './Button'
import { useApi } from '../api/api';

const Text = ({field, value}) => (
  <>
    {value && (
      <p className="mb-1">
        {field}: {value}
      </p>
    )}
  </>
)

const CharacterCard = ({ character, setModalContent, allowActions = true }) => {
  const {
    name,
    status,
    species = '',
    image,
    episode = [],
    origin: {name: originName = ''} = {}
  } = character;

  const episodes = episode && episode.slice(0, 3);
  
  // -------- Requests
  const {loading: storing, execute: store} = useApi({
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
          className="cursor-pointer h-[120px] w-[120px] rounded-t-lg object-contain md:!rounded-none md:!rounded-l-lg"
          src={image}
          alt=""
          onClick={() => setModalContent(character)}
        />
        <div className="flex flex-col justify-start">
          <Text field='Nombre' value={name} />
          <Text field='Estado' value={status} />
          <Text field='Especie' value={species} />
          <Text field='Nombre de origen' value={originName} />
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
            className='mx-auto'
            size='sm'
            onClick={handleClick}
            loading={storing}
          />
        </div>
      )}
    </div>
  )
}

export default CharacterCard