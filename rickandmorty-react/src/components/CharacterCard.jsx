import React from 'react'
import Button from './Button'

const CharacterCard = () => {
  return (
    <div className='rounded-lg p-6 shadow-lg shadow-primary300 text-gray-700'>
      <div class="flex flex-col gap-4 sm:flex-row">
        <img
          class="h-32 w-full rounded-t-lg object-cover md:!rounded-none md:!rounded-l-lg"
          src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
          alt="" />
        <div class="flex flex-col justify-start">
          <p class="mb-4">
            This is a wider card with supporting
          </p>
        </div>
      </div>
      <div className='mt-4'>
        <p>ssssd sds ds d s ds d sd s dsd</p>
      </div>
      <div className='mt-4 text-center'>
        <Button text='Guardar' className='text-xs px-2 mx-auto' />
      </div>
    </div>
  )
}

export default CharacterCard