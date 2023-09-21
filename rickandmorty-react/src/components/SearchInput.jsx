import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useRickMortyApi } from '../api/rick&MortyApi';
import { ThemeColorContext } from '../theme';

function SearchInput({setCharacters}) {
  const [inputValue, setInputValue] = useState('')
  const { setThemeColor } = useContext(ThemeColorContext);

  const changeThemeColor = (color) => setThemeColor(color);

  // -------- Requests
  const {data: locationData, loading: loadingLocation, error: locationError, execute} = useRickMortyApi({
    action: 'getLocationById',
    urlParams: {id: inputValue}
  }, false)

  // -------- Message handlers
  useEffect(() => {
    console.log(locationError)
  }, [locationError])
  

  // -------- Get first 5 characters
  useEffect(() => {
    if (!loadingLocation && locationData) {
      const charactersUrls = locationData.residents
        .slice(0, 5)

      axios.all(
        charactersUrls.map((url) => axios.get(url))
      ).then((resp) => {
        const data = resp.map(resp => resp.data).sort((a, b) => a.name < b.name);
        setCharacters(data);
      });
    }
  }, [loadingLocation, locationData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    execute();
  }

  const handleOnChange = (e) => { 
    const value = +(e.target.value);
    setInputValue(value);

    if (value < 50) {
      changeThemeColor('green');
    } else if (value >= 50 && value < 80) {
      changeThemeColor('blue');
    } else if (value >= 80) {
      changeThemeColor('red');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative w-full md:w-[500px]">
        <input
          onChange={handleOnChange}
          type="number"
          id="search"
          className="bg-white border shadow-lg text-gray-900 rounded-lg focus:shadow-primary300 outline-none block w-full pl-3 pr-9 py-4"
          placeholder="Search..."
          required
        />
        <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg className="w-5 h-4 text-gray-500 hover:text-gray-900 hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </button>
      </div>
    </form>
  )
}

export default SearchInput