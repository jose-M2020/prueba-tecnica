import { useState } from 'react'
import CharacterCard from '../components/CharacterCard';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';

const Text = ({field, value}) => (
  <>
    {value && (
      <p className="mb-1">
        {field}: {value}
      </p>
    )}
  </>
)

const CharacterModal = ({ data, setModalContent }) => {
  return (
    <Modal 
      isOpen={!!data}
      onClose={() => setModalContent(null)}
      title={data?.name}
    >
      <div className="flex flex-col gap-4 sm:flex-row p-4">
        <img
          className="cursor-pointer h-[180px] w-[180px] rounded-t-lg object-contain md:!rounded-none md:!rounded-l-lg"
          src={data?.image}
          alt=""
        />
        <div className="flex flex-col justify-start">
          <Text field='Estado' value={data?.status} />
          <Text field='Especie' value={data?.species} />
          <Text field='Nombre de origen' value={data?.origin.name} />
        </div>
      </div>
    </Modal>
  )
}

const Explore = () => {
  const [characters, setCharacters] = useState([]);
  const [modalContent, setModalContent] = useState(null)
  
  return (
    <div className=''>
      <Navbar setCharacters={setCharacters} />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {characters.map((item, i) => (
          <CharacterCard
            character={item}
            key={i}
            setModalContent={setModalContent} />
        ))}
      </div>
      <CharacterModal data={modalContent} setModalContent={setModalContent} />
    </div>
  )
}

export default Explore