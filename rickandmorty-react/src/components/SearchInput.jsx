import React from 'react'

function SearchInput() {
  return (
    <div className="relative w-full md:w-[500px]">
        <input type="text" id="search" className="bg-white border shadow-lg text-gray-900 rounded-lg focus:shadow-primary300 outline-none block w-full pl-3 pr-9 py-4" placeholder="Search..." required />
        <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg className="w-5 h-4 text-gray-500 hover:text-gray-900 hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </button>
    </div>

  )
}

export default SearchInput